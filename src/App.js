import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Icon
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

injectTapEventPlugin();

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon'
];

const styles = theme => ({
  root: {
		width: "100%",
		height: 'auto',
		minHeight: '200px'
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
	},
	
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },	
});


// Drowler
const drawerWidth = 240;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null,
			open: false,
			left: false,
			value: 1
		};		
	}

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };


	render() {
		const {classes} = this.props;
		const { value } = this.state;
    const sideList = (
			<List>
				{options.map((title, index) => (
					<ListItem key={index} button component="a" href="#">
						<ListItemText primary={title} />
					</ListItem>
				))}
			</List>
					
		);
				
		return (
			<div className="App">
				<AppBar title="Hello" iconclassnameright = "muidocs-icon-navigation-expand-more">
					<Toolbar>
						<IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
							<MenuIcon className={classes.btnMenu} />
						</IconButton>

						<Typography type="title" color="inherit" className={classes.flex}>
							Title
						</Typography>

						<Button color="contrast">Login</Button>
					</Toolbar>
				</AppBar>
				
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea similique placeat libero quidem exercitationem accusantium esse molestias ad architecto odit iure, eum inventore, in ex necessitatibus delectus harum voluptates ducimus?
        <Drawer open={this.state.left}>
						{sideList}			
        </Drawer>				
				<BottomNavigation value= {value} className={classes.root}>
					<BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
					<BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
					<BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
				</BottomNavigation>				
			</div>
		);
	}
}

App.propsType = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles) (App);
