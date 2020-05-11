class Player {
    constructor(map){
        this.map = map;
        this.div = Player.display();
        this.move();
    }
    move(){
        document.addEventListener('keyup', (event) => {
            switch(event.keyCode){
                case 40 : //down
                const oldTop = parseInt(this.div.style.top);
                this.div.style.top = `${oldTop + 20}px`;
                console.log('arrow down', this.div.style.top)
                break;

            
                case 38: //up
                const oldBotom = parseInt(this.div.style.top);
                this.div.style.top = `${oldBotom - 20}px`;
                console.log('arrow up', this.div.style.top)
                break;

                
                case 39: //right
                const oldLeft = parseInt(this.div.style.left);
                this.div.style.left = `${oldLeft + 20}px`;
                console.log('arrow right', this.div.style.left)
                break;

                case 37: //left
                const oldRight = parseInt(this.div.style.left);
                this.div.style.left = `${oldRight - 20}px`;
                console.log('arrow left', this.div.style.left)
                break;
            }
            this.playerIsOutsideOfContainer();
        })
    }
    static display() {
        const gameContainer = document.getElementById('gameContainer')
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "red";
        style.position = "absolute";
        style.top = "200px"
        style.left = "250px"
    
        gameContainer.appendChild(div);
    
    
    
        return div;
    
      }
      playerIsOutsideOfContainer(){
          const newHeight = parseInt(this.div.style.top);
          const newRight = parseInt(this.div.style.left);
          if(newHeight === 0 || newHeight === 400 || newRight === 0 || newRight === 490){
              alert('Game Over')
          }
      }
}
