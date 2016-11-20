var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6 ) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} 
if ( correctGuess ) {
    document.write('<p>You guessed the number!</p>');
} else if (parseInt(guess) > randomNumber) {
    var guess2 = prompt('Sorry. The number is smaller than ' + guess + '. Please guess again.');
} else {
    var guess2 = prompt('Sorry. The number is larger than ' + guess + '. Please guess again.');
} 
if (!guess2) {
  
} else if ( parseInt(guess2) === randomNumber ) {
    document.write('<p>You guessed the number!</p>');
} else {
	document.write('<p>Sorry, the number was ' + randomNumber + '.</p>');
}

