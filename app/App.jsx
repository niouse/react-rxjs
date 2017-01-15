import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Blank from './Blank.jsx'

class Container extends Component {
		render() {
			return ( 
				<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
					<div className = "container" >
						<Blank />
					</div>
				</MuiThemeProvider>
			);
		}
	}

	ReactDOM.render(
	  <Container />,
	  document.getElementById('content')
	);