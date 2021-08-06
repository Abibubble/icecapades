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

canvas.style.backgroundColor = "lightblue"; //! for testing only

const playerImage = new Image();
playerImage.src = ('static/animations/penguin/penguin_walk.png');
const spriteWidth = 63.2;
const spriteHeight = 64;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillRect(100,50,100,100);
    //! reference for values https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
    // ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 30, canvasHeight - (newSpriteHeight + floorHeight), newSpriteWidth, newSpriteHeight);
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 3) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();



// -------------------------------------------------------------------- Auto-updating copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();