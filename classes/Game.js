class Game{
    constructor(gameContainer){
        this.gameContainer = this.map();
        this.player = new Player;
        this.obstacle1 = new Obstacle(gameContainer);
        this.obstacle2 = new Obstacle(gameContainer);
        this.obstacle3 = new Obstacle(gameContainer);
        this.obstacle4 = new Obstacle(gameContainer);
    }
    map(){
        const gameContainer = document.getElementById('gameContainer')
        gameContainer.style.backgroundColor = "#AED6F1";
        gameContainer.style.height = "400px";
        gameContainer.style.width = "400px";
        gameContainer.style.top = '20px';
        gameContainer.style.left = '20px';
        gameContainer.style.position = 'relative';
        document.body.appendChild(gameContainer);
        return gameContainer;
    }
    
}
const game = new Game