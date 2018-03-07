import React, { Component } from 'react';
import Rx from "rxjs";

import Template from "./templates/login.template.jsx";
import createInitialState from "./state/login.initial-state"

import createAppReducer from "./reducers/login.reducer";

import createState from "./../rx-utils/createState";
import connect from "./../rx-utils/connect.jsx";

import actions from "./actions/login.actions";


import styles from "./styles/login.styles"
import texts from "./texts/login.texts"


function createComponent(){
  //console.log(childs)
  
  const initialState$ = createInitialState(styles, texts)
  
  const AppActions = actions()

  const AppReducer$ = createAppReducer(AppActions)
  
  
  const reducer$ = Rx.Observable.merge(
    AppReducer$,
  );
  
  const AppState$ = createState(reducer$, initialState$);
    
  const AppComponent = connect(AppState$, state => state, AppActions)( Template() );
  
  return AppComponent
}

export default createComponent