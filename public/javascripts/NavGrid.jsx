import React, { Component } from 'react';

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
			<p>Blank component</p>
				</div>
		);
	}
}