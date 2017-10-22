

/*
$(function() {

    alert("hello?");
});


*/


var APPID = "445a033d47855060887642445c352c6b";
var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;

function updateByZip (zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "q=brooklyn" + 
        "&APPID=" + APPID;
    sendRequest (url);
}


function sendRequest (url) {
    var xmlhttp =new XMLHttpRequest ();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse (xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].id;
            weather.humidity = data.main.humidity;
            weather.wind = data.wind.speed;
            weather.loc = data.name;
            weather.temp = data.main.temp;
            update (weather);
        }
    };
    xmlhttp.open("Get", url, true);
    xmlhttp.send();
}


function update(weather) {
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "imgs/codes/" + weather.icon + ".png";
}

window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");
    
    updateByZip(11237);
}

