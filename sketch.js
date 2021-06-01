
var database;
var gameState = 0;
var playerCount = 0;
var form;
var game;
var player;
var allPlayers;
var cars,car1,car2,car3,car4;


function setup(){
    // Binding your database and your code. Binding is done with database variable.
    database = firebase.database();
    createCanvas(displayWidth, displayHeight);
    
    game = new Game();
    game.getState();
    game.start();
    
    
    /*ballPosition = database.ref('ball/position'); // .ref() is used to point to a node in the database.
    ballPosition.on("value",readPosition,showError);*/
}

function draw(){
    background("white");
    
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        console.log("in gamestate 1");
        clear();
        game.play();
    }



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