$('h1').html('Hangman!')
//just playing a tiny bit with jquery nothing much

var words = [
  'banana',
  'orange',
  'strawberry',
  'pineapple'
]

var word = words[Math.floor(Math.random() * words.length)];
//not exactly sure why we need Math.floor but for the rest of the code
// it will pick a random string inside the array and word will take the length of the string in the array.

var answersArray = [];
for(var i=0; i < word.length; i++){
  answersArray[i] = '_'
}

var remainingLetters = word.length;


//for the while loop we set it "while remaining letters is greater than 0 run this code"
//then once the while statement is true then the while will stop and the game will finish

while (remainingLetters > 0) {
  var jquery = alert(answersArray.join(''));
  //the .join method will take whatever is inputed into the prompt and then put that in the answersArray array.
  let guess = prompt('Guess a letter my dude, or hit cancel to stop playing.');
    if(guess === null) {
      break;
      //saying basically if they don't guess then stop running the program
    } else if(guess.length !== 1) {
      alert('A single letter please')
      //if the length of guess is not equal to one then say the alert
    } else {
      for(var i = 0; i <word.length; i++) {
        if(word[i] === guess) {
          answersArray[i] = guess;
          remainingLetters--;
          //alot going on here
          //so to start the if is saying that if the string that is randomly picked in the array (word)
          //is equal to the length of the guess variable
          //so how that for loop will run is it starts off saying that 'i' is equal to 0 it will run through until 'i' is greater than
          // the word array. Once that is true
          //then then answersArray is given the value of whatever the guess was
          //and the remainingLetters will decrement (count down) and result in the the number of remaining letters to decrease by 1.
          //so like we said in the beginning of the while loop when the remainingLetters is > 0 then the while is true and the program will end
          //which is why we have the remainingLetters--
        }
      }
    }

}

  alert('Nice you did it! The answer was ' + word );
  //at the end of the game this alert will run and show the value of the word
