class Obstacle{
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.width = 20;
        this.height = 20;
        this.color = "green";
    }
    showObstacle(){
        const obstacleDOM = this.createObstacle();
        const mapWidth = this.gameContainer.getBoundingClientRect().width;
        const mapHeight = this.gameContainer.getBoundingClientRect().height;
        this.x = Math.floor(Math.random() * mapWidth);
        this.y = Math.floor(Math.random() * mapHeight);
        obstacleDOM.style.position = "absolute";
        obstacleDOM.style.top = `${this.x}px`;
        obstacleDOM.style.left = `${this.y}px`;
        this.obstacleDOM = obstacleDOM;
        this.gameContainer.appendChild(obstacleDOM);
    }
    createObstacle() {
        const div = document.createElement('div');
        div.style.backgroundColor = this.color;
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        
        return div;
    }
}