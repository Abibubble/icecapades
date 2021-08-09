const slugSprite = new Image();
slugSprite.src = "static/animations/enemies/slug/slug-sprite1.png";
let slugsArray = [];

class Slug {
    constructor() {
        // See worm.js for comments on values
        this.originalWidth = 298;
        this.originalHeight = 178;
        this.height = this.originalHeight / 2.5;
        this.width = this.originalWidth / 2.5;
        this.x = canvas.width;
        this.y = canvas.height - this.height - floorHeight;
        // ! DO NOT CHANGE HIT BOX
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .9;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
    }

    draw() {
        ctx.drawImage(
            //(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
            slugSprite,
            this.frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    update() {
        this.x -= gameSpeed;

        if (endGame) {
            this.frameX = this.frameX;
        } else if (gameFrame % staggerFrames == 0) {
            if (this.frameX < 2) this.frameX++;
            else this.frameX = 0;
        }

        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .9;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
        this.draw();
    }
}

const handleSlugs = () => {
    // Every x frames, add obstacle to array
    if (gameFrame % (randomNumber + 150) === 0) {
        slugsArray.unshift(new Slug());
    }

    for (let i = 0; i < slugsArray.length; i++) {
        slugsArray[i].update();
    }
    
    if (slugsArray.length > 20) {
        slugsArray.pop(slugsArray[0]);
    }
};

const slug = new Slug();