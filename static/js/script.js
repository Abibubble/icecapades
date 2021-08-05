const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.heigh = 600;

const playerImage = new Image();
playerImage.src = ('static/animations/penguin/penguin_walk.png');
const spriteWidth = 63.2;
const spriteHeight = 64;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;



function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.heigh);
    // ctx.fillRect(100,50,100,100);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0 ,0, spriteWidth, spriteHeight);
   if (gameFrame % staggerFrames == 0){
       if (frameX < 3) frameX++;
       else frameX = 0;
   }
   gameFrame++;
    requestAnimationFrame(animate);
}
animate();

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();