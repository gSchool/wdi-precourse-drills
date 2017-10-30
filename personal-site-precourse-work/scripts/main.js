document.addEventListener('DOMContentLoaded', function(){

var button = document.getElementById("button");
var peanut = document.getElementById("peanut");

button.addEventListener("click", function() {
  peanut.src = "images/catnip.JPG";
});

});
