var letters = [];
var btn = document.getElementById('gameStarter');
console.log('btn: ', btn);
btn.addEventListener('click', startGame);
var name = prompt("what's your name?");
	console.log("Hello " + name);
function startGame(){
  var userResponse = prompt("Please choose a letter");
  console.log('The user chose: ', userResponse);
  letters.push(userResponse);
  console.log('letters: ', letters);
}


	var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake",
	"husband",
	"marriage",
	"fiance"
	];
	var word = words[Math.floor(Math.random() * words.length)];
	var answerArray = [];
	for(var i = 0; i < word.length; i++){
		answerArray[i] = "_";
	}
	var remainingLetters = word.length;
	while (remainingLetters>0){
		alert(answerArray.join(" "));

		var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		if (guess === null) {
			break;
		} else if (guess.length !== 1){
			alert("Please enter a single letter.")
		} else if (guess !== guess.toLowerCase()){
      guess = guess.toLowerCase();
    }
    else {
			for (var j = 0; j<word.length; j++){
				if(word[j] === guess) {
					answerArray[j] = guess;
					remainingLetters--;
				}
			}
		}
	}
	alert(answerArray.join(" "));
	alert("Good job! The answer was " + word);
