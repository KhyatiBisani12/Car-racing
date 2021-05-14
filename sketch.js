var ball;
var database;
var position;
var ballPosition;

function setup(){
    // Binding your database and your code. Binding is done with database variable.
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    ballPosition = database.ref('ball/position'); // .ref() is used to point to a node in the database.
    ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
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

function showError(){
    console.log("ERROR");
}