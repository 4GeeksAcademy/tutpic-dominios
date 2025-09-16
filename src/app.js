import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let pronoun = ['the', 'our' , "their" , "this"];
  let adj = ['great', 'big' , "magnificent" , "incredible"];
  let noun = ['jogger', 'racoon' , "malcom" , "clarinet" , "ohio", "bus" , "ceres"];
  let ext = ["com" , "net" ,"io" , "us" , "es"]
  function rng(x) {
    return Math.floor(Math.random() * x)
  }
  function domgen() {
    let exten = ""
    let rngpronoun = pronoun[rng(pronoun.length)] 
    let rngadj = adj[rng(adj.length)]
    let rngnoun = noun[rng(noun.length)] 
    let rngext = ext[rng(ext.length)]
    for(exten of ext){
      if(rngnoun.slice(rngnoun.length - exten.length) == exten){
        rngext = exten ;
        rngnoun = rngnoun.slice( 0 , rngnoun.length - exten.length ) ;
        break
      }
    }
    return rngpronoun+rngadj+rngnoun+"."+rngext
  }
  for (let i = 0; i < 20; i++) {
    console.log(domgen())
  }
  console.log("Hello Rigo from the console!");
};
