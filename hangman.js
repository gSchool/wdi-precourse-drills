var hiddenWord = [];
var correctGuess = 0;
var totalGuesses = 0;
var a = document.querySelector("#a");
var b = document.querySelector("#b");
var c = document.querySelector("#c");
var d = document.querySelector("#d");
var e = document.querySelector("#e");
var f = document.querySelector("#f");
var g = document.querySelector("#g");
var h = document.querySelector("#h");
var ii = document.querySelector("#i");
var j = document.querySelector("#j");
var k = document.querySelector("#k");
var l = document.querySelector("#l");
var m = document.querySelector("#m");
var n = document.querySelector("#n");
var o = document.querySelector("#o");
var p = document.querySelector("#p");
var q = document.querySelector("#q");
var r = document.querySelector("#r");
var s = document.querySelector("#s");
var t = document.querySelector("#t");
var u = document.querySelector("#u");
var v = document.querySelector("#v");
var w = document.querySelector("#w");
var x = document.querySelector("#x");
var y = document.querySelector("#y");
var z = document.querySelector("#z");
var winner = document.querySelector("#winner");
var  progress = document.querySelector("#progress");
var button = document.querySelector("button");
var word = ""

restart();

function restart () {
var words = [
"javascript",
"monkey",
"amazing",
"pancake",
"galvanize"
];

word = words[Math.floor(Math.random() * words.length)];
for (var i=0; i < word.length; i++) {
  hiddenWord.push("-");
}
console.log(word);
progress.textContent = hiddenWord.join(" ");
}
a.addEventListener("click", function() {
  a.classList.add("selected");
  checkGuess("a");
});
b.addEventListener("click", function() {
  b.classList.add("selected");
  checkGuess("b");
});
c.addEventListener("click", function() {
  c.classList.add("selected");
  checkGuess("c");
});
d.addEventListener("click", function() {
  d.classList.add("selected");
  checkGuess("d");
});
e.addEventListener("click", function() {
  e.classList.add("selected");
  checkGuess("e");
});
f.addEventListener("click", function() {
  f.classList.add("selected");
  checkGuess("f");
});
g.addEventListener("click", function() {
  g.classList.add("selected");
  checkGuess("g");
});
h.addEventListener("click", function() {
  h.classList.add("selected");
  checkGuess("h");
});
ii.addEventListener("click", function() {
  ii.classList.add("selected");
  checkGuess("i");
});
j.addEventListener("click", function() {
  j.classList.add("selected");
  checkGuess("j");
});
k.addEventListener("click", function() {
  k.classList.add("selected");
  checkGuess("k");
});
l.addEventListener("click", function() {
  l.classList.add("selected");
  checkGuess("l");
});
m.addEventListener("click", function() {
  m.classList.add("selected");
  checkGuess("m");
});
n.addEventListener("click", function() {
  n.classList.add("selected");
  checkGuess("n");
});
o.addEventListener("click", function() {
  o.classList.add("selected");
  checkGuess("o");
});
p.addEventListener("click", function() {
  p.classList.add("selected");
  checkGuess("p");
});
q.addEventListener("click", function() {
  q.classList.add("selected");
  checkGuess("q");
});
r.addEventListener("click", function() {
  r.classList.add("selected");
  checkGuess("r");
});
s.addEventListener("click", function() {
  s.classList.add("selected");
  checkGuess("s");
});
t.addEventListener("click", function() {
  t.classList.add("selected");
  checkGuess("t");
});
u.addEventListener("click", function() {
  u.classList.add("selected");
  checkGuess("u");
});
v.addEventListener("click", function() {
  v.classList.add("selected");
  checkGuess("v");
});
w.addEventListener("click", function() {
  w.classList.add("selected");
  checkGuess("w");
});
x.addEventListener("click", function() {
  x.classList.add("selected");
  checkGuess("x");
});
y.addEventListener("click", function() {
  y.classList.add("selected");
  checkGuess("y");
});
z.addEventListener("click", function() {
  z.classList.add("selected");
  checkGuess("z");
});
button.addEventListener("click", function() {
  word="";
  correctGuess=0;
  totalGuesses=0;
  hiddenWord = [];
  winner.textContent = "";
  button.textContent = "Reset Game"
  a.classList.remove("selected");
  b.classList.remove("selected");
  c.classList.remove("selected");
  d.classList.remove("selected");
  e.classList.remove("selected");
  f.classList.remove("selected");
  g.classList.remove("selected");
  h.classList.remove("selected");
  i.classList.remove("selected");
  j.classList.remove("selected");
  k.classList.remove("selected");
  l.classList.remove("selected");
  m.classList.remove("selected");
  n.classList.remove("selected");
  o.classList.remove("selected");
  p.classList.remove("selected");
  q.classList.remove("selected");
  r.classList.remove("selected");
  s.classList.remove("selected");
  t.classList.remove("selected");
  u.classList.remove("selected");
  v.classList.remove("selected");
  w.classList.remove("selected");
  x.classList.remove("selected");
  y.classList.remove("selected");
  z.classList.remove("selected");
  restart();
});

function checkGuess(str) {
totalGuesses++
for (var i=0; i < word.length; i++) {
  if (word[i] == str) {
    hiddenWord[i] = str;
    correctGuess++
      if (correctGuess === word.length) {
        winner.classList.add("winner");
        winner.textContent = "YOU WON IN " + totalGuesses + " TRIES";
        button.textContent = "Play Again?"
      }
}
progress.textContent = hiddenWord.join(" ");
}
}
