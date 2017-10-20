import React, { Component } from 'react'

/* COMPONENT IMPORT */
import SideBarItem from './SideBarItem'

/* MATERIAL-UI */
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
// import MenuItem from 'material-ui/MenuItem'

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    return (
      <div>
        <AppBar
          title='LOGO'
          iconClassNameRight='muidocs-icon-navigation-expand-more'
          onLeftIconButtonTouchTap={() =>
            this.setState({ open: !this.state.open })}
        />

        <Drawer
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          {/* <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem> */}
          <SideBarItem />
        </Drawer>
      </div>
    )
  }
}

export default SideNav
