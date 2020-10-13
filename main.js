"use strict";

//get html elements
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-btn");
const hint = document.querySelector(".js-hint");
const attemps = document.querySelector(".js-attemps");
//generates a random number between 0 and 100 each time the page reloads
const randomNumber = getRandomNumber(100);
//sets the accumulator initial count to 0
let acc = 0;

//creates a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//prints the random number in the console
console.log(`Mi número aleatorio es ${randomNumber}`);

//updates the attemps
function updateAttemp () {
  //adding 1 to the accumulator each time
  acc += 1;
  attemps.innerHTML = `Número de intentos: ${acc}`;
}

//handler fot the btn listener
function updateClick () {
  //gets the input value and converts it to a number data type
  let selectedNumber = parseInt(number.value);
  //conditional statements:
  if (selectedNumber === randomNumber) {
    hint.innerHTML = "¡¡¡Has ganado campeona!!!";
  } else if (selectedNumber <= 0 || selectedNumber > 100) {
    hint.innerHTML = "El número debe estar entre 1 y 100";
  } else if (selectedNumber > randomNumber) {
    hint.innerHTML = "Demasiado alto";
  } else if (selectedNumber < randomNumber) {
    hint.innerHTML = "Demasiado bajo";
  } else {
    hint.innerHTML = "Tienes que escribir antes un número :)";
  }
  //updates the attemps each time the button is clicked
  updateAttemp();
}

//listener for the btn
btn.addEventListener("click", updateClick);
