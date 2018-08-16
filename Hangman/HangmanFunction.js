var pickWord = function () {
  // Return a random word
  var words = ["javascript","monkey","amazing","pancake"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};

var setupAnswerArray = function (word) {
  // Return the answer array
  var answerArray = [];
  for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
  }
  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  // Use alert to show the player their progress
  alert(answerArray.join(" "));
};

var getGuess = function () {
  // Use prompt to get a guess
  var guess = prompt("Guess a Letter, or click cancel to stop").toLowerCase();
  return guess;
};

var updateGameState = function (guess, word, answerArray) {
  // Update answerArray and return a number showing how many
  // times the guess appears in the word so remainingLetters
  // can be updated
  for (var j = 0; j < word.length; j++){
    if(guess === word[j] && answerArray[j] === "_") {
					answerArray[j] = word[j];
					word[j] = word[j].toUpperCase();
					guessed = true;
          remainingLetters--;
    }
  }
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  // Use alert to show the answer and congratulate the player
  if (!guessed) {
    alert("Game lost!");
		alert("I'm sorry, you ran out of guesses!");
    } else {
      alert(answerArray.join(" "));
      alert("Good Job the answer was " + word)
    }
  };
