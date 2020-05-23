var gameState = 0;
var playercount;
var form,player,game;
var database;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game =  new Game();
    game.getstate();
    game.start();

}

function draw(){
 
}

