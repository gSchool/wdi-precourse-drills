$( "#presto" ).click(function() {
  $('#change').attr('src', 'assets/rainbow.jpg');
});


var appTwo = document.getElementById('appTwo');

var typewriterTwo = new Typewriter(appTwo, {
    loop: false, deleteSpeed: 0
});

typewriterTwo.typeString("Ultimately, I'd love to work on rad apps that use augmented reality and AI features.")
    .pauseFor(1000)
    .deleteAll()

    .typeString("But like they say, the journey of a thousand miles begins with the first step:")

    .start();
