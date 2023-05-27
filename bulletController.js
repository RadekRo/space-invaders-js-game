import Bullet from "./bullet.js";

export default class bulletController {
    bullets = [];
    timeNextBulletAllowed = 0;

    constructor(canvas, maxBullets, bulletColor, soundEnabled) {
        this.canvas = canvas;
        this.maxBullets = maxBullets;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("sounds/blast.mp3");
        this.shootSound.volume = 0.5;
    }

    draw(ctx) {
        this.bullets = this.bullets.filter(bullet => bullet.y + bullet.width > 0);
        this.bullets.forEach(bullet => bullet.draw(ctx))
        if(this.timeNextBulletAllowed > 0) {
            this.timeNextBulletAllowed--;
        }
    }

    shoot(x, y, speed, timeNextBulletAllowed = 0) {
        if(this.timeNextBulletAllowed <= 0 && 
            this.bullets.length < this.maxBullets) {
                const bullet = new Bullet(this.canvas, x, y, speed, this.bulletColor);
                this.bullets.push(bullet);
                if(this.soundEnabled) {
                    this.shootSound.currentTime = 0;
                    this.shootSound.play();
                }
                this.timeNextBulletAllowed = timeNextBulletAllowed;
            }
    }
}