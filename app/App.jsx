import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import app from "./AppComponent/app.component";

const App = app(); 


class Container extends Component {
		render() {
			return ( 
				<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                   <Router>
                      <App />
                   </Router>
				</MuiThemeProvider>
			);
		}
	}

ReactDOM.render(
  <Container />,
  document.getElementById('content')
);