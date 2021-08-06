const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let canvasWidth;
let canvasHeight;
let newSpriteWidth;
let newSpriteHeight;
let floorHeight;

window.addEventListener("resize", handleChange);
/**
 * Sets canvas to fill space between header and footer
 */
function handleChange() {
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    let footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight - (headerHeight + footerHeight);
    if (canvasHeight > canvasWidth) { // portrait
        newSpriteWidth = canvasHeight / 7.5;
        newSpriteHeight = canvasHeight / 7.5;
        floorHeight = canvasHeight / 5;
   
    } else { // landscape
        newSpriteWidth = canvasHeight / 5;
        newSpriteHeight = canvasHeight / 5;
        floorHeight = canvasHeight / 10;
    }
}

handleChange();

// --Main character animation-------------------------------------------

canvas.style.backgroundColor = "lightblue"; //! for testing only

const playerImage = new Image();
playerImage.src = ('static/animations/penguin/spritesheet.png');
// -- setup width and height of sprites
const walkWidth = 64.5;
const spriteHeight = 73;
const slideWidth = 74;
const jumpWidth = 73;

let frameX = 0; // scroll trough row of sprites
let frameY = 0; // scroll trough column of sprites
let gameFrame = 0;
const staggerFrames = 8;  //adjust speed of the animation


function walk() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(100,50,100,100);
    //! reference for values https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    // ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    let position = Math.floor(gameFrame/staggerFrames) % 4;  // 4= Length of sprite images
    ctx.drawImage(playerImage, walkWidth * position, 4 * spriteHeight, walkWidth, spriteHeight, 30, canvasHeight - (newSpriteHeight + floorHeight), newSpriteWidth, newSpriteHeight);
    gameFrame++;
    requestAnimationFrame(walk);
}

function slide(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor((gameFrame)/staggerFrames) % 3;  // 4= Length of sprite images
    ctx.drawImage(playerImage, slideWidth * position, 3 * spriteHeight, slideWidth, spriteHeight, 30, canvasHeight - (newSpriteHeight + floorHeight), newSpriteWidth, newSpriteHeight);
    gameFrame++;
    requestAnimationFrame(slide);
}

function die(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor((gameFrame)/staggerFrames) % 4;  // 4= Length of sprite images
    ctx.drawImage(playerImage, slideWidth * position, 1 * spriteHeight, slideWidth, spriteHeight, 30, canvasHeight - (newSpriteHeight + floorHeight), newSpriteWidth, newSpriteHeight);
    gameFrame++;
    requestAnimationFrame(die);
}

function jump(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor((gameFrame)/staggerFrames) % 4;  // 4= Length of sprite images
    ctx.drawImage(playerImage, jumpWidth * position, 0 * spriteHeight, jumpWidth, spriteHeight, 30, canvasHeight - (newSpriteHeight + floorHeight), newSpriteWidth, newSpriteHeight);
    gameFrame++;
    requestAnimationFrame(jump);
}
walk();


// ------------ Health Bar--------------------------------------------------------

let maxHealth = 50;
let currentHealth = 40;
let deadTux = 0;
let dangerZone = 10;
let healthBar = document.getElementById("health-bar");

function pushHealth() {
    healthBar.style.width = (currentHealth * 2) + "%";
}

function checkHealth() {
    pushHealth();
    if (currentHealth <= deadTux ) {
        // Oh no, Tux is dead!
    } else {
        if (currentHealth <= dangerZone) {
            healthBar.style.color = "red";
        } else {
            healthBar.style.color = "aqua";
        }
    }
}

function tuxIsHit() {
    health -= 10;
    checkHealth();
}

// -------------------------------------------------------------------- Snowballs Bar

let maxSnowballs = 10;
let currentAmmo = 10;
let noAmmo = 0;
let lowAmmo = 3;

function pushAmmo() {
    document.getElementById("snowball-bar").value = currentAmmo;
}

function checkAmmo() {
    currentAmmo--;
    if (currentAmmo <= noAmmo ) {
        // Oh no, Tux has no ammo!
    } else {
        pushAmmo();
        if (currentAmmo <= lowAmmo) {
            // Health bar turns red
        }
    }
}

// -------------------------------------------------------------------- Audio

let audio = "off";
const gameAudio = new Audio('static/audio/game.mp3');
gameAudio.loop = true;

function checkAudioButtons() {
    if (audio === "on") {
        document.getElementById("play-button").classList.add("hide");
        document.getElementById("pause-button").classList.remove("hide");
        gameAudio.play();
    } else {
        document.getElementById("play-button").classList.remove("hide");
        document.getElementById("pause-button").classList.add("hide");
        gameAudio.pause();
    }
}

function toggleAudio() { // So that the user can toggle the audio off or on
    if (audio === "off") {
        audio = "on";
    } else {
        audio = "off";
    }
    checkAudioButtons();
}

// ----------- Auto-updating copyright---------------------------------------------------------

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();