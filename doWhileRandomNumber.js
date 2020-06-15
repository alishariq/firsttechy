var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
let correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  guessCount++;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (!correctGuess)
  document.write("<h1>You guessed the number!</h1>");
 document.write(`It took you ${guessCount} tries to guess the number ${randomNumber}`);





//Shortcut to doing this by another:

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess= prompt("I'm thinking of a number between 1 and 10...what is ist?");
  guessCount +=1;
  
} while  (parseInt(guess)!==randomNumber)
  document.write ("<h1> You guessed the correct number!</h1>");
  document.write ("It took you "+guessCount+" tries to guess the number "+randomNumber);
