var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userWins = 0;
var userLosses = 0;
var numberOfGuesses = 9;
var userAttempts = [];

document.onkeydown = function (event) {
var myGuess = event.key;

var computerGuesses = compChoice[Math.floor(Math.random() * compChoice.length)];


var choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

if (choice.indexOf(myGuess) > -1) {

if (myGuess === computerGuesses) {
  userWins++;
  numberOfGuesses = 9;
  userAttempts = [];
}

if (numberOfGuesses === 0) {
  userLosses++;
  numberOfGuesses = 9;
  userAttempts = [];
}

if (myGuess != computerGuesses){
  numberOfGuesses--;
  userAttempts.push(myGuess);
}


var html =
"<h1><strong>The Psychic Game</strong></h1>" +
"<section>Guess the letter im thinking about!</section>" +
"<section>Wins: " + userWins + "</section>" +
"<section>Losses: " + userLosses + "</section>" +
"<section>Guesses left: " + numberOfGuesses + "</section>" +
"<section>Your guesses so far: " + userAttempts.join(", ") + "</section>";

document.querySelector("#Psychic").innerHTML = html;

}

};



