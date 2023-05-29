import CreatePlayer from './player.js';
import bulletController from './bulletController.js';
import AliensController from "./AliensController.js";

const fps = 60;
const canvas = document.getElementById('gameboard');
const sound = new Audio('sounds/music.mp3');
sound.volume = 0.0;
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

const intro = new Image();
intro.src = 'images/intro.jpg';

const background = new Image();
background.src = 'images/background.jpg';

const playerBulletController = new bulletController(canvas, 10, "red", true);
const alienBulletController = new bulletController(canvas, 5, "blue", false);
const alienController = new AliensController(canvas, 
    alienBulletController,
    playerBulletController);


const player = new CreatePlayer(canvas, 3, playerBulletController);

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    alienController.draw(ctx);
    player.draw(ctx)
    playerBulletController.draw(ctx);
    sound.play();
    alienBulletController.draw(ctx);
}

setInterval(game, 1000/fps)
