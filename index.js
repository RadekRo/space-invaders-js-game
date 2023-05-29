import CreatePlayer from './player.js';
import bulletController from './bulletController.js';
import AliensController from "./AliensController.js";

const fps = 60;
const canvas = document.getElementById('gameboard');
const sound = new Audio('sounds/music.mp3');
sound.volume = 0.09;
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

let background = new Image();
background.src = 'images/background.jpg';
    
let playerBulletController = new bulletController(canvas, 10, "red", true);
let alienBulletController = new bulletController(canvas, 5, "blue", false);
let alienController = new AliensController(canvas, 
        alienBulletController,
        playerBulletController);
let player = new CreatePlayer(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;
let level = 1;

function game() {
    
    // checkGameOver();
    sound.play();
    checkLevelChange();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    displayGameOver();

    if(!isGameOver) {
    alienController.draw(ctx);
    player.draw(ctx)
    playerBulletController.draw(ctx);
    alienBulletController.draw(ctx);
    }
}

function displayGameOver() {
    if(isGameOver) {
        let text = didWin ? "You win" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;
        ctx.fillStyle = "red";
        ctx.font = "65px Verdana";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

function checkLevelChange() {
    if(alienController.aliensRows.length === 0) {
        level ++;
        console.log(level)
        console.log("Next level on") 
        background.src = 'images/earth_from_moon.jpg';
        playerBulletController = new bulletController(canvas, 10, "red", true);
        alienBulletController = new bulletController(canvas, 5, "blue", false);
        alienController = new AliensController(canvas, 
            alienBulletController,
            playerBulletController);
        player = new CreatePlayer(canvas, 3, playerBulletController);
    }
}

// function checkGameOver() {
//     if(isGameOver) {
//         return;
//     }
//     if(alienBulletController.collideWith(player)){
//         isGameOver = true;
//     }
//     if(alienController.collideWith(player)) {
//         isGameOver = true;
//     }
//     if(alienController.aliensRows.length === 0) {
//         didWin = true;
//         isGameOver = true;
//         console.log("Next level possibility ")
//     }
// }

setInterval(game, 1000/fps)
