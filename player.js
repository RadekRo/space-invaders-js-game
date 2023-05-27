export default class CreatePlayer {

    leftPressed = false;
    rightPressed = false;
    upPressed = false;
    downPressed = false;
    shootPressed = false;

    constructor(canvas, speed, bulletController) {
        this.canvas = canvas;
        this.speed = speed;
        this.bulletController = bulletController;

        this.width = 42;
        this.height = 50;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 75;
        this.image = new Image();
        this.image.src = 'images/player_ship.png';

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(ctx) {
        if(this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
        }
        this.move();
        this.collideWithEdge();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        console.log(this.upPressed, this.downPressed, this.leftPressed, this.rightPressed)
    }

    collideWithEdge() {
        if (this.x < 0) {
            this.x = 0;
        }
        else if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }

        if (this.y < 0) {
            this.y = 0;
        }
        else if (this.y > this.canvas.height - this.height) {
            this.y = this.canvas.height - this.height;
        }
    }

    move() {
        if (this.rightPressed) {
            this.x += this.speed;
        }
        else if (this.leftPressed) {
            this.x -= this.speed;
        }
        
        if (this.upPressed) {
            this.y -= this.speed;
        }
        else if (this.downPressed) {
            this.y += this.speed;
        }
    }

    keydown = (event) => {
        if (event.code == "ArrowLeft") {
            this.leftPressed = true;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = true;
        }
        if (event.code == "ArrowUp") {
            this.upPressed = true;
        }
        if (event.code == "ArrowDown") {
            this.downPressed = true;
        }
        if (event.code == "Space") {
            this.shootPressed = true;
        }

    }
    keyup = (event) => {
        if (event.code == "ArrowLeft") {
            this.leftPressed = false;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = false;
        }
        if (event.code == "ArrowUp") {
            this.upPressed = false;
        }
        if (event.code == "ArrowDown") {
            this.downPressed = false;
        }
        if (event.code == "Space") {
            this.shootPressed = false;
        }
    }
};