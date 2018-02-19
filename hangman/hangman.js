
var pickWord = function () {
    // Return a random word
    var words = ['javascript','monkey','amazing','pancake','felalfel']
    var word = words[Math.floor((Math.random()) * words.length)]
    return word
  };
// var randomWord = pickWord()\
// console.log(pickWord());


  var setupAnswerArray = function (word) {
    // Return the answer 
    var answerArray = []
    for (var i = 0; i < pickWord(word).length; i++) {
        answerArray[i] = "_";
        }
        // var letter = '_'
        // answerArray.push(letter)
    return answerArray
  };
//   console.log(setupAnswerArray(pickWord()))

  var showPlayerProgress = function (answerArray) {
    // Use alert to show the player their progress
    alert(answerArray.join(' '))
    return answerArray
    console.log(answerArray)
  };
  
  var getGuess = function () {
    // Use prompt to get a guess
    var guess = prompt('Guess a letter, or click Cancel to stop playing.')
    return guess
  };

  var updateGameState = function (guess, word, answerArray) {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess
            remainingLetters--
        }
    var currentState = alert(answerArray.join(" "))
    return currentState
    }
  };

  var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
    goodToGo = alert('Good job! The answer was ' + word)
    return goodToGo
  };
  
var word = pickWord();
var answerArray = setupAnswerArray(word); 
var remainingLetters = word.length;
    while (remainingLetters > 0) { 
    showPlayerProgress(answerArray); 
    var guess = getGuess();
        if (guess === null) {
            alert('See you next time!')
            break;
        } else if (guess.length !== 1) {
            alert("Please enter a single letter.");
        } else {
            var correctGuesses = updateGameState(guess, word, answerArray);
            remainingLetters -= correctGuesses; 
        }
    
    } 

showAnswerAndCongratulatePlayer(answerArray);



















































// var words = ['javascript','monkey','amazing','pancake','felalfel']
// var word = words[Math.floor((Math.random()) * words.length)]


// var answerArray = []
// for (var i = 0; i< word.length; i++) {
//     answerArray[i] = '_'
// }
// var remainingLetters = word.length
// // console.log(remainingLetters);
// // console.log(answerArray.length);

// while (remainingLetters > 0) {
//     alert(answerArray.join(' '))
//     var guess = prompt('Guess a letter, or click Cancel to stop playing.')
//     //  guess == guess.toUpperCase {
//     //     guess.toLowerCase()
//     // console.log(typeof guess)
//     if (guess === null) {
//         alert('See you next time!')
//         break
//     } else if (guess.length !== 1) {
//         alert('Please enter a single letter.')
//     } 
//     //   else if (guess == guess.toUpperCase()) {
//     //     guess.toLowerCase()
//     // } 
//         else { 
//         //update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess
//                 remainingLetters--
//             }
//         }
//     }    
// }
// alert(answerArray.join(" "))
// alert('Good job! The answer was ' + word)











































































































































 




// // // This is a bunch of crap, but I'm not deleting it.
// // var words = [
// //     'javascript',
// //     'monkey',
// //     'amazing',
// //     'pancake'
// // ]
// function pickWord(words) {
//     // Return a random word
//     var words = [
//         'javascript',
//         'monkey',
//         'amazing',
//         'pancake'
//     ]
//     var word = [Math.floor(Math.random() * words.length)]
//     console.log(word);
//   };
// //   console.log(word);
//   pickWord()
// //   console.log(pickWord())

// function setupAnswerArray (word) {
//     // Return the answer array
//     var answerArray = []
//     for (var i = 0; i< word.length; i++) {
//             answerArray[i] = '_'
//         }
//     var remainingLetters = word.length
//     // console.log(remainingLetters);
//     // console.log(answerArray.length);
        
//     while (remainingLetters > 0) {
//         alert(answerArray.join(' '))
//         var guess = prompt('Guess a letter, or click Cancel to stop playing.')
//         //  guess == guess.toUpperCase {
//         //     guess.toLowerCase()
//         // console.log(typeof guess)
//         if (guess === null) {
//             alert('See you next time!')
//             break
//         } else if (guess.length !== 1) {
//             alert('Please enter a single letter.')
//         } 
//         //   else if (guess == guess.toUpperCase()) {
//         //     guess.toLowerCase()
//         // } 
//             else { 
//             //update the game state with the guess
//             for (var j = 0; j < word.length; j++) {
//                 if (word[j] === guess) {
//                     answerArray[j] = guess
//                     remainingLetters--
//                 }
//             }
//         }
//   };

// setupAnswerArray()
  
// function showPlayerProgress (answerArray) {
//     // Use alert to show the player their progress

//     while (remainingLetters > 0) {
//         alert(answerArray.join(' '))
//         var guess = prompt('Guess a letter, or click Cancel to stop playing.')
//         //  guess == guess.toUpperCase {
//         //     guess.toLowerCase()
//         // console.log(typeof guess)
//     }
//   };

//   showPlayerProgress()

// function getGuess () {
//     // Use prompt to get a guess
//     if (guess === null) {
//         alert('See you next time!')
//         break
//     } else if (guess.length !== 1) {
//         alert('Please enter a single letter.')
//     } 
//     //   else if (guess == guess.toUpperCase()) {
//     //     guess.toLowerCase()
//     // } 
//         else { 
//         //update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess
//                 remainingLetters--
//             }
//         }
//   };
//   getGuess()

//   function updateGameState (guess, word, answerArray) {
//     // Update answerArray and return a number showing how many
//     // times the guess appears in the word so remainingLetters
//     // can be updated

//   };
// function showAnswerAndCongratulatePlayer (answerArray) {
//     // Use alert to show the answer and congratulate the player
//     alert(answerArray.join(" "))
//     alert('Good job! The answer was ' + word)
//   };

//   showAnswerAndCongratulatePlayer()

// // var word = pickWord();
// // var answerArray = setupAnswerArray(word); var remainingLetters = word.length;
// // while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
// // if (guess === null) {
// // break;
// // } else if (guess.length !== 1) {
// // alert("Please enter a single letter.");
// // } else {
// // var correctGuesses = updateGameState(guess, word, answerArray);
// //   remainingLetters -= correctGuesses; }
// // } showAnswerAndCongratulatePlayer(answerArray)