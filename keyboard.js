"use strict";
var circle = function(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

var keyNames = {
  13: "enter",
  16: "shift",
  17: "control",
  18: "option",
  91: "command",

  32: "stop",
  37: "left",
  38: "up",
  39: "right",
  40: "down",

  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;

var Ball = function() {
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 5;
  this.direction = "left";
  this.setDirection(this.direction);
};

Ball.prototype.move = function() {
  this.x += this.speedX;
  this.y += this.speedY;

  if (this.x < 0 ||
    this.x > width) {
    this.speedX = -this.speedX;
    if (this.speedX < 0) {
      this.direction = "left";
    }
    else {
      this.direction = "right";
    }
  }
  if (this.y < 0 ||
    this.y > height) {
    this.speedY = -this.speedY;
    if (this.speedY < 0) {
      this.direction = "up";
    }
    else {
      this.direction = "down";
    }
  }
};

Ball.prototype.draw = function() {
  circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function(direction) {
  if (direction === "up" ||
    direction === "down" ||
    direction === "left" ||
    direction === "right") {
      this.direction = direction;
  }
  if (direction === "up") {
    this.speedX = 0;
    this.speedY = -this.speed;
  } else if (direction === "down") {
    this.speedX = 0;
    this.speedY = this.speed;
  } else if (direction === "left") {
    this.speedX = -this.speed;
    this.speedY = 0;
  } else if (direction === "right") {
    this.speedX = this.speed;
    this.speedY = 0;
  } else if (direction === "stop") {
    this.speedX = 0;
    this.speedY = 0;
  }
};

Ball.prototype.setSpeed = function(newSpeed) {
  var newSpeedEntered = true;
  switch (newSpeed) {
    case "0":
      this.speed = 0;
      break;
    case "1":
      this.speed = 1;
      break;
    case "2":
      this.speed = 2;
      break;
    case "3":
      this.speed = 3;
      break;
    case "4":
      this.speed = 4;
      break;
    case "5":
      this.speed = 5;
      break;
    case "6":
      this.speed = 6;
      break;
    case "7":
      this.speed = 7;
      break;
    case "8":
      this.speed = 8;
      break;
    case "9":
      this.speed = 9;
      break;
    default:
      newSpeedEntered = false;
      break;
  }
  if (newSpeedEntered) {
    this.setDirection(this.direction);
  }
  console.log("speed: " + this.speed);
};

var ball = new Ball();
$("body").keydown(function(event) {
  console.log("key: " + keyNames[event.keyCode]);
  ball.setSpeed(keyNames[event.keyCode]);
  ball.setDirection(keyNames[event.keyCode]);

});

setInterval(function() {
  ctx.clearRect(0, 0, width, height);

  ball.draw();
  ball.move();

  ctx.strokeRect(0, 0, width, height);
}, 30);
