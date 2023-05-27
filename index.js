
// const BOARD_WIDTH = 500;
// const BOARD_HEIGHT = 500;
// const SHIP_WIDTH = 60;
// const SHIP_HEIGHT = 60;
// const SHIP_FLOAT = 0;
// const SHIP_MOVEMENT = 10;
// const ALIEN_WIDTH = 40;
// const ALIEN_HEIGHT = 40;
// const SHIELD_HEIGHT = 40;
// const SHIELD_WIDTH = 60;
// const delayInMilliseconds_first_row = 700;
// const delayInMilliseconds_second_row = 400;
// const delayInMilliseconds_third_row = 200;
// const delayInMilliseconds_fourth_row = 500;
// const delayInMilliseconds_fifth_row = 300;
// const ALIEN_MOVE_HORIZONTAL = 5;
// const how_many = 28;

// let which_move = 0
// let direction = "left";
// let left_margin = (BOARD_WIDTH - SHIP_WIDTH) / 2;
// let gameboard = document.getElementById("gameboard");
// let spaceship = document.getElementById("spaceship");
// let alien1 = document.getElementById("alien1");
// let alien2 = document.getElementById("alien2");
// let alien3 = document.getElementById("alien3");
// let alien4 = document.getElementById("alien4");
// let alien5 = document.getElementById("alien5");
// let alien6 = document.getElementById("alien6");
// let alien7 = document.getElementById("alien7");
// let alien8 = document.getElementById("alien8");
// let alien9 = document.getElementById("alien9");
// let alien10 = document.getElementById("alien10");
// let alien11 = document.getElementById("alien11");
// let alien12 = document.getElementById("alien12");
// let alien13 = document.getElementById("alien13");
// let alien14 = document.getElementById("alien14");
// let alien15 = document.getElementById("alien15");
// let alien16 = document.getElementById("alien16");
// let alien17 = document.getElementById("alien17");
// let alien18 = document.getElementById("alien18");
// let alien19 = document.getElementById("alien19");
// let alien20 = document.getElementById("alien20");
// let alien21 = document.getElementById("alien21");
// let alien22 = document.getElementById("alien22");
// let alien23 = document.getElementById("alien23");
// let alien24 = document.getElementById("alien24");
// let alien25 = document.getElementById("alien25");
// let alien26 = document.getElementById("alien26");
// let alien27 = document.getElementById("alien27");
// let alien28 = document.getElementById("alien28");
// let alien29 = document.getElementById("alien29");
// let alien30 = document.getElementById("alien30");
// let alien31 = document.getElementById("alien31");
// let alien32 = document.getElementById("alien32");
// let alien33 = document.getElementById("alien33");
// let shield0 = document.getElementById("shield0");
// let shield1 = document.getElementById("shield1");
// let shield2 = document.getElementById("shield2");
// let shield3 = document.getElementById("shield3");


