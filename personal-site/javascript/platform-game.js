
'use strict';

/* " " = empty, x = wall, @ = player, o = coin, ! = acid, v = dripping acid */

var simpleLevelPlan = [[
   "                      ",
   "                      ",
   "                      ",
   "      xxx             ",
   "  xxx    x            ",
   "        ov            ",
   "    @                 ",
   "  xxxxxxxxxxxxxxxxx   ",
   "                      ",
   "                      ",
   "                      "
],[
   "                      ",
   "       o    o         ",
   "                      ",
   "      xxx   xxx  o    ",
   "  xxx  v  x      x    ",
   "  x     o             ",
   "  x @   x             ",
   "  xxxxxxxx x          ",
   "         x!x          ",
   "         xxx          ",
   "                      "
],[
  "                      ",
  "             x        ",
  "            xvx       ",
  "       o    v v       ",
  "  x   xxx        xxx  ",
  "  x    v           x  ",
  "  x @       o o    x  ",
  "  xxxxxxxx xxxxxxxxx  ",
  "         x!x          ",
  "         xxx          ",
  "                      "
],[
  "                      ",
  "             x        ",
  "             v        ",
  "                      ",
  "  xx  xx         xxx  ",
  "  xv   v    o o  v x  ",
  "  x @      xxxxx   x  ",
  "  xxxxx            x  ",
  "      x!!!!!!!!!!!!x  ",
  "      xxxxxxxxxxxxxx  ",
  "                      "
]];

var actorChars = {
  "@" : Player,
  "o" : Coin,
  "v" : Acid
};

var scale = 40;
var arrowCodes = {37: "left", 38: "up", 39: "right"};
var lives = 3;
var elemLives = document.getElementsByClassName("lives")[0];
var elemGame = document.getElementsByClassName("game")[0];

function trackKeys(codes, level) {
  var pressed = Object.create(null);
  function handler(event) {
    if (level.isFinished()){
      removeEventListener("keydown", handler);
      removeEventListener("keyup", handler);
    }
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}

function setText(life, element) {
  element.innerHTML = life;
}

function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop)
      requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/*function pauseGame(stop){
  function handler(event){
    if(event.keyCode == 27 && !stop)
      return true;
    else
      return false;
  }
  addEventListener("keydown", handler);
}*/

function runLevel(level, Display, andThen) {
  var display = new Display(elemGame, level);
  var arrows = trackKeys(arrowCodes, level);
  var pause = false;
  function handler(event){
    pause = event.keyCode == 27 && !pause ? true : false;
  }
  addEventListener("keydown", handler);
  runAnimation(function(step) {
    if(pause)
      return;
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      trackKeys(arrowCodes, level);
      removeEventListener("keydown", handler);
      if (andThen){
          andThen(level.status);
      }
      return false;
    }
  });
}

function runGame(plans, Display) {
  function startLevel(n, life) {
    setText(life, elemLives);
    runLevel(new Level(plans[n]), Display, function(status) {
      if (status == "lost")
        life-- > 1 ? startLevel(n, life) :  startLevel(0, lives);
      else if (n < plans.length - 1)
        startLevel(n + 1, life);
      else {
        setText("You win!", elemGame);
      }
    });
  }
  startLevel(0, lives);
}

function Vector(x ,y) {
  this.x = x; this.y = y;
}

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function(factor) {
  return new Vector(this.x * factor, this.y * factor);
};

function Player(pos) {
  this.pos = pos.plus(new Vector(0, .1));
  this.size = new Vector(.05, .9);
  this.animationSize = new Vector(0.8, 1);
  /*this.animationPosition = this.pos.plus(new Vector(-.4, 0));*/
  this.speed = new Vector(0, 0);
}

Player.prototype.type = "player";

var playerXSpeed = 3;

Player.prototype.moveX = function(step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if(obstacle)
    level.playerTouched(obstacle);
  else
    this.pos = newPos;
};

var gravity = 20;
var jumpSpeed = 12;

Player.prototype.moveY = function(step, level, keys) {
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0)
      this.speed.y = -jumpSpeed;
    else
      this.speed.y = 0;
  } else {
    this.pos = newPos;
  }
};

Player.prototype.act = function(step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor)
    level.playerTouched(otherActor.type, otherActor);
  /*losing animation*/
  if (level.status == "lost") {
    this.pos.y += step;
    this.pos.y -= step;
  }
};

function Acid(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1,1);
  if (ch == "v")
    this.setDripper(pos);
}

Acid.prototype.type = "acid";

Acid.prototype.setDripper = function(pos){
  this.speed = new Vector(0, 3);
  this.repeatPos = pos;
  this.drip = 50;
  this.drop = false;
  this.splash = 0;
}

