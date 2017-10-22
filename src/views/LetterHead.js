/* REACT CORE IMPORT */
import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

/* COMPONENT IMPORT */
import LetterHeadCard from '../components/LetterHeadCard'

import letterHeadData from '../data/letterHeadData'

/* MATERIAL IMPORT */

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
          {letterHeadData.map((data, key) => {
            return (
              <LetterHeadCard
                key={key}
                image={data.image}
                title={data.title}
                url={data.url}
                actionText={data.actionText}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

LetterHead.propTypes = {}

export default LetterHead
