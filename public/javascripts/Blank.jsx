import React, { Component } from 'react';

import Checkbox from 'material-ui/Checkbox';

import './csvExport.js';


export default class Blank extends Component {
  
	constructor(props) {
		super(props);
		// Operations usually carried out in componentWillMount go here
	}
	

	componentDidMount() {
	}						

	componentWillReceiveProps(newProps) {
	}
	
	
	test() {
		alert(JSON.stringify(this.state.opt));
	}
	
	render() {
		return (
			<div>
			<p>Blank</p>
			</div>
		);
	}
}