// gameboard.style.width = BOARD_WIDTH + 'px';
// gameboard.style.height = BOARD_HEIGHT + 'px';
// spaceship.style.width = SHIP_WIDTH + 'px';
// spaceship.style.height = SHIP_HEIGHT + 'px';
// spaceship.style.bottom = SHIP_FLOAT + 'px';
// spaceship.style.left = left_margin + 'px';
// alien1.style.width = ALIEN_WIDTH + 'px';
// alien1.style.height = ALIEN_HEIGHT + 'px';
// alien2.style.width = ALIEN_WIDTH + 'px';
// alien2.style.height = ALIEN_HEIGHT + 'px';
// alien3.style.width = ALIEN_WIDTH + 'px';
// alien3.style.height = ALIEN_HEIGHT + 'px';
// alien4.style.width = ALIEN_WIDTH + 'px';
// alien4.style.height = ALIEN_HEIGHT + 'px';
// alien5.style.width = ALIEN_WIDTH + 'px';
// alien5.style.height = ALIEN_HEIGHT + 'px';
// alien6.style.width = ALIEN_WIDTH + 'px';
// alien6.style.height = ALIEN_HEIGHT + 'px';
// alien7.style.width = ALIEN_WIDTH + 'px';
// alien7.style.height = ALIEN_HEIGHT + 'px';
// alien8.style.width = ALIEN_WIDTH + 'px';
// alien8.style.height = ALIEN_HEIGHT + 'px';
// alien9.style.width = ALIEN_WIDTH + 'px';
// alien9.style.height = ALIEN_HEIGHT + 'px';
// alien10.style.width = ALIEN_WIDTH + 'px';
// alien10.style.height = ALIEN_HEIGHT + 'px';
// alien11.style.width = ALIEN_WIDTH + 'px';
// alien11.style.height = ALIEN_HEIGHT + 'px';
// alien12.style.width = ALIEN_WIDTH + 'px';
// alien12.style.height = ALIEN_HEIGHT + 'px';
// alien13.style.width = ALIEN_WIDTH + 'px';
// alien13.style.height = ALIEN_HEIGHT + 'px';
// alien14.style.width = ALIEN_WIDTH + 'px';
// alien14.style.height = ALIEN_HEIGHT + 'px';
// alien15.style.width = ALIEN_WIDTH + 'px';
// alien15.style.height = ALIEN_HEIGHT + 'px';
// alien16.style.width = ALIEN_WIDTH + 'px';
// alien16.style.height = ALIEN_HEIGHT + 'px';
// alien17.style.width = ALIEN_WIDTH + 'px';
// alien17.style.height = ALIEN_HEIGHT + 'px';
// alien18.style.width = ALIEN_WIDTH + 'px';
// alien18.style.height = ALIEN_HEIGHT + 'px';
// alien19.style.width = ALIEN_WIDTH + 'px';
// alien19.style.height = ALIEN_HEIGHT + 'px';
// alien20.style.width = ALIEN_WIDTH + 'px';
// alien20.style.height = ALIEN_HEIGHT + 'px';
// alien21.style.width = ALIEN_WIDTH + 'px';
// alien21.style.height = ALIEN_HEIGHT + 'px';
// alien22.style.width = ALIEN_WIDTH + 'px';
// alien22.style.height = ALIEN_HEIGHT + 'px';
// alien23.style.width = ALIEN_WIDTH + 'px';
// alien23.style.height = ALIEN_HEIGHT + 'px';
// alien24.style.width = ALIEN_WIDTH + 'px';
// alien24.style.height = ALIEN_HEIGHT + 'px';
// alien25.style.width = ALIEN_WIDTH + 'px';
// alien25.style.height = ALIEN_HEIGHT + 'px';
// alien26.style.width = ALIEN_WIDTH + 'px';
// alien26.style.height = ALIEN_HEIGHT + 'px';
// alien27.style.width = ALIEN_WIDTH + 'px';
// alien27.style.height = ALIEN_HEIGHT + 'px';
// alien28.style.width = ALIEN_WIDTH + 'px';
// alien28.style.height = ALIEN_HEIGHT + 'px';
// alien29.style.width = ALIEN_WIDTH + 'px';
// alien29.style.height = ALIEN_HEIGHT + 'px';
// alien30.style.width = ALIEN_WIDTH + 'px';
// alien30.style.height = ALIEN_HEIGHT + 'px';
// alien31.style.width = ALIEN_WIDTH + 'px';
// alien31.style.height = ALIEN_HEIGHT + 'px';
// alien32.style.width = ALIEN_WIDTH + 'px';
// alien32.style.height = ALIEN_HEIGHT + 'px';
// alien33.style.width = ALIEN_WIDTH + 'px';
// alien33.style.height = ALIEN_HEIGHT + 'px';
// shield0.style.height = SHIELD_HEIGHT + 'px';
// shield0.style.width = SHIELD_WIDTH + 'px';
// shield1.style.height = SHIELD_HEIGHT + 'px';
// shield1.style.width = SHIELD_WIDTH + 'px';
// shield2.style.height = SHIELD_HEIGHT + 'px';
// shield2.style.width = SHIELD_WIDTH + 'px';
// shield3.style.height = SHIELD_HEIGHT + 'px';
// shield3.style.width = SHIELD_WIDTH + 'px';

// document.addEventListener('keydown', control);

// function control(event)
// {
//     if (event.keyCode === 37) {
//         moveLeft();
//         }

//     if (event.keyCode === 39) {
//         moveRight();
//         }
// }

// function moveLeft() {
//     if (left_margin > 0) {
//         left_margin -= SHIP_MOVEMENT;
//     } else {
//         left_margin = 0;
//     }
//     spaceship.style.left = left_margin + "px";
//     console.log("w lewo")
// }

// function moveRight() {
//     if (left_margin < (BOARD_WIDTH - SHIP_WIDTH)) {
//         left_margin += SHIP_MOVEMENT;
//     } else {
//         left_margin = (BOARD_WIDTH - SHIP_WIDTH);
//     }
//     spaceship.style.left = left_margin + "px";
//     console.log("w prawo")
// }

