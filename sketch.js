
var database;
var gameState = 0;
var playerCount = 0;
var form;
var game;
var player;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img;
var trackImg;
var yVel;
var xVel;
var obstacle;
var obstacleGroup;
var obstacleImage,obstacleSound;
var obs_x,obs_y;
var finishedPlayers=0, passedFinish;
var goldImg, silverImg, bronzeImg;

function preload(){

    car1Img= loadImage("Images/car1.png");
    car2Img= loadImage("Images/car2.png");
    car3Img= loadImage("Images/car3.png");
    car4Img= loadImage("Images/car4.png");
    trackImg= loadImage("Images/track.jpg");
    obstacleImage= loadImage("Images/f1.png");
    obstacleSound= loadSound("Sounds/sound_car.mp3");
    goldImg = loadImage("Images/gold.png");
    silverImg = loadImage("Images/silver.png");
    bronzeImg = loadImage("Images/bronze.png");
}

function setup(){
    // Binding your database and your code. Binding is done with database variable.
    database = firebase.database();
    createCanvas(displayWidth, displayHeight);
    
    obstacleGroup = createGroup()

    game = new Game();
    game.getState();
    game.start();
   
    xVel = 0;
    yVel = 0;

    for(var i=0;i<5;i++){
        obs_x = random(200,950);
        obs_y = random(-height*4,height-300);
        obstacle = createSprite(obs_x,obs_y);
        obstacle.addImage(obstacleImage);
        obstacleGroup.add(obstacle);
    }
    
}

function draw(){
    background("white");
    
    if(playerCount === 4 && finishedPlayers === 0){
        console.log("change gamestate");
        game.update(1)
    }
    if(gameState === 1){
        console.log("in gamestate 1");
        clear();
        game.play();
    }
    if(gameState === 2 && finishedPlayers === 4){
         game.displayRanks();
    }
    if(finishedPlayers === 4){
        game.update(2)
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