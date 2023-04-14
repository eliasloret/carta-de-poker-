/* eslint-disable */
import "./style.css";

function numcentro() {
  let n = Math.floor(Math.random() * 10) + 1;
  return n;
}

function palo(pinta) {
  let n = Math.floor(Math.random() * pinta.length);

  return n;
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let pinta = ["♣", "♠", "♥", "♦"];
  let n = palo(pinta);
  let element = document.getElementById("numero");
  let p2 = document.getElementById("pinta1");
  let p1 = document.getElementById("pinta2");
  if (n == 2 || n == 3) {
    p2.style.color = "red";
    p1.style.color = "red";
    element.style.color = "red";
  }
  element.innerHTML = numcentro();
  p1.innerHTML = pinta[n];
  p2.innerHTML = pinta[n];
};
