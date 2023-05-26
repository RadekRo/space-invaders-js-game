export default class CreatePlayer {
    constructor(canvas, speed) {
        this.canvas = canvas;
        this.speed = speed;

        this.width = 65;
        this.height = 65;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 75;
        this.image = new Image();
        this.image.src = 'images/player_ship.png';
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}