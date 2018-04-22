var words = [
  "box",
  "frog",
  "valve",
  "donkey",
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var remainingGuesses = word.length + 6;

while ((remainingLetters > 0) && (remainingGuesses > 0)) {
  alert(answerArray.join(" "));
  var guess = prompt("Guess a letter. Quitting is not an option. A stick figure's life is at stake.");
  guess = guess.toLowerCase();
  if (guess === null) {
    alert("You did not enter a letter.");
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.")
  } else {
    //Update game state.
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        console.log(remainingLetters);
        }
      }
    }
    remainingGuesses--;
    alert("You only have " + remainingGuesses + " guesses remaining!")
    console.log(remainingGuesses);
  }

alert(answerArray.join(" "));
alert("The answer was " + word + ".");
