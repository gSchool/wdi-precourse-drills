var words = ["chocolate", "mango", "exception", "attractive", "assembly", "activity", "display", "innocent", "progressive", "cigarette", "recycle", "operation", "expansion", "relative", "sensitivity", "coalition", "sentiment", "discriminate", "declaration"];

var lettersGuessedR = 0;
var chosenWord = pickWord();
var arResult = setUpArray();
var numOfLetters = chosenWord.length;
var arDisplayResult = chosenWord.replace(/[qwertyuiopasdfghjklzxcvbnm]/g,'_').split("");

var userStartGame = prompt("Would you like to play a game? Input 'Y' to play");
if(userStartGame === "Y"){
  gameStart();
}

function gameStart(){
  while(lettersGuessedR !== numOfLetters){
    playerGuess();
  }if(lettersGuessedR === numOfLetters){
    alert("Congrats you guessed correctly. The word is " + chosenWord);
  }
}

function pickWord(){
 // Return a random word
var randomArray = Math.floor(Math.random() * (words.length));
var chosenWord = words[randomArray];
return chosenWord;
};

function setUpArray() {
 // Return the answer array)
 var arrayOfResult = [];
 arrayOfResult = chosenWord.split("");
 return arrayOfResult;
};

function playerGuess(){
  var playerGuess = prompt("Pick a letter");
  for(var i = 0; i < arResult.length; i++){
    if(playerGuess === arResult[i]){
      arResult[i] = '√';
      arDisplayResult[i] = playerGuess;
      lettersGuessedR++;
    } else if(playerGuess.length !== 1){
      playerGuess = promt("Please enter a single letter");
    } else if(playerGuess === null){
        break;
    }
  }

  var finalDisplay = "Letters guessed right: " + lettersGuessedR + "/" + numOfLetters + " " + arDisplayResult;
  alert(finalDisplay.replace(/[,]/g, ''));
}
