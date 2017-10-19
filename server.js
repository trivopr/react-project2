require('dotenv').config()
const express = require('express')
const path = require('path')
const fs = require('fs')
const formidable = require('formidable')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const app = express()
const fetch = require('node-fetch')
const xssFilters = require('xss-filters')

const PORT = process.env.SERVER_PORT || 9000
// const CLIENT_PORT = process.env.PORT || 3000
const PROTOCOL = process.env.PROTOCOL || 'http'
const HOSTNAME = process.env.HOST || 'localhost'
const UPLOAD_DIR = path.join(__dirname, 'uploads/')
const CORS =
  process.env.NODE_ENV === 'production' ? `${PROTOCOL}://${HOSTNAME}` : `*`
const ENABLE_SEND_EMAILS =
  process.env.NODE_ENV === 'production' ||
  process.env.ENABLE_SEND_EMAILS === 'true'

const ENABLE_WRIKE =
  process.env.NODE_ENV === 'production' || process.env.ENABLE_WRIKE === 'true'

if (ENABLE_SEND_EMAILS) {
  console.info('Sending emails is enabled')
} else {
  console.info('Sending emails is disabled')
}

if (ENABLE_WRIKE) {
  console.info('Wrike integration is enabled')
} else {
  console.info('Wrike integration is disabled')
}

// This converts {a:1, b:2} into 'a=1&b=2'
const queryParams = obj =>
  Object.keys(obj)
    .map(key => [key, obj[key]]) // There is no Object.entries() in node 6
    .map(
      ([key, val]) => encodeURIComponent(key) + '=' + encodeURIComponent(val)
    )
    .join('&')

