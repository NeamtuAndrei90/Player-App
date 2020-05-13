class Game{
    constructor(gameContainer){
        this.gameContainer = this.map();
        this.player = new Player;
        this.obstacle1 = new Obstacle(gameContainer);
        this.obstacle1.showObstacle();
    }
    map(){
        const gameContainer = document.getElementById('gameContainer')
        gameContainer.style.backgroundColor = "#AED6F1";
        gameContainer.style.height = "400px";
        gameContainer.style.width = "400px";
        document.body.appendChild(gameContainer);
        return gameContainer;
    }
    
}
const game = new Game