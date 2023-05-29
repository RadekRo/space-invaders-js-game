import CreatePlayer from './player.js';
import bulletController from './bulletController.js';
import AliensController from "./AliensController.js";

const fps = 60;
const canvas = document.getElementById('gameboard');
const sound = new Audio('sounds/music.mp3');
sound.volume = 0.01;
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

const intro = new Image();
intro.src = 'images/intro.jpg';

const background = new Image();
background.src = 'images/mars.jpg';

const playerBulletController = new bulletController(canvas, 10, "red", true);
const alienBulletController = new bulletController(canvas, 5, "blue", false);
const alienController = new AliensController(canvas, 
    alienBulletController,
    playerBulletController);
const player = new CreatePlayer(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;

function game() {
    sound.play();
    checkGameOver();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    displayGameOver();
    if(!isGameOver){
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

function checkGameOver() {
    if(isGameOver) {

        return;
    }
    if(alienBulletController.collideWith(player)){
        isGameOver = true;
    }
    if(alienController.collideWith(player)) {
        isGameOver = true;
    }
    if(alienController.aliensRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

setInterval(game, 1000/fps)
