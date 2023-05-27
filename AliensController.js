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

    constructor(canvas) {
        this.canvas = canvas;
        this.createAliens();
    }

    draw(ctx) {
        this.decrementMoveDownTimer();
        this.updateVelocityAndDirection()
        this.drawAliens(ctx);
        this.resetMoveDownTimer();
        console.log(this.moveDownTimer);
    }

    resetMoveDownTimer() {
        if (this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer() {
        if (
        this.currentDirection === MovingDirection.downLeft || MovingDirection ==
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
}
    
    