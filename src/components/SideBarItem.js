import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

/* MATERIAL UI */
import { ListItem } from 'material-ui/List'

const SideBarItem = ({ isExact, linkTo, primaryText, onClick }) => {
  return (
    <div>
      <NavLink
        activeClassName='active'
        exact={isExact}
        to={linkTo}
        onClick={onClick}
      >
        <ListItem primaryText={primaryText} hoverColor='#eee' />
      </NavLink>
    </div>
  )
}

SideBarItem.propTypes = {}

export default SideBarItem
