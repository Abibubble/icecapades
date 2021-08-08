const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
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

    if (canvasHeight > canvasWidth) {
        // portrait
        newSpriteWidth = canvasHeight / 7.5;
        newSpriteHeight = canvasHeight / 7.5;
        floorHeight = canvasHeight / 5;
    } else {
        // landscape
        newSpriteWidth = canvasHeight / 5;
        newSpriteHeight = canvasHeight / 5;
        floorHeight = canvasHeight / 10;
    }
}

handleChange();

// --Main character animation-------------------------------------------

canvas.style.backgroundColor = "green"; //! for testing only

const playerImage = new Image();
playerImage.src = "static/animations/penguin/spritesheet.png";
// -- setup width and height of sprites
const walkWidth = 64.7;
const spriteHeight = 73;
const slideWidth = 74;
const jumpWidth = 73;

let frameX = 0; // scroll trough row of sprites
let frameY = 0; // scroll trough column of sprites
let gameFrame = 0;
const staggerFrames = 10; //adjust speed of the animation

let jumpCount = 0; // allows jump to be timed
let jumpHeight = 0; // allow jump increase
let jumpDirection;

/**
 * initiates game frame rate for all animations
 * maintained at constant speed
 */
function frameRate() {
    gameFrame++;
    requestAnimationFrame(frameRate);
}

frameRate();

function walk() {
    let spawnx = 30;
    let spawny = walkWidth; //height where it would be shown

    ctx.clearRect(
        spawnx,
        canvasHeight - (newSpriteHeight + floorHeight),
        walkWidth + 141,
        spriteHeight + 200
    ); //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //! reference for values https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    // ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    let position = Math.floor(gameFrame / staggerFrames) % 4; // 4= Length of sprite images
    ctx.drawImage(
        playerImage,
        walkWidth * position,
        4 * spriteHeight,
        walkWidth,
        spriteHeight,
        30,
        canvasHeight - (newSpriteHeight + floorHeight),
        newSpriteWidth,
        newSpriteHeight
    );
    requestAnimationFrame(walk);
}

function slide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor(gameFrame / staggerFrames) % 3; // 4= Length of sprite images
    ctx.drawImage(
        playerImage,
        slideWidth * position,
        3 * spriteHeight,
        slideWidth,
        spriteHeight,
        30,
        canvasHeight - (newSpriteHeight + floorHeight),
        newSpriteWidth,
        newSpriteHeight
    );
    requestAnimationFrame(slide);
}

function die() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor(gameFrame / staggerFrames) % 4; // 4= Length of sprite images
    ctx.drawImage(
        playerImage,
        slideWidth * position,
        spriteHeight,
        slideWidth,
        spriteHeight,
        300,
        canvasHeight - (newSpriteHeight + floorHeight),
        newSpriteWidth,
        newSpriteHeight
    );
    requestAnimationFrame(die);
}

function jump() {
    jumpCount++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let position = Math.floor(gameFrame / staggerFrames) % 4; // 4= Length of sprite images
    ctx.drawImage(
        playerImage,
        jumpWidth * position,
        0,
        jumpWidth,
        spriteHeight,
        30,
        canvasHeight - (newSpriteHeight + floorHeight + jumpHeight),
        newSpriteWidth,
        newSpriteHeight
    );

    // change jumpCount value for duration of jump animation
    if (jumpCount < 75) {
        jumpDirection = "up";
        jumpHeight++;
        requestAnimationFrame(jump);
    } else if (jumpCount >= 75) {
        jumpDirection = "down";
        jumpHeight--;
        if (jumpHeight === 0 && jumpDirection === "down") {
            jumpCount = 0;
            requestAnimationFrame(walk);
        } else {
            requestAnimationFrame(jump);
        }
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 38) {
        jump();
    } else if (e.keyCode == 40) {
        slide();
    } else {
        walk();
    }
};

// --enemy snake---------------

const wormImage = new Image();
wormImage.src = "static/animations/enemies/worm/worm-sprite1.png";
// -- setup width and height of sprites
const wormWidth = 508;
const wormHeight = 256;
let spriteSize = 100;
let spawnx = canvasWidth;
let spawny = 0; //height where it would be shown

function showWorm() {
    let position = Math.floor(gameFrame / staggerFrames) % 4; // 4= Length of sprite images
    ctx.clearRect(
        spawnx,
        canvasHeight - (newSpriteHeight + floorHeight) - spawny,
        wormWidth,
        wormHeight
    );

    ctx.drawImage(
        wormImage,
        wormWidth * position,
        0,
        wormWidth,
        wormHeight,
        spawnx--,
        canvasHeight - (newSpriteHeight + floorHeight) - spawny,
        newSpriteWidth - spriteSize,
        newSpriteHeight - spriteSize
    );

    requestAnimationFrame(showWorm);
    gameFrame++;

    if (spawnx == -100) {
        spawnx = canvasWidth + 10;
    }
}

// --enemy slug---------------

const slugImage = new Image();
slugImage.src = "static/animations/enemies/slug/slug-sprite1.png";
// -- setup width and height of sprites
const slugWidth = 299;
const slugHeight = 178;
let spawnslugx = canvasWidth;
let spawnslugy = 0;

function showSlug() {
    let position = Math.floor(gameFrame / staggerFrames) % 3; // 4= Length of sprite images
    ctx.clearRect(
        spawnslugx,
        canvasHeight - (newSpriteHeight + floorHeight) - spawnslugy,
        slugWidth,
        slugHeight
    );

    ctx.drawImage(
        slugImage,
        slugWidth * position,
        0,
        slugWidth,
        slugHeight,
        spawnslugx--,
        canvasHeight - (newSpriteHeight + floorHeight) - spawnslugy,
        newSpriteWidth - spriteSize,
        newSpriteHeight - spriteSize
    );

    requestAnimationFrame(showSlug);
    gameFrame++;
    
    if (spawnslugx == -299) {
        //let slug to go behind screen
        spawnslugx = canvasWidth + 10;
    }
}

showWorm();
setTimeout(function () {
    showSlug();
}, 1000);
