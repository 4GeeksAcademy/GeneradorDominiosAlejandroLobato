import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.net', '.es'];

window.onload = function() {
  function obtenerTodos(){
    let todos = [];
    for (let pro of pronoun){
      for (let ad of adj){
        for (let nou of noun){
          for (let en of end){
            todos.push(pro + ad + nou + en);
          }
        }
      } 
    }
document.getElementById("todos").innerHTML = todos;
    }
    obtenerTodos()
}
