import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

const styles = () => ({
  root: {
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  btnMenu: {
	color: 'yellow'
  }
});

class App extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className="App">
				<AppBar>
					<Toolbar>
						<IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
							<MenuIcon className={classes.btnMenu} />
						</IconButton>

						<Typography type="title" color="inherit" className={classes.flex}>
							Title
						</Typography>

						<Button color="contrast">Login</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

App.propsType = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles) (App);
