/* REACT CORE */
import React, { Component } from 'react'

/* MATERIAL IMPORT */
import { Card, CardTitle, CardText } from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton';

/* STYLE */
import '../styles/home.css'

// eslint-disable-next-line
import PropTypes from 'prop-types'

class Home extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
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
          <div className='col s12 m4'>
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
          <div className='col s12 m4'>
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
          <div className='col s12 m4'>
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
          <div className='col s12 m4'>
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
          <div className='col s12 m4'>
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

Home.propTypes = {}

export default Home
