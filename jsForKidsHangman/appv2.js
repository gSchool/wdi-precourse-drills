console.log("i am linked and working");

var gameWords = ["cheddar","whale","hammer","granite","thread"];

// Return a random word
var pickWord = function () {
  return gameWords[Math.floor(Math.random() * gameWords.length)];
};

// Return the answer array
var setupAnswerArray = function(word) {
  var x = [];
  for (var i = 0; i < word.length; i++) {
    x[i] = "_";
  }
  return x;
};

// Use alert to show the player their progress
var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

// Use prompt to get a guess
var getGuess = function () {
  var promptAnswer = (prompt("Guess a letter. Quitting is not an option. A stick figure's life is at stake.")).toLowerCase();
  return promptAnswer;
};

// Update answerArray and return a number showing how many
// times the guess appears in the word so remainingLetters
// can be updated
var updateGameState = function (guess, word, answerArray) {
    var frequency = 0;
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        frequency++;
        }
      } return frequency;
};

// Use alert to show the answer and congratulate the player
var showAnswerAndCongratulatePlayer = function (answerArray) {
  alert("The answer was " + word + ".");
};


// Hangman Code

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);
