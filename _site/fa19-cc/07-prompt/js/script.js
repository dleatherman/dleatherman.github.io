'use strict';

const userInput = window.prompt('What is your name?');
const userInputNumber = window.prompt('What is your favorite number?');
const userOutputEl = document.getElementById('output');

// console.log(userInput);
// console.log(userOutputEl);

// THESE TWO LINES DO THE SAME THING
// userOutputEl.innerText = "Hello, " + userInput + "!";
// userOutputEl.innerText = `Hello, ${userInput}!`;

// Alternative solution
// userOutputEl.innerHTML += "<h1>";
// userOutputEl.innerHTML += "Hello, ";
// userOutputEl.innerHTML += userInput;
// userOutputEl.innerHTML += "!";
// userOutputEl.innerHTML += "</h1>";
userOutputEl.innerHTML = `<h1>Hello, ${userInput}! Your favorite number is ${userInputNumber}</h1>`;