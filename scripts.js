const BOARD_WIDTH = 500;
const BOARD_HEIGHT = 500;
const SHIP_WIDTH = 60;
const SHIP_HEIGHT = 60;
const SHIP_FLOAT = 10;
const SHIP_MOVEMENT = 10;
const ALIEN_WIDTH = 40;
const ALIEN_HEIGHT = 40;

let gameboard = document.getElementById("gameboard");
let spaceship = document.getElementById("spaceship");
let alien1 = document.getElementById("alien1");
let alien2 = document.getElementById("alien2");
let alien3 = document.getElementById("alien3");
let alien4 = document.getElementById("alien4");
let alien5 = document.getElementById("alien5");
let alien6 = document.getElementById("alien6");
let alien7 = document.getElementById("alien7");
let alien8 = document.getElementById("alien8");
let alien9 = document.getElementById("alien9");
let alien10 = document.getElementById("alien10");
let alien11 = document.getElementById("alien11");
let alien12 = document.getElementById("alien12");
let alien13 = document.getElementById("alien13");
let left_margin = (BOARD_WIDTH - SHIP_WIDTH) / 2;

gameboard.style.width = BOARD_WIDTH + 'px';
gameboard.style.height = BOARD_HEIGHT + 'px';
spaceship.style.width = SHIP_WIDTH + 'px';
spaceship.style.height = SHIP_HEIGHT + 'px';
spaceship.style.bottom = SHIP_FLOAT + 'px';
spaceship.style.left = left_margin + 'px';
alien1.style.width = ALIEN_WIDTH + 'px';
alien1.style.height = ALIEN_HEIGHT + 'px';
alien2.style.width = ALIEN_WIDTH + 'px';
alien2.style.height = ALIEN_HEIGHT + 'px';
alien3.style.width = ALIEN_WIDTH + 'px';
alien3.style.height = ALIEN_HEIGHT + 'px';
alien4.style.width = ALIEN_WIDTH + 'px';
alien4.style.height = ALIEN_HEIGHT + 'px';
alien5.style.width = ALIEN_WIDTH + 'px';
alien5.style.height = ALIEN_HEIGHT + 'px';
alien6.style.width = ALIEN_WIDTH + 'px';
alien6.style.height = ALIEN_HEIGHT + 'px';
alien7.style.width = ALIEN_WIDTH + 'px';
alien7.style.height = ALIEN_HEIGHT + 'px';
alien8.style.width = ALIEN_WIDTH + 'px';
alien8.style.height = ALIEN_HEIGHT + 'px';
alien9.style.width = ALIEN_WIDTH + 'px';
alien9.style.height = ALIEN_HEIGHT + 'px';
alien10.style.width = ALIEN_WIDTH + 'px';
alien10.style.height = ALIEN_HEIGHT + 'px';
alien11.style.width = ALIEN_WIDTH + 'px';
alien11.style.height = ALIEN_HEIGHT + 'px';
alien12.style.width = ALIEN_WIDTH + 'px';
alien12.style.height = ALIEN_HEIGHT + 'px';
alien13.style.width = ALIEN_WIDTH + 'px';
alien13.style.height = ALIEN_HEIGHT + 'px';

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
        left_margin -= SHIP_MOVEMENT;
    } else {
        left_margin = 0;
    }
    spaceship.style.left = left_margin + "px";
    console.log("w lewo")
}

function moveRight() {
    if (left_margin < (BOARD_WIDTH - SHIP_WIDTH)) {
        left_margin += SHIP_MOVEMENT;
    } else {
        left_margin = (BOARD_WIDTH - SHIP_WIDTH);
    }
    spaceship.style.left = left_margin + "px";
    console.log("w prawo")
}
