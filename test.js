var Rx =require("rxjs");

let test = new Rx.Subject

const showData1=(payload)=>{
  console.log("1", payload)
  return payload
}

const showData2=(payload)=>{
  console.log("2", payload)
  return payload
}


test.map(showData1).map(showData2).subscribe()



test.next("this is data")