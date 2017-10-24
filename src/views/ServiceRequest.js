import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

// eslint-disable-next-line
import PropTypes from 'prop-types'

/* COMPONENT IMPORT */
import IconCheckbox from '../components/IconCheckbox'

// Data Import singleLineFields, multiLineFields,
import { leftCheckboxes, rightCheckboxes } from '../data/serviceRequestFields'
import infoLogo from '../images/info.svg'

/* MATERIAL IMPORT */
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import Checkbox from 'material-ui/Checkbox'
// import Formsy from 'formsy-react' FormsyCheckbox
import { FormsyText } from 'formsy-material-ui/lib'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
}

class ServiceRequest extends Component {
  constructor (props) {
    super(props)

    const checkboxProps = [...leftCheckboxes, ...rightCheckboxes].reduce(
      (acc, label, index) => ({
        [this.formatLabelToProperty(label.name)]: false,
        ...acc
      }),
      {}
    )

    this.state = {
      form: {
        fileInput: null,
        fileValid: true
      },
      loadingDialogOpen: false,
      resultDialogOpen: false,
      resultDialogText: null,
      resultDialogSuccess: true,
      canSubmit: false
    }

    Object.assign(this.state.form, checkboxProps)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    const name = target.name
    const form = Object.assign({}, this.state.form)

    form[name] = value

    this.setState({ form })
  }

  formatLabelToProperty = label =>
    label
      .split(' (')[0]
      .toLowerCase()
      .split(' ')
      .join('-')

  render () {
    // const fileValue = this.state.form.fileInput || 'Select a file to upload'

    return (
      <div className='container'>
        <Helmet>
          <title>Service Request | Resource Center</title>
        </Helmet>

        <div className='row'>
          <div className='col s12 flow-text'>
            <h2>Please use this Form to send Request</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>

          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>
          <div className='col s12 m6'>
            <TextField
              floatingLabelText='Multiline and Floating Label'
              multiLine
              rows={2}
              fullWidth
            />
          </div>

          <div className='col s12 m6'>
            <DatePicker hintText='Portrait Dialog' />
          </div>
          <div className='col s12 m6'>
            <DatePicker hintText='File Upload' />
          </div>

          <div className='col s12 m6 checkbox-col'>
            {leftCheckboxes.map((label, index) => (
              <div key={index}>
                <IconCheckbox
                  label={label.name}
                  name={label.name.toLowerCase()}
                  isChecked={this.state.form[label.name.toLowerCase()]}
                  key={index + label.name}
                  handleCheck={event => this.handleInputChange(event)}
                  style={styles.checkbox}
                  inputStyle={styles.inputStyle}
                  src={infoLogo}
                  alt='Info Button'
                  icon={label.icon ? label.icon : false}
                  dialogText={label.dialogText && label.dialogText}
                  dialogTitle={label.dialogTitle && label.dialogTitle}
                  conditionalFields={label.conditionalFields}
                />
                {label.conditionalFields &&
                  this.state.form[label.name.toLowerCase()] &&
                  label.conditionalFields.map(field => (
                    <FormsyText
                      key={field.name}
                      floatingLabelText={
                        field.required ? field.name + ' *' : field.name
                      }
                      name={field.name.toLowerCase()}
                      value={this.state.form[field.name]}
                      onChange={this.handleInputChange}
                      fullWidth
                      id={`${field.name.toLowerCase()}-field`}
                      required={field.required}
                      validations={field.type}
                      validationError={field.error}
                      className='formsy-input'
                      style={{ margin: '0 0 8px 0' }}
                    />
                  ))}
              </div>
            ))}
          </div>

          <div className='col s12 m6 checkbox-col'>
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>

          <div className='col s12'>
            <RaisedButton label='Submit' primary />
            <Checkbox label='Simple' style={styles.checkbox} />
          </div>
        </div>
      </div>
    )
  }
}

ServiceRequest.propTypes = {}

export default ServiceRequest
