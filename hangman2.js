// Create an array of Keywords
var words = ['powder', 'eldora', 'steamboat', 'drycreek', 'coldcreek', 'butterfly', 'raincoat'];
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

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

function drawLineSegment(x, y, width) {
  "use strict";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.strokeStyle = "Black";
  ctx.lineWidth = 3;
  ctx.stroke();
}

function drawLetter(letter, index) {
  "use strict";
  var x = index * 30;
  if (letter !== '_') {
    ctx.font = "24px Courier";
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(letter, x + 30, 340);
  }
  drawLineSegment(x + 20, 340, 21);
}

function drawMessage(message, x, y) {
  "use strict";
  ctx.font = "24px Courier";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillStyle = "black";
  ctx.fillText(message, x, y);
};

function drawMultilineMessages(messages, x, y) {
  "use strict";
  ctx.clearRect(x, y, width, messages.length * 20);
  for (var i = 0; i < messages.length; i++) {
    drawMessage(messages[i], x, y + (i * 20));
  }
}

function showSelectedLetters(label, letterArray, starting) {
  "use strict";
  drawMessage(label, 300, starting);
  drawMessage(letterArray.join(" "), 350, starting + 20);
}

// Show the player their progress
function showPlayerProgress() {
  "use strict";
  for (var i = 0; i < wordArray.length; i++) {
    drawLetter(wordArray[i], i);
  }

  ctx.clearRect(300, 180, 200, 150);
  showSelectedLetters("Correct Letters", correctLetters, 180);
  showSelectedLetters("Wrong Guesses", wrongLetters, 250);
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
function showAnswerAndCongratulatePlayer(remainingLetters, wrongGuesses) {
  "use strict";
  if (remainingLetters === 0) {
    drawMessage('Good job!  The answer was \'' + word + '\'', 20, 20);
  } else if (wrongGuesses === 7) {
    drawMultilineMessages(['Game Over!',
      'You guessed incorrectly 7 times.',
      'The answer was \"' + word + '\"'
    ], 20, 10);
  }
}

var drawHangman = function(stage) {
  "use strict";
  var x = 100;
  var y = 120;
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  switch (stage) {
    case 1:
      // head
      circle(x + 5, y + 5, 15, "black", false);
      break;
    case 2:
      // neck
      ctx.moveTo(x + 5, y + 20);
      ctx.lineTo(x + 5, y + 35);
      break;
    case 3:
      // torso
      ctx.moveTo(x + 5, y + 35);
      ctx.lineTo(x + 5, y + 85);
      break;
    case 4:
      // left arm
      ctx.moveTo(x + 5, y + 35);
      ctx.lineTo(x - 30, y + 55);
      break;
    case 5:
      // right arm
      ctx.moveTo(x + 5, y + 35);
      ctx.lineTo(x + 40, y + 55);
      break;
    case 6:
      // left leg
      ctx.moveTo(x + 5, y + 85);
      ctx.lineTo(x - 35, y + 130);
      break;
    case 7:
      // right leg
      ctx.moveTo(x + 5, y + 85);
      ctx.lineTo(x + 45, y + 130);
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

var correctLetters;
var wrongLetters;
var word;
var wordArray;
var remainingLetters;
var wrongGuesses;

$("#startOver").click(function() {
  "use strict";
  ctx.clearRect(0, 0, width, height);
  correctLetters = [];
  wrongLetters = [];
  word = pickWord();
  remainingLetters = word.length;
  wrongGuesses = 0;
  wordArray = setupAnswerArray(word);
  showPlayerProgress();
  drawMessage("Enter a Letter.", 20, 20);
  $(this).fadeOut();
});

$("body").keydown(function(event) {
  "use strict";
  console.log(event.key);
  ctx.clearRect(0, 0, width, height);
  var guess = event.key;
  var correctGuesses = updateGameState(guess, word, wordArray);
  if (correctGuesses > 0) {
    if (correctLetters.indexOf(guess) < 0) {
      remainingLetters -= correctGuesses;
      correctLetters.push(guess);
    }
  } else {
    if (wrongLetters.indexOf(guess) < 0) {
      wrongGuesses++;
      wrongLetters.push(guess);
    }
  }
  for (var i = 0; i < wrongGuesses; i++) {
    drawHangman(i + 1);
  }
  showPlayerProgress();
  if (remainingLetters <= 0 || wrongGuesses >= 7) {
    showAnswerAndCongratulatePlayer(remainingLetters, wrongGuesses);
    $("#startOver").text("Start Over");
    $("#startOver").fadeIn();
  }
  else {
    drawMessage("Enter a Letter.", 20, 20);
  }
});
