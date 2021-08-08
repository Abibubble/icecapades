let slugsArray = [];

const slugSprite = new Image();
slugSprite.src = "static/animations/enemies/slug/slug-sprite1.png";

class Slug {
    constructor() {
        this.originalWidth = 298;
        this.originalHeight = 178;
        this.height = this.originalHeight / 3; //testing
        this.width = this.originalWidth / 3;
        this.x = canvas.width;
        this.y = canvas.height - this.height - floorHeight;
        this.color = "red";
        this.counted = false;
    }

    draw() {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            slugSprite,
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
    // every x frames, add obstacle to array
    if (gameFrame % (randomNumber + 200) === 0) {
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
