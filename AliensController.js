import Alien from "./Alien.js";
import MovingDirection from "./MovingDirection.js";

export default class AliensController {
    aliensMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 
        [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],  
    ];
    aliensRows = [];

    currentDirection = MovingDirection.right;
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1; 
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 80;  
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, alienBulletController, playerBulletController, level) {
        for (let i = level - 1; i > 0; i--) {
            this.aliensMap.push(this.aliensMap[i])
        }
        this.canvas = canvas;
        this.alienBulletController = alienBulletController;
        this.playerBulletController = playerBulletController;
        this.alienDeatSound = new Audio('sounds/alienDeathSound.mp3')
        this.alienDeatSound.volume = 0.4;
        this.createAliens();
    }

    draw(ctx) {
        this.decrementMoveDownTimer();
        this.updateVelocityAndDirection()
        this.collisionDetection();
        this.drawAliens(ctx);
        this.resetMoveDownTimer();
        this.fireBullet();
    }

    collisionDetection() {
        this.aliensRows.forEach(alienRow=>{
            alienRow.forEach((alien, alienIndex)=>{
                if(this.playerBulletController.collideWith(alien)) {
                    this.alienDeatSound.currentTime = 0;
                    this.alienDeatSound.play();
                    alienRow.splice(alienIndex,1)
                }
            });
        });
        this.aliensRows = this.aliensRows.filter(alienRow => alienRow.length > 0)
    }

    fireBullet() {
        this.fireBulletTimer--;
        if(this.fireBulletTimer <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allAliens = this.aliensRows.flat();
            const alienIndex = Math.floor(Math.random() * allAliens.length);
            const alien = allAliens[alienIndex];
            this.alienBulletController.shoot(alien.x, alien.y, -3);
        }
    }
    resetMoveDownTimer() {
        if (this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer() {
        if (
        this.currentDirection === MovingDirection.downLeft ||
        this.currentDirection === MovingDirection.downRight
        ) {
        this.moveDownTimer--;
        }
    }

    updateVelocityAndDirection() {
       for(const alienRow of this.aliensRows) {
        if (this.currentDirection == MovingDirection.right) {
            this.xVelocity = this.defaultXVelocity;
            this.yVelocity = 0;
            const rightMostAlien = alienRow[alienRow.length -1]; 
            if (rightMostAlien.x + rightMostAlien.width >= this.canvas.width) {
                this.currentDirection = MovingDirection.downLeft;
                break;
            }
        } else if (this.currentDirection === MovingDirection.downLeft) {
            if (this.moveDown(MovingDirection.left)) {
                break;
            }
        } else if (this.currentDirection === MovingDirection.left) {
            this.xVelocity = -this.defaultXVelocity;
            this.yVelocity = 0;
            const leftMostAlien = alienRow[0];
            if (leftMostAlien.x <= 0) {
                this.currentDirection = MovingDirection.downRight;
                break
            }
        } else if (this.currentDirection === MovingDirection.downRight) {
            if (this.moveDown(MovingDirection.right)) {
                break;
        }
       } 
    }
}

    moveDown(newDirection) {
        this.xVelocity = 0;
        this.yVelocity = this.defaultYVelocity;
        if(this.moveDownTimer <= 0) {
           this.currentDirection = newDirection;
           return true;
        }
        return false;
    }

    drawAliens(ctx) {
        this.aliensRows.flat().forEach((alien)=>{
            alien.move(this.xVelocity, this.yVelocity);
            alien.draw(ctx);
        })
    }

    createAliens() {
        this.aliensMap.forEach((row, rowIndex)=>{
            this.aliensRows[rowIndex] = [];
            row.forEach((alienNumber, alienIndex)=>{
                if(alienNumber > 0){
                    this.aliensRows[rowIndex].push(new Alien(alienIndex * 45, rowIndex * 35, alienNumber))
                }
            })
        })
    }

    collideWith(sprite) {
        return this.aliensRows.flat().some(alien => alien.collideWith(sprite))
    }
}
    
    