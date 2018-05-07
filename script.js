$(document).ready(function() {
$("button").click(function(){
  alert("The button was clicked.");
});
});

$(document).ready(function() {
    $('button').mouseenter(function() {
        $('button').fadeTo('fast', 1);
    });
    $('button').mouseleave(function() {
        $('button').fadeTo('fast', 0.5);
});
});
