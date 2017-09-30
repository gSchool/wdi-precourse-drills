var words = [
  'velociraptor',
  'racecar',
  'palindrome',
  'coconut',
  'valley',
  'music',
  'owl',
  'centipede',
];
var randomWord = words[Math.floor(Math.random() * words.length)];
var gameArray = [];
for (a = 0; a < randomWord.length; a++) {
  gameArray[a] = ' _ ';
}
var guessCountdown = 10;
var guessRecord = [];
var wordLength = randomWord.length;
while (guessCountdown > 0 && wordLength > 0) {
  var input = prompt(
    'Welcome to Hangman! Pick a single letter.\n\nSo far you have: ' +
      gameArray.join('') +
      '. \n\nYou have ' +
      guessCountdown +
      ' guess(es) left.\n\nIncorrectly guessed letters include (' +
      guessRecord.join(', ') +
      ').'
  );
  if (input === null) {
    break;
  }
  if (guessRecord.indexOf(input) != -1) {
    alert('You already guessed that!');
  } else if (input.length != 1) {
    alert('Game only takes single letter guesses!');
  } else if (guessCountdown === 0) {
    break;
  } else if (randomWord.indexOf(input) === -1) {
    guessRecord.push(input);
    guessCountdown--;
  } else {
    for (c = 0; c < randomWord.length; c++) {
      if (randomWord[c] === input) {
        gameArray[c] = input;
        wordLength--;
      }
    }
  }
}
if (gameArray.join('') === randomWord) {
  alert('You got it! The word was ' + randomWord + '.');
}
if (input === null) {
  alert('You have left the game');
}
if (gameArray.join('') != randomWord && input !== null) {
  alert(
    'You have no more guesses left! Game over :(\n\nThe word was: "' +
      randomWord +
      '."'
  );
}

console.log(randomWord, gameArray);
