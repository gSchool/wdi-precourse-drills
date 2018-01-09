// Create an array of Keywords
const words = ['powder', 'eldora', 'steamboat', 'drycreek', 'coldcreek', 'butterfly', 'raincoat'];

// Pick a random words
function pickWord() {
  "use strict";
  return words[Math.floor(Math.random() * words.length)];
}

// Set up the answer array
function setupAnswerArray(word)
{
  "use strict";
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
}

// Show the player their progress
function showPlayerProgress(answerArray) {
  "use strict";
  alert(answerArray.join(' '));
}

// Get a guess from the player
function getGuess() {
  "use strict";
  return prompt('Guess a letter, or click Cancel to stop playing.');
}

// Update the game state with the guess
function updateGameState(guess, word, answerArray) {
  "use strict";
  var correctGuesses = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      correctGuesses++;
    }
  }
  return correctGuesses;
}

// Show the answer and congratulate the player
function showAnswerAndCongratulatePlayer(remainingLetters, wrongGuesses, answerArray) {
  "use strict";
  if (remainingLetters === 0) {
    alert(answerArray.join(' '));
    alert('Good job!  The answer was ' + word);
  }
  else if (wrongGuesses === 3){
    alert('You guessed incorrectly 3 times.  The answer was ' + word);
  }
  else {
    alert('Game Over!');
  }
}

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var wrongGuesses = 0;

// The game loop
while (remainingLetters > 0 &&
       wrongGuesses < 3) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    // Exit the game loop
    break;
  }
  else if (guess.length !== 1) {
    alert('Please enter a single letter');
  }
  else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    if (correctGuesses > 0) {
      remainingLetters -= correctGuesses;
    }
    else {
      wrongGuesses++;
    }
  }
  // The end of the game loop
}
showAnswerAndCongratulatePlayer(remainingLetters, wrongGuesses, answerArray);
