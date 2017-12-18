//////////// FUNCTIONS ///////////////
// Pick a random word
const pickWord = function(){
  return words[Math.floor(Math.random() * words.length)];
};
// Set up the answer array
const setUpAnswerArray = function (specificWord) {
    let newArray = [];
    for (var i = 0; i < specificWord.length; i++) {
      newArray[i] = "_";
   }
   return newArray;
 };
// Show Player Progress
 const showPlayerProgress = function(specificArray){
   alert(specificArray.join(" "));
 };
// Get a guess from the player
 const getGuess = function(){
   return prompt("Guess a letter, or click Cancel to stop playing.");
 };
// Update the state (or status) of the game
 const updateGameState = function(specificGuess, specificWord, specificArray){
   for (var j = 0; j < specificWord.length; j++) {
     if (specificWord[j] === specificGuess) {
       specificArray[j] = specificGuess;
     }
   }
   return specificArray;
 };
// Finally show the player what they have done and congratulate them
 const showAndCongratulatePlayer = function(specificArray){
   alert(specificArray.join(" "));
   alert('Good job! The answer was ' + word);
 };

//////////// VARIABLES ///////////////
  var words = [
       "javascript",
       "monkey",
       "amazing",
       "pancake"
  ];
   let word =  pickWord();
   let answerArray = setUpAnswerArray(word);
   let remainingLetters = word.length;
   let guess;

   //////////// THE GAME CODE ///////////////
   while (remainingLetters > 0) {
     showPlayerProgress(answerArray);
     guess = getGuess();
     if (guess === null) {
          alert('No problem. Thanks for playing! :)');
          break;
     } else if (guess.length !== 1) {
          alert("Please enter a single letter.");
     } else {
          let correctGuesses = updateGameState(guess, word, answerArray);
           remainingLetters--;
          if (remainingLetters ==  0){
          showAndCongratulatePlayer(answerArray);
        }
    }
 }
