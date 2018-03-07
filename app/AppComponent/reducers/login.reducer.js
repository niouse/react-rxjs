import Rx from "rxjs";
import {changeState, toggleBool} from "./../api/app.api"


function createReducer(actions){
  
  let changeState$ = actions.reqAction$.filter((payload)=>payload.type==='CHANGE_STATE')
  .map((payload)=>(state)=> ({...state, ...payload.value}))
  
  let submitUser$ = actions.reqAction$.filter((payload)=>payload.type==='SUBMIT_USER')
  .subscribe((payload)=>console.log('ask for user'))

  
  return Rx.Observable.merge(
    changeState$,
    )
    
}
  

export default createReducer;