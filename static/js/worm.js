const wormSprite = new Image();
wormSprite.src = "static/animations/enemies/worm/worm-sprite1.png";
let wormsArray = [];

class Worm {
    constructor() {
        this.originalWidth = 500; // Original sprite width
        this.originalHeight = 256; // Original sprite height
        this.height = this.originalHeight / 2.5;
        this.width = this.originalWidth / 2.5;
        this.x = canvas.width; // Start x co-ord
        this.y = canvas.height - this.height - floorHeight; // Start y co-ord
        /* ! DO NOT CHANGE HIT BOX
        if size needs changing, change height/width by modifying
        the denominator value marked shown as comment in height
        */
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .7;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .3;
    }

    draw() {
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            wormSprite,
            this.frameX * this.originalWidth, // Start x pos. on sprite sheet
            0, // Start y pos. on sprite sheet
            this.originalWidth, // Start width of single sprite
            this.originalHeight, // Start height
            this.x, // Destination x co-ord
            this.y, // Destination y co-ord
            this.width, // Destination width (width to be drawn)
            this.height // Destination height
        );
    }

    update() {
        this.x -= gameSpeed;
        if (endGame) { // Check for pause
            this.frameX = this.frameX;
        } else if (gameFrame % staggerFrames == 0) {
            // (number of sprites per animation) - 1
            if (this.frameX < 3) this.frameX++; // Update sprite
            else this.frameX = 0;
        }
        // Update hitbox position with instance of object
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .7;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .3;
        this.draw();
    }
}

const handleWorms = () => {
    // Every x frames, add obstacle to array
    if (gameFrame % (randomNumber + 350) === 0) {
        wormsArray.unshift(new Worm());
    }

    // Update each worm
    for (let i = 0; i < wormsArray.length; i++) {
        wormsArray[i].update();
    }

    // Stop array getting too big for speed
    if (wormsArray.length > 20) {
        wormsArray.pop(wormsArray[0]);
    }
};

const worm = new Worm();