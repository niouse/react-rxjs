import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';




const template = (childs) => {

const SignupTemplate = ({
  styles, 
  texts, 
  reqAction,
  match,
  location,
  history
}) =>{ 
    console.log(match)
    console.log(location)
    console.log(history)
    
    return (
       <div id="home-container" className="container">
          <h1  id="home-title">THIS IS HOME</h1>
		</div>
    );}
 return SignupTemplate
}



export default template