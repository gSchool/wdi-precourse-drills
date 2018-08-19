var pickWord = function () {
  var words = ["taco","notebook","waterbottle","chair"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};
 var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++){
  answerArray[i] = "_";
  }
  return answerArray;
};
 var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};
 var getGuess = function () {
  var guess = prompt("Guess a Letter").toLowerCase();
  return guess;
};
 var updateGameState = function (guess, word, answerArray) {
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
  if (!guessed) {
    alert("Game Over!");
		alert("Out of guesses!");
    } else {
      alert(answerArray.join(" "));
      alert("The answer was " + word)
    }
  };