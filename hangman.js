//functions
function pickWord() {
  var wordList = ["fish",
    "pancake",
    "javascript",
    "horse"
  ];
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function setupAnswerArray(word) {
  var answer = [];
  for (var i = 0; i < word.length; i++) {
    answer[i] = "_";
  }
  return answer;
}

function showPlayerProgress(answer) {
  alert(answerArray.join(" "));
}

function getGuess() {
  return prompt("Guess a letter, or click Cancel to stop playing.");
}

function updateGameState(guess, word, answerArray) {
  var correct = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      correct++;
    }
  }
  return correct;
}

function showAnswerAndCongratulatePlayer(answer) {
  alert(answer.join("") + " Congragulations!");
}

//main
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
