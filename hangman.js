var words = [
  "planet",
  "dog",
  "train",
  "school",
  "popcorn"
];

var pickWord = function() {
  // Return a random word
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};

var setupAnswerArray = function(word) {
  // Return the answerArray
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  return answerArray;
};

var showPlayerProgress = function(answerArray) {
  // Use alert to show the player their progress
  alert(answerArray.join(" "));
};

var getGuess = function() {
  // Use prompt to get a guess
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");
  return guess;
};

var updateGameState = function(guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  var correctGuesses = 0;

  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess && answerArray[j] !== guess) {
      answerArray[j] = guess;
      correctGuesses++;
    }
  }
  return correctGuesses;
};

var showAnswerAndCongratulatePlayer = function(answerArray) {
  // Use alert to show the answer and congratulate the player
  alert("Good job! The answer is " + answerArray.join(""));
};

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
