/* REACT CORE IMPORT */
import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

/* MATERIAL IMPORT */
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMedia
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class LetterHead extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>

              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardMedia
                overlay={
                  <CardTitle
                    title='Overlay title'
                    subtitle='Overlay subtitle'
                  />
                }
              >
                <img src='img-dump/image1.jpg' alt='' />
              </CardMedia>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton label='Action1' />
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

LetterHead.propTypes = {}

export default LetterHead
