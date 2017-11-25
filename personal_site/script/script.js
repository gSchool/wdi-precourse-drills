
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false, deleteSpeed: 0
});

typewriter.typeString("I'm Greg")
    .pauseFor(1000)
    .deleteAll()
    .typeString("First and foremost, I'm a proud dad and husband")
    .pauseFor(1000)
    .deleteAll()

    .typeString("For the last ten years, I've been working for the federal government.")
    .pauseFor(1000)
    .deleteAll()

    .typeString("Recently, I decided to make a big change in my career.")

    .start();
