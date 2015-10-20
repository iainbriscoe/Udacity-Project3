// Enemies our player must avoid
var Enemy = function() {
    
    "use strict";
    //pick a value to place the bug on across the stones
    this.yOptions = [60, 140, 220];
    this.maxVal = 2;
    this.minVal = 0;
    this.randFloored = Math.floor(Math.random() * (this.maxVal - this.minVal + 1)) + this.minVal;
    this.y = this.yOptions[this.randFloored];

    //starting x positions far enough back that bugs would continue to come on screen
    this.x = 0 - Math.floor(Math.random() * (1 - (-100) + 1)) + (-100);
   
    this.speedOptions = [1, 2, 5];
    this.randFloored = Math.floor(Math.random() * (this.maxVal - this.minVal + 1)) + this.minVal;
    //speed of the bug selected from an array of "speedOptions" using a random number of 0,1,0r 2
    this.speed = this.speedOptions[this.randFloored];

    //reference to the bug image
    this.sprite = 'images/enemy-bug.png';
};

//resets the bug position after it passes the x bounds
Enemy.prototype.changeXYSpeed = function () {
    this.x = 0 - Math.floor(Math.random() * (1 - (-100) + 1)) + (-100);
    this.y = this.yOptions[this.randFloored];
    this.randFloored = Math.floor(Math.random() * (this.maxVal - this.minVal + 1)) + this.minVal;
    this.speed = this.speedOptions[this.randFloored];
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    "use strict";
    this.x = this.x + this.speed;
    ctx.drawImage(Resources.get(this.sprite), this.x * dt, this.y);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class identifying a player and their start position
var Player = function(){
    "use strict";
    this.x = 200;
    this.y = 375;
    this.handleInput = handleInput;
    this.sprite = "images/char-boy.png";
};

//handles the use of keys up, down, left, right
var handleInput = function(value){
    "use strict";
    if(value === 'left') {
         if(this.x > 0) {
            this.x = this.x - 100;
        }
    }
    if(value === 'up') {
        if(this.y > 0) {
            this.y = this.y - 80;
            //if youve reached the water reset position
            if(this.y < 0){
                this.x = 200;
                this.y = 375;
            }
        }
    }
    if(value === 'right') {
        if(this.x < 400){
            this.x = this.x + 100;
        }
    }
    if(value === 'down') {
        if(this.y < 375) {
            this.y = this.y + 80;
        }
    }
};
//initialize a player
Player.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//update players position
Player.prototype.update = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    "use strict";
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
 
//create player
var player = new Player();

//create 20 enemies
var allEnemies = [];
for(var i = 0; i <= 4; i++){
    allEnemies[i] = new Enemy();
};