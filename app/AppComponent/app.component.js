import React, { Component } from 'react';
import Rx from "rxjs";

import AppTemplate from "./templates/app.template.jsx";
import createInitialState from "./state/app.initial-state"

import createAppReducer from "./reducers/app.reducer";

import createState from "./../rx-utils/createState";
import connect from "./../rx-utils/connect.jsx";

import actions from "./actions/app.actions";


import styles from "./styles/app.styles-default"
import texts from "./texts/app.texts"

//CHILDS
import Login from "./login.component.js"
import Signup from "./templates/signup.template.jsx"

function createComponent(){
  //console.log(childs)
  
  const initialState$ = createInitialState(styles, texts)
  const AppActions = actions()
  const AppReducer$ = createAppReducer(AppActions)
  
  
  const reducer$ = Rx.Observable.merge(
    AppReducer$,
  );
    
  const childs = {
    login : Login(),
    signup : Signup()
   }
  
  const AppState$ = createState(reducer$, initialState$);
    
  const AppComponent = connect(AppState$, state => state, AppActions)( AppTemplate(childs) );
  
  return AppComponent
}

export default createComponent