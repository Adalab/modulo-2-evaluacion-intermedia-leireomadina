"use strict";

//get html elements
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-btn");
const hint = document.querySelector(".js-hint");
const attemps = document.querySelector(".js-attemps");

//generates a random number between 0 and 100 each times the page is refreshed
const randomNumber = getRandomNumber(100);

//creates a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//prints the random number in the console
console.log(`Mi número aleatorio es ${randomNumber}`);


//handler fot the btn listener
function updateClick () {
  //gets the input value
  let selectedNumber = number.value;
  console.log(`El número seleccionado por el usuario es ${selectedNumber}`);
}

//listener
btn.addEventListener("click", updateClick);
