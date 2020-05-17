class Obstacle{
    constructor(){
     this.div = Obstacle.display();
    }
    static display(){
     const gameContainer = document.getElementById('gameContainer')
     const div = document.createElement('div');
     const { style } = div;
     style.width = "20px";
     style.height = "20px";
     style.backgroundColor = "blue";
     style.position = "absolute";
     style.top = `${Math.floor(Math.random()*19)*20}px`;
     style.left = `${Math.floor(Math.random()*18)*20}px`;
 
     gameContainer.appendChild(div);
 
 
 
     return div;
    }
 }