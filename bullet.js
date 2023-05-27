export default class Bullet {
    constructor(canvas, x, y, speed, bulletColor) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.bulletColor = bulletColor;

        this.width = 5;
        this.height = 20;
    }
    draw(ctx) {
        this.y -= this.speed;
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}