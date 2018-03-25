var smallButton = document.querySelector("#smallButton");
var longButton = document.querySelector("#longButton");
var bossButton = document.querySelector("#bossButton");
var amnt = document.querySelector('b');
var score = document.querySelector("#score");
var reset = document.querySelector("#reset");
var person = prompt("Please enter your name")
if (person == null) {
    document.getElementById("greeting").innerHTML = `Welcome, player`

} else {
  document.getElementById("greeting").innerHTML = `Welcome, ${person}`
}

smallButton.addEventListener("click", function(){
  var total = parseInt(amnt.textContent)
  var decision = Math.floor(Math.random() * 4)
  if (decision > 0) {
    amnt.textContent = total + Math.floor(Math.random() * 11) + 10;
    score.style.color = 'green';
    score.textContent = "Pass!"


  } else {
    amnt.textContent = total - (Math.floor(Math.random() * 11) + 10);
    score.style.color = 'red';
    score.textContent = "Fail!"
  }

});

longButton.addEventListener("click", function(){
  var total = parseInt(amnt.textContent)
  var decision = Math.floor(Math.random() * 2)
  if (decision === 1) {
    amnt.textContent = total + Math.floor(Math.random() * 21) + 30;
    score.style.color = 'green';
    score.textContent = "Pass!"
  } else {
    amnt.textContent = total - (Math.floor(Math.random() * 21) + 30);
    score.style.color = 'red';
    score.textContent = "Fail!"
  }
});

bossButton.addEventListener("click", function(){
  var total = parseInt(amnt.textContent)
  var decision = Math.floor(Math.random() * 4)
  if (decision === 0) {
    amnt.textContent = total + Math.floor(Math.random() * 31) + 70;
    score.style.color = 'green';
    score.textContent = "Pass!"
  } else {
    amnt.textContent = total - (Math.floor(Math.random() * 31) + 70);
    score.style.color = 'red';
    score.textContent = "Fail!"
  }
});

reset.addEventListener("click", function(){
  amnt.textContent = 0;
  score.textContent = "Take quest to begin"
  score.style.color = 'black';
})
