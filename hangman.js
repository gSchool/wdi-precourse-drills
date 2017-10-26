var pickWord = function () {
    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake"
    ];
    
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
};

var setupAnswerArray = function (word) {
    var answerArray = [];
    for (var i= 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};

var showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
};

var getGuess = function () {
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
};

var updateGameState = function (guess, word, answerArray) {
   
    //

};

var showAnswerAndCongratulatePlayer = function(answerArray) {
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
};

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

/*var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i= 0; i < word.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArray.join(" "));

    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    guess = guess.toLowerCase();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Good job! The answer was " + word);*/