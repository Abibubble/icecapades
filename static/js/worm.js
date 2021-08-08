const wormSprite = new Image();
wormSprite.src = "static/animations/enemies/worm/worm-sprite1.png";
let wormsArray = [];

class Worm {
    constructor() {
        this.originalWidth = 500;
        this.originalHeight = 256;
        this.height = this.originalHeight / 3;
        this.width = this.originalWidth / 3;
        this.x = canvas.width;
        this.y = canvas.height - this.height - floorHeight;
        this.color = "red";
        this.counted = false;
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .7;
        this.hitBoxX =  this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .3;
    }

    draw() {

        // * remove - for testing only
        ctx.fillStyle = "red";
        ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
        // *

        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            wormSprite,
            this.frameX * this.originalWidth, //this.x, //sx
            0, //this.y, //sy
            this.originalWidth, //this.originalWidth, //sw
            this.originalHeight, //this.originalHeight, //sh
            this.x, //dx
            this.y, //dy
            this.width, //dw
            this.height //this.height + 10, dh
        );
    }

    update() {
        this.x -= gameSpeed;
        // ?what is the below comment, can we remove it?
        /* if (!this.counted && this.x < slug.x) {
            score++;
            this.counted = true;
        } */
        if (gameFrame % staggerFrames == 0) {
            // < (number of sprites per animation) - 1
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        }
        // update hitbox position with instance of object
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .7;
        this.hitBoxX =  this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .3;
        this.draw();
    }
}

const handleWorms = () => {
    // every x frames, add obstacle to array
    // if (gameFrame % 50 === 0) { //testing speed
    if (gameFrame % (randomNumber + 350) === 0) {
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