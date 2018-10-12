


var body = document.getElementsByTagName("body")[0]


var title = document.createElement("h2");
title.innerText = "Mateo's Bio"
body.appendChild(title)


var paragraph1 = document.createElement("p")
paragraph1.innerText = "To Study Web Dev or Data Science??"
body.appendChild(paragraph1)

var newImg = document.createElement("img");
newImg.src = "https://media0.giphy.com/media/9H622a9zYMUFi/giphy.gif";
body.appendChild(newImg);

var paragraph2 = document.createElement("p")
paragraph2.innerText = "As a child he enjoyed basketball and running track."
paragraph2.style.color = "green"
body.appendChild(paragraph2)


var ul = document.createElement("ul");
var li = document.createElement("li");
li.innertext = "Yoga";
ul.appendChild(li)
body.appendChild(ul)
body.appendChild(li)
