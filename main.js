"use strict";

const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-btn");
const hint = document.querySelector(".js-hint");
const attemps = document.querySelector(".js-attemps");
const reset = document.querySelector(".js-reset");
//generates a random number between 0 and 100 each time the page reloads
const randomNumber = getRandomNumber(100);
//sets the accumulator initial count to 0
let acc = 0;

//creates a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
console.log(`Mi número aleatorio es ${randomNumber}`);

function updateAttemp() {
  //adding 1 to the accumulator each time
  acc += 1;
  attemps.innerHTML = `Número de intentos: ${acc}`;
}

function updateClue() {
  //gets the input value and converts it to a number data type
  let selectedNumber = parseInt(number.value);
  if (selectedNumber === randomNumber) {
    renderHint("¡¡¡Has ganado campeona!!!");
  } else if (selectedNumber <= 0 || selectedNumber > 100) {
    renderHint("El número debe estar entre 1 y 100");
  } else if (selectedNumber > randomNumber) {
    renderHint("Demasiado alto");
  } else if (selectedNumber < randomNumber) {
    renderHint("Demasiado bajo");
  } else {
    renderHint("Pista: escribe primero un número :)");
  }
}

//to render the hint messages within the conditional statements
function renderHint(string) {
  hint.innerHTML = string;
}

//handler fot the btn listener
function updateClick() {
  updateClue();
  updateAttemp();
}

//reset attemps: sets the accumulator initial count to 0 again
function resetBtn() {
  acc = 0;
  attemps.innerHTML = `Número de intentos: ${acc}`;
}

//listener for the button
btn.addEventListener("click", updateClick);
//listener for the reset button
reset.addEventListener("click", resetBtn);
