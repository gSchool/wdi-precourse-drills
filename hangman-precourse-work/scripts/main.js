document.addEventListener('DOMContentLoaded', function(){
  // Initialize the game with an opening question
  var play = confirm("Wanna play a classic game of Hangman? I hope you do, I really, really do!");

  // Handle their response to the opening question
  if (play === true) { // If they want to play run...
    alert("You do remember how to play right? Well just in case you forgot...You're trying to guess a secret word! I'll ask you for a letter and if the letter you've chosen IS in the word it will be revealed to you! If your chosen letter IS NOT in the word, well, that sucks! I guess you can keep trying until you've successfully revealed the secret word! Have fun and don't get hung up! Oh, by the way...you'll have 15 guesses before you run out of time...good luck!");

    // Pick the word
    var words = ["muffin", "kitty", "plumber", "moist", "underwear", "cucumber", "tartarsauce", "zombie", "clown"];
    var word = words[Math.floor(Math.random() * words.length)];

    // Set up the answer array
    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }

    var remainingLetters = word.length;

    // Initialize a counter to track players guesses
    var counter = 16;

    // Setting up the game loop
    while (remainingLetters > 0) {
      counter --;

    // Show player their progress
      alert(("The secret word is  " + answerArray.join(" ") +". " + counter + " guesses remain."));

    // Get the players guess
      var guess = prompt("Go on now, guess a letter...or click cancel if you're a quitter.").toLowerCase();

      if (guess === null) {
        alert("Q.U.I.T.T.E.R! Well, come back anytime now ya hear?");
        break;
      } else if (counter === 1) {
        break;
      } else if (guess.length !== 1) {
        alert("Oh come on, just enter a single letter.");
      } else {
        for (var j = 0; j < word.length; j++) {
          if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters --;
          }
        }
      }
    }

    // Congratulate player or not if they lost and show answer
    if (answerArray.join("") === word) {
      alert("Oh Em GEE you did it! The answer was " + word + "!");
    } else {
      alert("Oh SOOOOO close but you're dead. The answer was " + word + "!");
    }

    alert("Please refresh the page if you're hankering to play again.");


  } else {
    alert("Awwwww MAJOR bummer. Well if you get bored...I'll be right here waiting!");
  }

});
