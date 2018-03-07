import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const template = (childs) => {

const Error404Template = ({
  styles, 
  texts, 
}) =>{ 
    console.log(match)
    console.log(location)
    console.log(history)
    
    return (
       <div id="error-container" className="container">
          <h1  id="error-title">ERROR</h1>
          <p>404</p>
		</div>
    );}
 return Error404Template
}



export default template