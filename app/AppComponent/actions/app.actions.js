import Rx from "rxjs";


function templateActions(){
  return ({
    reqAction$ : new Rx.Subject,
    actionDone$ : new Rx.Subject
  })
}

export default templateActions;