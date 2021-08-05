const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.heigh = 600;

const playerImage = new Image();
playerImage.src = ('static/animations/penguin/penguin_walk.png');
const spriteWidth = 69;
const spriteHeight = 64;
let frameX = 0;
let frameY = 0;




function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.heigh);
    // ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0 ,0, spriteWidth, spriteHeight);
    if (frameX < 4) frameX++;
    else frameX = 0;
    requestAnimationFrame(animate);
}
animate();