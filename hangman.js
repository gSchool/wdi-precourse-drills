//HANG MAN GAME JS CODE
console.log('javascript is linked');

var words = [
  'minilop',
  'deilenaar',
  'desertcottontail',
  'oryctolagus',
  'rexrabbiy',
  'minisatin',
  'pygmyrabbit',
  'tapeti',
  'feedemarbourg',
  'riverine',
  'brushrabbit',
  'sumartranstriped',
  'cottontail',
  'hollanddwarf',
  'omilteme',
  'annamite',
  'angora',
  'easterbunny'];


var secretWord = words[Math.floor(Math.random() * words.length)];

var answerArr = [];
for (var i = 0; i < secretWord.length; i++) {
    if (secretWord[i] === ' ') {
        answerArr[i] = ' ';
    } else {
        answerArr[i] = '_';
    }
}

var remainingLetters = secretWord.length; //this evaluates to an number
var attempts = 20;


while (remainingLetters > 0 && attempts > 0) {


    alert(answerArr.join(' ') +
        `

        Letters Remaining: ${remainingLetters}`);


    var guess = prompt(`Guess a letter, or click cancel to stop playing.

    Number of Guesses: ${attempts}/20`).toLowerCase();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Please enter a single letter.')
    } else {
        attempts--;
        for (var j = 0; j < secretWord.length; j++) {
            if (secretWord[j] === guess && answerArr[j] === '_') {
                answerArr[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArr.join(' '));
if (attempts > 0) {
    alert('GREAT JOB! YOU WON!')
} else {
    alert('Game Over! The answer is ' + secretWord);
};
