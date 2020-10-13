"use strict";

//tests if the js file works
// alert ("Hola");

//get html elements
const number = document.querySelector(".js-number");
// console.log(number);
const btn = document.querySelector(".js-btn");
// console.log(btn);
const hint = document.querySelector(".js-hint");
// console.log(hint);
const attemps = document.querySelector(".js-attemps");
// console.log(attemps);

//creates a random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(getRandomNumber(100));