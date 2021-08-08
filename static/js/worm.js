const wormSprite = new Image();
wormSprite.src = "static/animations/enemies/worm/worm-sprite1.png";
const wormsArray = [];

class Worm {
    constructor() {
        this.originalWidth = 500;
        this.originalHeight = 256;
        this.x = canvas.width;
        this.height = this.originalHeight / 3;
        this.width = this.originalWidth / 3;
        this.color = "red";
        this.counted = false;
    }

    draw() {
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            wormSprite,
            this.frameX * this.originalWidth, //this.x, //sx
            0, //this.y, //sy
            this.originalWidth, //this.originalWidth, //sw
            this.originalHeight, //this.originalHeight, //sh
            this.x, //dx
            canvas.height - this.height - floorHeight, //dy
            this.width, //dw
            this.height //this.height + 10, dh
        );
    }
    update() {
        this.x -= gameSpeed;
        /* if (!this.counted && this.x < slug.x) {
            score++;
            this.counted = true;
        } */
        if (gameFrame % staggerFrames == 0) {
            if (this.frameX < 2) this.frameX++;
            else this.frameX = 0;
        }
        this.draw();
    }
}

const handleWorms = () => {
    // every 850 frames, add obstalce to array
    if (gameFrame % 850 === 0) {
        wormsArray.unshift(new Worm());
    }
    for (let i = 0; i < wormsArray.length; i++) {
        wormsArray[i].update();
    }
    if (wormsArray.length > 20) {
        wormsArray.pop(wormsArray[0]);
    }
};

const worm = new Worm();
