
var database;
var gameState = 0;
var playerCount = 0;
var form;
var game;
var player;


function setup(){
    // Binding your database and your code. Binding is done with database variable.
    database = firebase.database();
    createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();
    
    
    /*ballPosition = database.ref('ball/position'); // .ref() is used to point to a node in the database.
    ballPosition.on("value",readPosition,showError);*/
}

function draw(){
    background("white");
    
}

/*function readPosition(data){
    position = data.val(); // ball/position
    ball.x = position.x;
    ball.y = position.y;

}

function writePosition(x,y){

    database.ref('ball/position').set({  
        'x' : ball.x + x,
        'y' : ball.y + y,
    })
    
}
*/