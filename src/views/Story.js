import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

/* MATERIAL IMPORT */
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Story extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 flow-text'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </p>
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
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12 m6'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>

          <div className='col s12'>
            <TextField floatingLabelText='Floating Label Text' fullWidth />
          </div>
          <div className='col s12'>
            <RaisedButton label='Primary' primary />
          </div>
        </div>
      </div>
    )
  }
}

Story.propTypes = {}

export default Story
