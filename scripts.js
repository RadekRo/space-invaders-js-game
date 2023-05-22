gameboard = document.getElementById("gamebord");
spaceship = document.getElementById("spaceship");
left_marigin = 230

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
    left_marigin -= 10
    spaceship.style.left = left_marigin + "px"
    console.log("w lewo")
}

function moveRight() {
    left_marigin += 10
    spaceship.style.left = left_marigin + "px"
    console.log("w prawo")
}
