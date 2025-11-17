import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let end = ['.com', '.net', '.us', '.io', '.es'];

window.onload = function() {
  function obtenerNumeroAleatorio(max){
    return Math.floor(Math.random() *max);
  }
  function obtenerElemento(){
    let dominio = `${pronoun[obtenerNumeroAleatorio (pronoun.length)]}` + `${adj[obtenerNumeroAleatorio (adj.length)]}` + `${noun[obtenerNumeroAleatorio (noun.length)]}` + `${end[obtenerNumeroAleatorio (end.length)]}`
  document.getElementById("dominio").innerHTML = dominio;
  }
  obtenerElemento()
}
