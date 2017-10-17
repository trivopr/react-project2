import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme({
    palette: {
        backgroundColor: 'red'
    },
    appBar: {
        height: 50
    },
    overrides: {
        MuiAppBar: {
          // Name of the styleSheet
          root: {
            // Name of the rule
            backgroundColor: 'yellow',
            primary12Color: '#21412a'
          },
        },
      },    
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App /> 
    </MuiThemeProvider>,
    document.getElementById('root'));

    registerServiceWorker();
