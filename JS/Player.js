class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
       this.xPos = 0;
       this.place = 0;
    }
    getCount(){
        var countPlay = database.ref('playerCount');
        countPlay.on("value",(data)=>{     // anonymous function
            playerCount = data.val(); // gameState is the variable. use = symbol
        })
    }

    updateCount(count){
        database.ref('/').update({  
           playerCount : count        // gameState is the node in the database . use : symbol
        })
        
    }

    /*
        
    */
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({  
            name : this.name,              // gameState is the node in the database . use : symbol
            distance : this.distance,
            xPos: this.xPos,
            place : this.place
         })
    }
    // Player.getPlayerInfo();
    static getPlayerInfo(){
        var playerInfo = database.ref('players');
        playerInfo.on("value",(data)=>{     // anonymous function
            allPlayers = data.val(); // gameState is the variable. use = symbol
        })
    }
    getFinishedPlayers(){
        var finishedPlayersRef = database.ref('finishedPlayers');
        finishedPlayersRef.on("value",(data)=>{
            finishedPlayers = data.val();
        });
    }
    static updateFinishedPlayers(){
        
        database.ref('/').update({
            finishedPlayers : finishedPlayers+1
        });
        this.place +=1;
    }
}


// player
