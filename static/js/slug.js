const slugsArray = [];

const slugSprite = new Image();
slugSprite.src = "static/animations/enemies/slug/slug-sprite1.png";

class Slug {
    constructor() {
        this.originalWidth = 298;
        this.originalHeight = 178;
        this.x = canvas.width;
        this.height = this.originalHeight / 3; //testing
        this.width = this.originalWidth / 3;
        this.color = "red";
        this.counted = false;
    }

    draw() {
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            slugSprite,
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

const handleSlugs = () => {
    // every 250 frames, add obstalce to array
    if (gameFrame % 250 === 0) {
        slugsArray.unshift(new Slug());
    }
    for (let i = 0; i < slugsArray.length; i++) {
        slugsArray[i].update();
    }
    if (slugsArray.length > 20) {
        slugsArray.pop(slugsArray[0]);
    }
};
