const BOARD_WIDTH = 500;
const BOARD_HEIGHT = 500;
const SHIP_WIDTH = 40;
const SHIP_HEIGHT = 20;
const SHIP_FLOAT = 10;

let gameboard = document.getElementById("gameboard");
let spaceship = document.getElementById("spaceship");
let left_margin = (BOARD_WIDTH - SHIP_WIDTH) / 2;

gameboard.style.width = BOARD_WIDTH + 'px';
gameboard.style.height = BOARD_HEIGHT + 'px';
spaceship.style.width = SHIP_WIDTH + 'px';
spaceship.style.height = SHIP_HEIGHT + 'px';
spaceship.style.left = left_margin + 'px';
spaceship.style.bottom = SHIP_FLOAT + 'px';

document.addEventListener('keydown', control);

function control(event)
{
    if (event.keyCode === 37) {
        moveLeft();
        }

    if (event.keyCode === 39) {
        moveRight();
        }
}

function moveLeft() {
    if (left_margin > 0) {
        left_margin -= 10;
    } else {
        left_margin = 0;
    }
    spaceship.style.left = left_margin + "px";
    console.log("w lewo")
}

function moveRight() {
    if (left_margin < 460) {
        left_margin += 10;
    } else {
        left_margin = 460;
    }
    spaceship.style.left = left_margin + "px";
    console.log("w prawo")
}