Acid.prototype.act = function(step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
    if (level.obstacleAt(newPos, this.size) && this.splash >= 0) {
      this.drop = false
      this.pos = this.pos.plus(this.speed.times(step*.08))
    }
    else if (!level.obstacleAt(newPos, this.size) && this.drop) {
      this.pos = newPos;
      this.splash = 20;
    }
    else {
      this.pos = this.repeatPos;
      this.drop = false;
    }
};

function Coin(pos) {
  this.basePos = this.pos = pos.plus(new Vector(0.25, 0.25));
  this.size = new Vector(0.5, 0.5);
  this.wobble = Math.random() * Math.PI * 2;
}

Coin.prototype.type = "coin";

var wobbleSpeed = 8, wobbleDist = 0.07;

Coin.prototype.act = function(step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

function Level(plan){
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];

  for(var y = 0; y < this.height; y++){
    var line = plan[y], gridLine = [];
    for (var x = 0; x < this.width; x++){
      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      if(Actor) {
        this.actors.push(new Actor(new Vector(x, y), ch));
    }
      else if (ch == "x")
        fieldType = "wall";
      else if (ch == "!")
        fieldType = "acid";
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }

  this.player = this.actors.filter(function(actor) {
    return actor.type == "player";
  })[0];
  this.status = this.finishDelay = null;
}

Level.prototype.isFinished = function() {
  return this.status != null && this.finishDelay < 0;
};

Level.prototype.obstacleAt = function(pos, size) {
  var xStart = Math.floor(pos.x);
  var xEnd = Math.ceil(pos.x + size.x);
  var yStart = Math.floor(pos.y);
  var yEnd = Math.ceil(pos.y + size.y);

  if (xStart < 0 || xEnd > this.width || yStart < 0)
    return "wall";
  if(yEnd > this.height)
    return "acid";
  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) return fieldType;
    }
  }
};

Level.prototype.actorAt = function(actor) {
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
    if (other != actor &&
       actor.pos.x + actor.size.x > other.pos.x &&
       actor.pos.x < other.pos.x + other.size.x &&
       actor.pos.y + actor.size.y > other.pos.y &&
       actor.pos.y < other.pos.y + other.size.y)
      return other;
  }
};

Level.prototype.playerTouched = function(type, actor) {
  if (type == "acid" && this.status == null) {
    this.status = "lost";
    this.finishDelay = 1;
  }
  else if (type == "coin" && !this.status) {
    this.actors = this.actors.filter(function(other) {
      return other != actor
    });
    if (!this.actors.some(function(actor) {
      return actor.type == "coin";
    })) {
      this.status = "won";
      this.finishDelay = 1;
    }
  }
};

var maxStep = 0.05;

Level.prototype.animate = function(step, keys) {
  if(keys){
  if (this.status != null)
    this.finishDelay -= step;

  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function(actor) {
      actor.act(thisStep, this, keys);
    }, this);
    step -= thisStep;
  }
}
};

function CanvasDisplay(parent, level) {
  this.canvas = document.createElement("canvas");
  this.canvas.width = Math.min(600, level.width * scale);
  this.canvas.height = Math.min(450, level.height * scale);
  parent.appendChild(this.canvas);
  this.cx = this.canvas.getContext("2d");
  this.level = level;
  this.animationTime = 0;
  this.flipPlayer = false;
  this.viewport = {
    left: 0,
    top: 0,
    width: this.canvas.width / scale,
    height: this.canvas.height / scale
  };
  this.drawFrame(0);
}

CanvasDisplay.prototype.clear = function() {
  this.canvas.parentNode.removeChild(this.canvas);
}

CanvasDisplay.prototype.drawFrame = function(step) {
  this.animationTime += step;
  this.updateViewport();
  this.clearDisplay();
  this.drawBackground();
  this.drawActors();
}

CanvasDisplay.prototype.updateViewport = function() {
  var view = this.viewport, margin = view.width / 3;
  var player = this.level.player;
  var center = player.pos.plus(player.size.times(0.5));

  if (center.x < view.left + margin)
    view.left = Math.max(center.x - margin, 0);
  else if (center.x > view.left + view.width - margin)
    view.left = Math.min(center.x + margin - view.width,
                         this.level.width - view.width);
  if (center.y < view.top + margin)
    view.top = Math.max(center.y - margin, 0)
  else if (center.y > view.top + view.height - margin)
    view.top = Math.min(center.y + margin - view.height,
                        this.level.height - view.height);
};

