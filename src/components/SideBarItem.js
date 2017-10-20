import React, { Component } from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/* MATERIAL UI */
import { List, ListItem } from 'material-ui/List'

class SideBarItem extends Component {
  render () {
    return (
      <div>
        <List>
          <Link to='/'>
            <ListItem primaryText='Home' />
          </Link>
          <Link to='/logos'>
            <ListItem primaryText='Logos' />
          </Link>
        </List>
      </div>
    )
  }
}

SideBarItem.propTypes = {}

export default SideBarItem
