const wormSprite = new Image();
wormSprite.src = "static/animations/enemies/worm/worm-sprite1.png";
let wormsArray = [];

class Worm {
    constructor() {
        this.originalWidth = 500; //original sprite width
        this.originalHeight = 256; //priginal sprite height
        this.height = this.originalHeight / 2.5; //2.5
        this.width = this.originalWidth / 2.5;
        this.x = canvas.width; //start x co-ord
        this.y = canvas.height - this.height - floorHeight; // y co-ord
        this.counted = false; //? not needed??
        /* ! DO NOT CHANGE HIT BOX
        if size needs changing, change height/width by modifying
        the denominator value marked shown as comment in height
        */
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
            this.frameX * this.originalWidth, //start x pos. on sprite sheet
            0, //start y pos. on sprite sheet
            this.originalWidth, //start width of single sprite
            this.originalHeight, //start height
            this.x, //destination x co-ord
            this.y, //destination y co-ord
            this.width, //destination width (width to be drawn)
            this.height //destination height
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
            if (this.frameX < 3) this.frameX++; // update sprite
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

    // update each worm
    for (let i = 0; i < wormsArray.length; i++) {
        wormsArray[i].update();
    }
    
    //stop array getting too big for speed
    if (wormsArray.length > 20) {
        wormsArray.pop(wormsArray[0]);
    }
};

const worm = new Worm();