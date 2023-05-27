export default class CreatePlayer {

    leftPressed = false;
    rightPressed = false;

    constructor(canvas, speed) {
        this.canvas = canvas;
        this.speed = speed;

        this.width = 50;
        this.height = 60;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 75;
        this.image = new Image();
        this.image.src = 'images/player_ship.png';

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(ctx) {
        this.move();
        this.collideWithEdge();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    collideWithEdge() {
        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }
    }

    move() {
        if (this.rightPressed) {
            this.x += this.speed;
        }
        else if (this.leftPressed) {
            this.x -= this.speed;
        }
    }

    keydown = (event) => {
        if (event.code == "ArrowLeft") {
            this.leftPressed = true;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = true;
        }
    }
    keyup = (event) => {
        if (event.code == "ArrowLeft") {
            this.leftPressed = false;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = false;
        }
    }
};