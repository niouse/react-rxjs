import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'


import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const Signup1 = (props)=>(<div>Sigunp 1</div>)
const Signup2 = (props)=>(<div>Sigunp 2</div>)


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
       <div id="login-container" className="container">
					<h1  id="login-title">SIGNUP</h1>
					  <ul>
                        <li>
                            <Link to={`${match.url}/signup1`}>signup1</Link>

                        </li>
                        <li>
                          <Link to={`${match.url}/signup2`}>signup2</Link>
                        </li>
                      </ul>
                  <button onClick={()=>history.push('/')}>to login</button>
                 <Route exact path={`${match.url}`} component={Signup1} />
                <Route path={`${match.url}/signup1`} component={Signup1} />
                <Route path={`${match.url}/signup2` }component={Signup2} />
				</div>
    );}
 return SignupTemplate
}



export default template