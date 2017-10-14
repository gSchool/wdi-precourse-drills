const words = ["book", "beer", "bike", "surfing", "dancing"]

function pickWord() {
  const random = Math.floor(Math.random() * words.length);
  return words[random];
}

function setupAnswerArray(word) {
  return new Array(word.length).fill("_");
}

function showPlayerProgress(answerArray) {
  alert(answerArray.join(" "));
}

function getGuess() {
  return prompt("Guess a letter, or click Cancel to stop playing.");
}

function updateGameState(guess, word, answerArray) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess) {
      answerArray[i] = guess;
      count += 1;
    }
  }
  return count;
}

function showAnswerAndCongratulatePlayer(answerArray) {
  const answer = answerArray.join(" ");
  alert(answer);
  alert("Good job! The answer was " + answer);
}


function runGame() {

  const word = pickWord(),
        answerArray = setupAnswerArray(word);

  let remainingLetters = word.length,
      guess,
      correctGuesses;

  while (remainingLetters > 0) {

    showPlayerProgress(answerArray);

    guess = getGuess();

    if (guess === null) {
      break;

    } else if (guess.length !== 1) {

      alert("Please enter a single letter.");

    } else {

      correctGuesses = updateGameState(guess, word, answerArray);
      remainingLetters -= correctGuesses;

    }
  }
  if(word === answerArray.join("")){
    showAnswerAndCongratulatePlayer(answerArray);
    if(confirm("Play again?")){
      runGame();
    }
  } else {
    alert("Thanks for playing!");
  }
}

runGame();
