// Enemies our player must avoid
var Enemy = function() {
    
    //pick a value to place the bug on across the stones
    var yOptions = [60, 140, 220];
    var maxVal = 2; 
    var minVal = 0
    var randFloored = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    this.y = yOptions[randFloored];

    //starting x positions far enough back that bugs would continue to come on screen
    this.x = 0-Math.floor(Math.random() * (1 - (-500) + 1)) + (-500); 
   
    var speedOptions = [1,2,5]; 
    randFloored = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    
    //speed of the bug selected from an array of "speedOptions" using a random number of 0,1,0r 2
    this.speed = speedOptions[randFloored];
    //links to prototype for update and render use
    enemy = Object.create(Enemy.prototype); 
    //reference to the bug image
    this.sprite = 'images/enemy-bug.png';
};





// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed;
    ctx.drawImage(Resources.get(this.sprite), this.x * dt, this.y)
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {   
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player class identifying a player and their start position
var Player = function(){
    player = Object.create(Player.prototype); 
    this.x = 200;
    this.y = 375; 
    this.handleInput = handleInput; 
    this.sprite = "images/char-boy.png";  
};

//handles the use of keys up, down, left, right
var handleInput = function(value){
    if(value === 'left'){
         if(this.x > 0){
            this.x = this.x - 100; 
        };
    };
    if(value === 'up'){
        if(this.y > 0){
            this.y = this.y - 80; 
            //if youve reached the water reset position 
            if(this.y < 0){
                this.x = 200; 
                this.y = 375; 
            }; 
        };      
    };
    if(value === 'right'){
        if(this.x < 400){
            this.x = this.x + 100; 
        };
    };
    if(value === 'down'){
        if(this.y < 375){
            this.y = this.y + 80
        };
    };

};
//initialize a player 
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//update players position
Player.prototype.update = function() { 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
