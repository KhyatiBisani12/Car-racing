class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        

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
            name : this.name,
            distance : this.distance        // gameState is the node in the database . use : symbol
         })
    }
    // Player.getPlayerInfo();
    static getPlayerInfo(){
        var playerInfo = database.ref('players');
        playerInfo.on("value",(data)=>{     // anonymous function
            allPlayers = data.val(); // gameState is the variable. use = symbol
        })
    }
}


// player
