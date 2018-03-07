import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import home from './home.template.jsx'
import error404 from "./error404.template.jsx"


const template = (childs)=> {

  const Login = childs.login
  const Signup = childs.signup
  const Home = home()
  const Error404 = error404()
  
  const Blank = ({
  styles, 
  texts, 
  reqAction,
  url = "",
}) =>{ 
    return (
       <div id="app-container" style={styles.container}>
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
           <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
           <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/home" component={Home}/>
                <Route  component={Error404}/>
        </Switch>
            </div>
    );}
 return Blank
}



export default template