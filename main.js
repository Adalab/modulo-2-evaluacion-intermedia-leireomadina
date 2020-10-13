"use strict";

//get html elements
const number = document.querySelector(".js-number");
const btn = document.querySelector(".js-btn");
const hint = document.querySelector(".js-hint");
const attemps = document.querySelector(".js-attemps");

//generates a random number between 0 and 100 each times the page is refreshed
const randomNumber = getRandomNumber(100);
//gets the input value
// let selectedNumber;

//creates a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//prints the random number in the console
console.log(`Mi número aleatorio es ${randomNumber}`);
//checks data type: it is a number
// console.log(typeof(randomNumber));


//handler fot the btn listener
function updateClick () {
  //gets the input value and converts it to a number data type
  let selectedNumber = parseInt(number.value);
  console.log(`El número seleccionado por el usuario es ${selectedNumber}`);
  //checks data type: it is a string
  // console.log(typeof(selectedNumber));
  if (selectedNumber === randomNumber) {
    hint.innerHTML = "¡¡¡Has ganado campeona!!!";
  } else if (selectedNumber <= 0 || selectedNumber > 100) {
    hint.innerHTML = "El número debe estar entre 1 y 100";
  } else if (selectedNumber > randomNumber) {
    hint.innerHTML = "Demasiado alto";
  } else if (selectedNumber < randomNumber) {
    hint.innerHTML = "Demasiado bajo";
  } else {
    hint.innerHTML = "Tienes que escribir antes un número";
  }
}

//does not work ftm :(
// function convertToNumber (string) {
//   return parseInt(string);
// }

//listener
btn.addEventListener("click", updateClick);
