// Create an array of Keywords
const words = ['powder', 'eldora', 'steamboat', 'drycreek', 'coldcreek', 'butterfly', 'raincoat'];

// Pick a random words
function pickWord() {
  "use strict";
  return words[Math.floor(Math.random() * words.length)];
}

// Set up the answer array
function setupAnswerArray(word) {
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
  } else if (wrongGuesses === 7) {
    //alert('You guessed incorrectly 3 times.  The answer was ' + word);
  } else {
    alert('Game Over!');
  }
}

var drawHangman = function(stage) {
  "use strict";
  alert('draw');
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  switch (stage) {
    case 0:
      // head
      circle(65, 45, 15, "black", false);
      break;
    case 1:
      // neck
      ctx.moveTo(65, 60);
      ctx.lineTo(65, 75);
      break;
    case 2:
      // torso
      ctx.moveTo(65, 75);
      ctx.lineTo(65, 125);
      break;
    case 3:
      // left arm
      ctx.moveTo(65, 75);
      ctx.lineTo(30, 95);
      break;
    case 4:
      // right arm
      ctx.moveTo(65, 75);
      ctx.lineTo(100, 95);
      break;
    case 5:
      // left leg
      ctx.moveTo(65, 125);
      ctx.lineTo(25, 170);
      break;
    case 6:
      // right leg
      ctx.moveTo(65, 125);
      ctx.lineTo(105, 170);
      break;
  }
  ctx.stroke();
};

var circle = function(x, y, radius, style, fillCircle) {
  "use strict";
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  if (fillCircle) {
    ctx.fillStyle = style;
    ctx.fill();
  } else {
    ctx.strokeStyle = style;
    ctx.stroke();
  }
};

$(document).ready(function() {
  "use strict";
  var word = pickWord();
  var answerArray = setupAnswerArray(word);
  var remainingLetters = word.length;
  var wrongGuesses = 0;

  // The game loop
  while (remainingLetters > 0 &&
    wrongGuesses < 7) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
      // Exit the game loop
      break;
    } else if (guess.length !== 1) {
      alert('Please enter a single letter');
    } else {
      var correctGuesses = updateGameState(guess, word, answerArray);
      if (correctGuesses > 0) {
        remainingLetters -= correctGuesses;
      } else {
        drawHangman(wrongGuesses);
        wrongGuesses++;
      }
    }
    // The end of the game loop
  }
  showAnswerAndCongratulatePlayer(remainingLetters, wrongGuesses, answerArray);
});
