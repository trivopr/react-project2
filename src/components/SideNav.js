import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'

class SideNav extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
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
      </div>
    )
  }
}

export default SideNav
