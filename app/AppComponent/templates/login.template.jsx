import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const template = (childs) => {

  const LoginTemplate = ({
  styles, 
  texts, 
  reqAction,
  message,
  email,
  password,
}) =>{ 

    return (
       <div id="login-container" className="container" style={styles.container}>
					<h1  id="login-title" style={styles.title}>{texts.title}</h1>
					 <form 
						 id="login-form"
						 className="register" 
						 style={styles.form} 
						 onSubmit={(e)=>{e.preventDefault(); reqAction({type: 'SUBMIT_USER'})}}
					>
						<TextField
							  id="login-mailInput"
							  style={styles.mailInput}
							  hintText="Hint Text"
							  type="email" 
							  pattern="[^ @]*@[^ @]*"
							  floatingLabelText={texts.email}				
							  required="true"
                              value={email}
                              onChange={(event, value)=>reqAction({type:'CHANGE_STATE', value: {email:value}})}
						/>

						 <TextField
							  id="login-passwordInput"
							  style={styles.passwordInput}
							  type="password" 
							  pattern=".{5,20}"
							  hintText="Hint Text"
							  floatingLabelText={texts.password}
							  required="true" 
                              value={password}
                              onChange={(event, value)=>reqAction({type:'CHANGE_STATE', value: {password:value}})}

							/>

							<RaisedButton 
								id="login-submitUserButton"
								style={styles.submitUserButton}
								type="submit" 
								label={texts.submitUserButton || " "} 
								primary={true} 
							/>

						 {/*<p id="login-_or">{texts._or || "or"}</p>
						 <RaisedButton 
							 id="login-goToSignupButton"
							 style={styles.goToSignupButton}
							 label={texts.goToSignupButton || " "}
							 primary={true}  
							 onClick={()=>{props.goToSignup()}}  
						/>*/}
					</form>	
					
					<p id="login-message" style={styles.message}>
						{message}
					</p>
					{/*<button onClick={()=>props.AppLanguageNext('fr')}>test </button>*/}
				</div>
    );}
 return LoginTemplate
}



export default template