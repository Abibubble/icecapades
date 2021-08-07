/* const obstaclesArray = [];
const treeTopSprite = new Image();
treeTopSprite.src = "treeTop.png";
const treeBottomSprite = new Image();
treeBottomSprite.src = "treeBottom.png"; */
const obstaclesArray = [];

const slugSprite = new Image();
slugSprite.src = "static/animations/enemies/slug/slug-sprite1.png";

const wormSprite = new Image();
slugSprite.src = "static/animations/enemies/slug/slug-sprite1.png";

class Enemy {
    constructor() {
        this.originalWidth = 298;
        this.originalHeight = 178;
        this.topPipeHeight = (Math.random() * canvas.height) / 3 + 20;
        this.bottomPipeHeight = (Math.random() * canvas.height) / 3 + 20;
        this.height = slug.originalHeight / 3; //testing
        this.x = canvas.width;
        this.width = slug.originalWidth / 3;
        /* this.color = "hsla(" + hue + ", 100%, 50%, 1)"; */
        this.color = "red";
        this.counted = false;
    }

    draw() {
        /* ctx.fillRect(
            this.x,
            canvas.height - this.height,
            this.width,
            this.height
        ); */
        /* ctx.drawImage(
            slugSprite,
            this.x,
            canvas.height - this.height,
            this.width,
            this.height
        ); */
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            slugSprite,
            this.frameX * this.originalWidth, //this.x, //sx
            0, //this.y, //sy
            this.originalWidth, //this.originalWidth, //sw
            this.originalHeight, //this.originalHeight, //sh
            this.x, //dx
            canvas.height - this.height, //dy
            this.width, //dw
            this.height //this.height + 10, dh
        );
        /* slug.draw(); */
        /* slug.update(); */
    }
    update() {
        this.x -= gameSpeed;
        if (!this.counted && this.x < slug.x) {
            score++;
            this.counted = true;
        }
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 2) this.frameX++;
            else this.frameX = 0;
        }
        this.draw();
    }
}

const handleEnemies = () => {
    // every 150 frames, add obstalce to array
    if (gameFrame % 250 === 0) {
        obstaclesArray.unshift(new Enemy());
    }
    for (let i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();
    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0]);
    }
};
