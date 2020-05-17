class Player {
    constructor(map){
        this.map = map;
        this.div = Player.display();
        this.move();
    }
    move(){
        document.addEventListener('keyup', (event) => {
            const oldTop = parseInt(this.div.style.top);
            const oldRight = parseInt(this.div.style.left);
            const stopMooving = this.playerIsOutsideOfContainer();
            switch(event.keyCode){
                case 40 : //down
                if(stopMooving === false){
                    this.div.style.top = `${oldTop + 20}px`;
                }
                break;

                case 38: //up
                if(stopMooving === false){
                    this.div.style.top = `${oldTop - 20}px`;
                }
                break;

                case 39: //right
                if(stopMooving === false){
                    this.div.style.left = `${oldRight + 20}px`;
                }
                break;

                case 37: //left
                if(stopMooving === false){
                    this.div.style.left = `${oldRight - 20}px`;
                }
                break;
            }
        })
    }
    static display() {
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "red";
        style.position = "absolute";
        style.top = "50px";
        style.left = "50px";
    
        document.body.appendChild(div);
    
        return div;
    
      }
      playerIsOutsideOfContainer(){
          const newHeight = parseInt(this.div.style.top);
          const newRight = parseInt(this.div.style.left);
          if(newHeight === 30 || newHeight === 430 || newRight === 30 || newRight === 430){
              return true;
          }else{
              return false;
          }
      }
}
