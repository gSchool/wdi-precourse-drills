$(document).ready(function() {
  console.log("ready!");
});

// Toggles the image hidden when clicking the NJ image.
$('#imgnj').click(function(){
  $('#njgif').toggle('');
});

// Toggles the lists on about.html
$('#likesbtn').click(function() {
  $('#likeslist').toggle('fast');
});

$('#dislikesbtn').click(function() {
  $('#dislikeslist').toggle('fast');
});

//Toggles the items on about2.html
$('#nowbtn').click(function() {
  $('#hurlgif').toggle('');
});

$('#endbtn').click(function() {
  $('#mevictoryimg').toggle('');
});
