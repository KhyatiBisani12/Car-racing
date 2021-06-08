class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",(data)=>{     // anonymous function
            gameState = data.val(); // gameState is the variable. use = symbol
        })
    }

    update(state){
        database.ref('/').update({  
           gameState : state        // gameState is the node in the database . use : symbol
        })
        
    }
    start(){
        if(gameState === 0){
           form = new Form();
           form.display();
           player = new Player();
           player.getCount();
          
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);
        car3 = createSprite(500,200);
        car3.addImage(car3Img);
        car4 = createSprite(700,200);
        car4.addImage(car4Img);
        cars = [car1,car2,car3,car4]
    }

    /*

        abcd  : 500  -- black // 1  (100,200)
        pqrs : 0                       (100,230) 
        qwerty :600  -- red  //3        (100,260)
        yuio : 0                       (100,290) 

    */
    play(){
        form.hide();
        textSize(35);
        fill("blue");
        text("Start",580,220);
        Player.getPlayerInfo();

        // cars = [car1,car2,car3,car4]---- cars[0]

        if(allPlayers !== undefined){
            var index = 0;
            var x=100;
            var y=0;
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
            for(var plr in allPlayers){
                index += 1;
                //x = x+150;
                x = 150 + (index*150)+allPlayers[plr].xPos;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;

                textAlign(CENTER);
                textSize(20);
                //text(text,x,y);
                text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75);

                if(plr==="player"+player.index){
                    fill("red");
                    stroke(10);
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y ;
                }
                
               
                
            }
        }
        // if(keyIsDown(UP_ARROW) && player.index !== null){
        //       player.distance += 50;
        //       player.update();
        //       console.log(player.distance);
        //     }
        if(player.distance<2500){
            if(keyIsDown(38) && player.index !== null){
                yVel +=0.9;
                if(keyIsDown(37)){
                    xVel -= 0.2;
                }
                if(keyIsDown(39)){
                    xVel += 0.2;
                }
            } else if (keyIsDown(38) && yVel>0 && player.index !== null){
                yVel -=0.1;
                xVel *=0.9;
            }else{
                yVel *=0.985;
                xVel *=0.985;
            }
           //gameState = 2;
        }
        player.distance += yVel;
        yVel *=0.985;
        player.xPos += xVel;
        xVel *=0.985;
        console.log(player.distance);
        player.update();
        drawSprites();
    }
    end(){
       console.log("gameEnd");
       

    }

}
