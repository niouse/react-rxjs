import Rx from "rxjs";

function createInitialState (styles, texts){
  
 return  Rx.Observable.of({ 
    styles : styles,
    texts : texts,
   email : "",
   password : "",
   message : "" 
  })
}

/*const initialState$ = Rx.Observable.of({ 
  counter: 0, 
  value1 : "bley",
  value2 : "bli",
  styles : AppStyles,
  texts : AppTexts,
  myBool : false,
});*/

export default createInitialState
//export default createInitialState