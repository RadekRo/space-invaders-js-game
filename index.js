import CreatePlayer from './player.js';
import bulletController from './bulletController.js';
import AliensController from "./AliensController.js";

const fps = 60;
const canvas = document.getElementById('gameboard');
const levelInfo = document.getElementById('level');
const sound = new Audio('sounds/music.mp3');
const background_graphics = ['earth', 'earth_from_moon', 'outer_space', 'mars'];
const level_info = ['Level: 1 | Protect Mother Earth', 
                    'Level: 2 | Fighting for the Moon', 
                    'Level: 3 | Humans strikes back', 
                    'Level: 4 | Final battle'];

sound.volume = 0.01;
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

levelInfo.textContent = level_info[0];
let background = new Image();
background.src = 'images/' + background_graphics[0] + '.jpg';
    
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
    
    checkGameOver();
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
        let text = didWin ? "You win" : "You are dead.";
        let textOffset = didWin ? 3.5 : 6.2;
        ctx.fillStyle = "red";
        ctx.font = "65px Verdana";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);

        text = "Game over.";
        textOffset = 3.7;
        ctx.fillStyle = "yellow";
        ctx.font = "50px Verdana";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2 + 55);
    }
}

function checkLevelChange() {
    if(alienController.aliensRows.length === 0) {
        level ++;
        if (level > background_graphics.length) {
            didWin = true;
            isGameOver = true;
            return;
        }
        background.src = 'images/' + background_graphics[level - 1] + '.jpg';
        levelInfo.textContent = level_info[level - 1];
        playerBulletController = new bulletController(canvas, 10, "red", true);
        alienBulletController = new bulletController(canvas, 5, "blue", false);
        alienController = new AliensController(canvas, 
            alienBulletController,
            playerBulletController, 
            level);
        player = new CreatePlayer(canvas, 3, playerBulletController);
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
}

setInterval(game, 1000/fps)

