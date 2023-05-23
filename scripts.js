gameboard = document.getElementById("gamebord");
spaceship = document.getElementById("spaceship");
left_margin = 230

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
