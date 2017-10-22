/* REACT CORE IMPORT */
import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

/* MATERIAL IMPORT */
import { Card, CardTitle, CardText } from 'material-ui/Card'

class Poster extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>

        <div className='row'>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
          <div className='col s12 m6'>
            <Card>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

Poster.propTypes = {}

export default Poster