// setInterval(function moveAlien_first_row() {
//     aliens_first_row = []
//     for (let i=1; i<8; i++){
//     aliens_first_row.push(document.getElementById("alien"+i))
//     }
//     aliens_first_row.forEach(alien => {
//         let left = alien.style.left.slice(0,-2)*1  
//         if (direction == "left") {
//             left -= ALIEN_MOVE_HORIZONTAL      
//         } else {
//             left += ALIEN_MOVE_HORIZONTAL
//         }
//         alien.style.left = left + "px"
//         if (++ which_move > how_many) {
//             which_move = 0
//             if(direction == "left"){
//                 direction = "right"
//             }
//             else {
//                 direction = "left"
//             }
//         }
//     })
//     }, delayInMilliseconds_first_row);
    
// setInterval(function move_Alien_second_row() {
//     aliens_second_row = []
//     for (let i=8; i<14; i++){
//     aliens_second_row.push(document.getElementById("alien"+i))
//     }
//     aliens_second_row.forEach(alien => {
//         let left = alien.style.left.slice(0,-2)*1  
//         if (direction == "left") {
//             left -= ALIEN_MOVE_HORIZONTAL      
//         } else {
//             left += ALIEN_MOVE_HORIZONTAL
//         }
//         alien.style.left = left + "px"
//         if (++ which_move > how_many) {
//             which_move = 0
//             if(direction == "left"){
//                 direction = "right"
//             }
//             else {
//                 direction = "left"
//             }
//         }
//     })
//  }, delayInMilliseconds_second_row);

// setInterval(function move_Alien_third_row() {
//     aliens_third_row = []
//     for (let i=14; i<21; i++){
//     aliens_third_row.push(document.getElementById("alien"+i))
//     }
//     aliens_third_row.forEach(alien => {
//         let left = alien.style.left.slice(0,-2)*1  
//         if (direction == "left") {
//             left -= ALIEN_MOVE_HORIZONTAL      
//         } else {
//             left += ALIEN_MOVE_HORIZONTAL
//         }
//         alien.style.left = left + "px"
//         if (++ which_move > how_many) {
//             which_move = 0
//             if(direction == "left"){
//                 direction = "right"
//             }
//             else {
//                 direction = "left"
//             }
//         }
//     })
// }, delayInMilliseconds_third_row);

// setInterval(function move_Alien_fourth_row() {
//     aliens_fourth_row = []
//     for (let i=21; i<27; i++){
//     aliens_fourth_row.push(document.getElementById("alien"+i))
//     }
//     aliens_fourth_row.forEach(alien => {
//         let left = alien.style.left.slice(0,-2)*1  
//         if (direction == "left") {
//             left -= ALIEN_MOVE_HORIZONTAL      
//         } else {
//             left += ALIEN_MOVE_HORIZONTAL
//         }
//         alien.style.left = left + "px"
//         if (++ which_move > how_many) {
//             which_move = 0
//             if(direction == "left"){
//                 direction = "right"
//             }
//             else {
//                 direction = "left"
//             }
//         }
//     })
// }, delayInMilliseconds_fourth_row);

// setInterval(function move_Alien_fifth_row() {
//     aliens_fifth_row = []
//     for (let i=27; i<34; i++){
//     aliens_fifth_row.push(document.getElementById("alien"+i))
//     }
//     aliens_fifth_row.forEach(alien => {
//         let left = alien.style.left.slice(0,-2)*1  
//         if (direction == "left") {
//             left -= ALIEN_MOVE_HORIZONTAL      
//         } else {
//             left += ALIEN_MOVE_HORIZONTAL
//         }
//         alien.style.left = left + "px"
//         if (++ which_move > how_many) {
//             which_move = 0
//             if(direction == "left"){
//                 direction = "right"
//             }
//             else {
//                 direction = "left"
//             }
//         }
//     })
// }, delayInMilliseconds_fifth_row);

// setInterval(function moveAlien_first_row() {
//     for (let i=1; i<8; i++){
//         which_move = which_move + 1
//         let left = document.getElementById("alien"+i).style.left.slice(0,-2)*1
//         if (direction == "left") {
//             left = left - ALIEN_MOVE_HORIZONTAL
//             document.getElementById("alien"+i).style.left = left + "px"
//             if (which_move > how_many) {
//                 direction = "right"
                
//                 left = left + ALIEN_MOVE_HORIZONTAL
//                 document.getElementById("alien"+i).style.left = left + "px"
//             } else {
               
//             }       
//         }
//     }
// }, delayInMilliseconds_first_row);

// ================================================ NEW OPENING ========================================================
import CreatePlayer from './player.js'

const fps = 60;
const canvas = document.getElementById('gameboard');
let ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

const background = new Image();
background.src = 'images/background.jpg';

const player = new CreatePlayer(canvas, 4);

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    player.draw(ctx)
}

setInterval(game, 1000/fps);