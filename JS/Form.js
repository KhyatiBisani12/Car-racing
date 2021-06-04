class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput('');
        this.button = createButton("Play");
        this.greeting = createElement('h3');
    }  
   display(){
       
       this.title.html("Car Racing Game");
       this.title.position(displayWidth/2+400,displayHeight-350);
       this.input.position(displayWidth/2+420,displayHeight-280);
       this.button.position(displayWidth/2+480,displayHeight-240);

       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.updateCount(playerCount);
            player.index = playerCount;
            player.update();
            this.greeting.html("Hello " + player.name);
            this.greeting.position(120,250);
       })

   }
   hide(){
       this.input.hide();
       this.button.hide();
       this.greeting.hide();
   }

}