CanvasDisplay.prototype.clearDisplay = function() {
  if (this.level.status == "won")
    this.cx.fillStyle = "rgb(68, 191, 255)";
  else if (this.level.status == "lost")
    this.cx.fillStyle = "rgb(44, 136, 214)";
  else
    this.cx.fillStyle = "rgb(52, 166, 251)";
  this.cx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}


CanvasDisplay.prototype.drawBackground = function(){
  var view = this.viewport;
  var xStart = Math.floor(view.left);
  var xEnd = Math.ceil(view.left + view.width);
  var yStart = Math.floor(view.top);
  var yEnd = Math.ceil(view.top + view.height);

  for(var y = yStart; y < yEnd; y++) {
    for(var x = xStart; x < xEnd; x++) {
      var tile = this.level.grid[y][x];
      if(tile == null) continue;
      var screenX = (x - view.left) * scale;
      var screenY = (y - view.top) * scale;
      var tileX = (x * y) %10 * scale;
      var tileY = tile == "acid" ? scale : 0;
      this.cx.drawImage(componentsSprites, tileX, tileY, scale, scale,
        screenX, screenY, scale, scale);
    }
  }
};

function flipHorizontally(context, around) {
  context.translate(around, 0);
  context.scale(-1, 1);
  context.translate(-around, 0);
}

/* fix this hack! */
var playerXOverlap = 4;

CanvasDisplay.prototype.drawPlayer = function(x, y, width, height){
  var sprite = 12, player = this.level.player;
  var spriteY = 0
  width += playerXOverlap * 2;
  x -= 16; //fix this hack!
  if (player.speed.x != 0)
    this.flipPlayer = player.speed.x < 0;
  if(player.speed.y != 0) {
    sprite = 3;
    height *= 1.125;
    spriteY = scale;
  }
  else if (player.speed.x != 0)
    sprite = Math.floor(this.animationTime * 12) % 12;

  this.cx.save();
  if (this.flipPlayer)
    flipHorizontally(this.cx, x + width / 2);

  this.cx.drawImage(playerSprites, sprite * width, spriteY, width, height,
                                   x, y, width, height);
  this.cx.restore();
};

function acidDripDropSplash(acid) {
  var frame;
  if(acid.splash >= 10 && !acid.drop) {
    acid.splash -= 1;
    frame = 4 * scale;
  } else if (acid.splash >= 0 && !acid.drop) {
    acid.splash -= 1;
    frame = 5 * scale;
  } else if(acid.drip >= 30 && !acid.drop) {
    acid.drip -= 1;
    frame = 0;
  } else if (acid.drip >= 20 && !acid.drop) {
    acid.drip -= 1;
    frame = 1 * scale;
  } else if (acid.drip >= 10 && !acid.drop) {
    acid.drip -= 1;
    frame = 2 * scale;
  } else if (acid.drip >= 0 && !acid.drop ) {
    acid.drip -= 1;
    frame = 3 * scale;
  } else {
    acid.drop = true;
    acid.drip = 50;
    frame = 3 * scale;
  }
  return frame;
}

CanvasDisplay.prototype.drawActors = function() {
  this.level.actors.forEach(function(actor) {
    var width = actor.size.x * scale;
    var height = actor.size.y * scale;
    var x = (actor.pos.x - this.viewport.left) * scale;
    var y = (actor.pos.y - this.viewport.top) * scale;
    if (actor.type == "player") {
      width =  actor.animationSize.x * scale;
      height = actor.animationSize.y * scale;
      this.drawPlayer(x, y, width, height);
    }
    else {
      var tileX;
      if(actor.type == "acid") {
        tileX = acidDripDropSplash(actor);
      }
      else
        tileX = 6 * scale;
      this.cx.drawImage(actorsSprites, tileX, 0, width, height,
                                      x, y, width, height);


    }
  }, this);
};

function SpriteLoader(count,callback){
  this.count = count;
  this.loadedSprites = [];
  this.callback = callback;
}

SpriteLoader.prototype.load = function(png){
  var sprite = document.createElement("img");
  sprite.src = png;
  sprite.onload = this.onLoaded.bind(this, sprite);
  return sprite;
}

SpriteLoader.prototype.onLoaded = function(sprite){
  this.loadedSprites.push(sprite);
  if (this.loadedSprites.length === this.count)
    this.callback();
  }

var LoadSprites = new SpriteLoader(3,function(){
  runGame(simpleLevelPlan, CanvasDisplay);
});




var componentsSprites = LoadSprites.load("../imgs/game/components.png");
var actorsSprites = LoadSprites.load("../imgs/game/actors.png");
var playerSprites = LoadSprites.load("../imgs/game/robot.png");
