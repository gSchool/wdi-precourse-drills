//debugger;

var pickWord = function () {
  var wordOptions = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
  ];
  var randomWordIndex = Math.floor(Math.random() * wordOptions.length);
  return wordOptions[randomWordIndex];
};

var setupAnswerArray = function(word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
  }
  return answerArray;
};

var showPlayerProgress = function(answerArray) {
  alert(answerArray.join(" "));
};

var getGuess = function() {
  var playerGuess = prompt("Guess a letter, or click Cancel to stop playing.");
  if (playerGuess !== null) {
    playerGuess = playerGuess.toLowerCase();
  }
  return playerGuess;
};

var updateGameState = function(guess, word, answerArray) {
  var correctGuess = false;
  var answerCounter = 0;
  for (var j = 0; j < word.length; j++) {
    if (answerArray[j] === "_") {
      if (word[j] === guess) {
          answerArray[j] = guess;
          correctGuess = true;
          answerCounter++;
      }
    }
  }
  if (correctGuess) {
    return answerCounter;
  } else {
    remainingGuesses--;
    alert("I'm sorry that was incorrect. Guesses Remaining: " + remainingGuesses);
    return answerCounter;
  }
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  if (remainingGuesses > 0 && answerArray !== null) {
    alert("Good job! The answer was " + word);
  } else {
    alert("I'm sorry, but the answer was " + word);
  }
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var remainingGuesses = 6;

while (remainingLetters > 0 && remainingGuesses > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    answerArray = null;
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