const wrikeMkFolder = (name, content) =>
  fetch(process.env.WRIKE_URL, {
    body: queryParams({
      title: name,
      description: content,
      shareds: process.env.WRIKE_SHARE_ID,
      project: process.env.WRIKE_OWNER_ID
    }),
    method: 'post',
    headers: {
      Authorization: `bearer ${process.env.WRIKE_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(res => res.json())

const wrikeAddAttachment = (id, file, name, type) =>
  fetch(`https://www.wrike.com/api/v3/folders/${id}/attachments`, {
    body: file,
    method: 'post',
    headers: {
      Authorization: `bearer ${process.env.WRIKE_TOKEN}`,
      'x-requested-with': 'XMLHttpRequest',
      'x-file-name': name,
      'content-type': type,
      'cache-control': 'no-cache'
    }
  }).then(res => res.json())

if (!fs.existsSync(UPLOAD_DIR)) {
  console.warn('Creating uploads folder...')
  fs.mkdirSync(UPLOAD_DIR)
}
console.info(`Uploads will be saved in ${UPLOAD_DIR}`)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Handle Story form submissions
app.post('/story-form', function (req, res) {
  const form = new formidable.IncomingForm()
  // In any case send the cors headers (even on error)
  res.header('Access-Control-Allow-Origin', CORS)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  form.parse(req)

  const fields = {}
  let fieldsString = ''
  form.on('field', (name, value) => {
    fields[name] = value
    fieldsString =
      fieldsString +
      `<span><span style='text-transform: capitalize;'>${xssFilters.inHTMLData(
        name
      )}</span>: ${xssFilters.inHTMLData(value)}</span><br /><br />`
  })

  // Handle a possible error while parsing the request
  // We need a variable in this scope to hold whether there was an error
  // because we need to know that in a different callback
  let error = false
  form.on('error', err => {
    error = true
    console.log('Error while parsing request to /story-form: ' + err)
    res
      .status(400) // Bad request
      .json({ success: false, status: 'Error parsing the request' })
  })

  form.on('end', () => {
    // The end event is fired even if an error occurs, so we
    // need to prevent from sending a second response, otherwise the
    // server crashes
    if (error) return
    console.log('Received fields:\n' + JSON.stringify(fields, null, 2))
    console.log(fieldsString)

    const emailBody = `Thank you for your submission!<br /><br />${fieldsString}`

    // Here is a good place to send the emails since we have the fields
    // We don't want to actually send emails during testing since it
    // would send a test email on every single commit
    if (ENABLE_SEND_EMAILS) {
      const msg = {
        to: fields.email,
        bcc:
          process.env.NODE_ENV === 'production'
            ? [
              'jweigel@franciscan.edu',
              process.env.STORY_EMAIL1,
              process.env.STORY_EMAIL2
            ]
            : 'jweigel@franciscan.edu',
        from: 'resourcecenter@franciscan.edu',
        replyTo: 'jweigel@franciscan.edu',
        subject: 'Suggest a Story Form Submission',
        text: 'Story suggestion submitted successfully!',
        html: emailBody
      }
      sgMail
        .send(msg)
        .then(() => console.log('Mail sent successfully'))
        .catch(error => console.error(error.toString()))
    }

    // Send the success response
    res
      .status(200)
      .json({ success: true, status: 'Form successfully submitted' })
  })
})

// Handle Service Request Form Submissions
app.post('/uploads', function (req, res) {
  const form = new formidable.IncomingForm()
  form.maxFileSize = 2

  // In any case send the cors headers (even on error)
  res.header('Access-Control-Allow-Origin', CORS)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  form.parse(req)

  // The events we subscribe to in the form occur in the following order
  // field - multiple times
  // fileBegin then file - once per file
  // error - only if there was a parsing error
  // end - when all other events have been handled and the files have
  //       finished being written to the disk, this event happens even
  //       if there was an error

  form.on('fileBegin', function (name, file) {
    // https://stackoverflow.com/a/30550190/4718107
    const fileType = file.type.split('/').pop()
    const fileExtension = file.name.split('.').pop()
    const hasDots = file.name.match('.').length > 1
    const hasSlash = file.name.includes('/')
    const fileTypes = /(vnd.rar|pdf|msword|vnd.openxmlformats-officedocument.wordprocessingml.document|vnd.openxmlformats-officedocument.spreadsheetml.sheet|vnd.ms-excel|vnd.ms-powerpoint|vnd.openxmlformats-officedocument.presentationml.presentation|mp4|mpeg|plain|zip|quicktime|avi|wav|jpeg|octet-stream|png)$/i
    const fileExtensions = /(zip|pdf|docx?|xlsx?|pptx?|mp3|txt|plain|rar|wma|mov|avi|wmv|mp4|flv|wav|jpe?g|psd|png)$/i
    // https://docs.nodejitsu.com/articles/file-system/security/introduction/
    const posionNullBytesCheck = file.name.indexOf('\0') !== -1

    console.log(fileExtensions.test(fileExtension))
    if (
      !posionNullBytesCheck &&
      fileTypes.test(fileType) &&
      fileExtensions.test(fileExtension) &&
      !hasDots &&
      !hasSlash &&
      form.bytesExpected < 10 * 1024 * 1024 &&
      form.bytesReceived < 10 * 1024 * 1024
    ) {
      file.path = path.join(UPLOAD_DIR, file.name)
    } else {
      console.log('incorrect file type: ' + fileType)
    }
  })

  form.on('file', function (name, file) {
    console.log('Uploaded ' + file.name)
  })

  const files = []

  form.on('file', function (name, file) {
    files.push(file)
  })

  const fields = {}
  let fieldsString = ''
  form.on('field', (name, value) => {
    fields[name] = value
    fieldsString =
      value !== 'false' && name !== 'fileValid' && value !== 'null'
        ? fieldsString +
          `<span><span style='text-transform: capitalize;'>${xssFilters.inHTMLData(
            name
          )}</span>: ${xssFilters.inHTMLData(value)}</span><br /><br />`
        : fieldsString
  })

  // Handle a possible error while parsing the request
  // We need a variable in this scope to hold whether there was an error
  // because we need to know that in a different callback
  let error = false
  form.on('error', err => {
    error = true
    console.log('Error while parsing request to /uploads: ' + err)
    res
      .status(400) // Bad request
      .json({ success: false, status: 'Error parsing the request' })
  })

  form.on('end', () => {
    // The end event is fired even if an error occurs, so we
    // need to prevent from sending a second response, otherwise the
    // server crashes
    if (error) return
    console.log('Received fields:\n' + JSON.stringify(fields, null, 2))

    const emailBody = `Thank you for your request!<br /> <br />${fieldsString}`

    // TODO: Validate fields

    // Here is a good place to send the emails since we have the fields
    // We don't want to actually send emails during testing since it
    // would send a test email on every single commit
    if (ENABLE_SEND_EMAILS) {
      const msg = {
        to: fields.email,
        bcc:
          process.env.NODE_ENV === 'production'
            ? ['jweigel@franciscan.edu', process.env.SRF_EMAIL]
            : 'jweigel@franciscan.edu',
        from: 'resourcecenter@franciscan.edu',
        replyTo: process.env.SRF_REPLY,
        subject: 'New Service Request Form Submission',
        text: 'Request submitted successfully!',
        html: emailBody
      }
      sgMail
        .send(msg)
        .then(() => console.log('Mail sent successfully'))
        .catch(error => console.error(error.toString()))
    }

    // Create project and attach files in wrike
    if (ENABLE_WRIKE) {
      wrikeMkFolder(fields['email'], fieldsString)
        .then(status => {
          const folderId = status.data[0].id
          for (const file of files) {
            // Formidable files are just metadata, not the actual file
            // Use the file name to create a ReadStream and pass it to
            // node-fetch which can handle ReadStreams
            // To pass a ReadStream is something like piping the file
            // instead of reading the whole file and passing it
            const readStream = fs.createReadStream(file.path)
            wrikeAddAttachment(
              folderId,
              readStream,
              file.name,
              file.type
            ).catch(err => {
              console.log(
                'Error while reading file for upload to Wrike: ' + err
              )
              console.log('Filename: ' + file.path)
            })
          }
        })
        .catch(err => {
          console.log('Error while creating a project in Wrike: ' + err)
        })
    }

    // Send the success response
    res
      .status(200)
      .json({ success: true, status: 'Form successfully submitted' })
  })
})

app.listen(PORT, _ =>
  console.info(
    `Server listening on PORT ${PORT}... Mode ${process.env.NODE_ENV}`
  )
)
