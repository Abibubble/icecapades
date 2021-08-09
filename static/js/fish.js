let fishArray = [];
class Fish {
    constructor() {
        this.x = canvas.width; // x position on canvas
        this.y = canvas.height / 2.2 + (Math.random() * 125); // roughly middle of canvas
        this.originalWidth = 498; // individual sprite width from sprite sheet
        this.originalHeight = 327; // individual sprite height from sprite sheet
        this.width = this.originalWidth / 5; // sensible width for game
        this.height = this.originalHeight / 5; // sensible height for game
        this.frameX = 0; // sprite sheet x position (column)
        this.frameY = 0; // sprite sheet y position (row)
        this.row = 0; // row counter for sprite sheet
        this.image = new Image();
        this.image.src = `static/animations/fish/${fishColor}-fish.png`
        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .87;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
    }

    update() {
        let fishColCalc = frameX % 4; // to cycle through 4 columns
        switch (fishColCalc) {
            case 0:
                this.frameX = 0;
                if (this.row <= 4) { // for no.of rows
                    this.row++; // increase row no. at end of row
                } else {
                    this.row = 0;
                }
                break;
            case 1:
                this.frameX = 1;
                break;
            case 2:
                this.frameX = 2;
                break;
            case 3:
                this.frameX = 3;
                break;
            default:
                this.frameX = 0;
        }

        let fishRowCalc = this.row % 5; // cycle through 5 columns
        switch (fishRowCalc) {
            case 0:
                this.frameY = 0;
                break;
            case 1:
                this.frameY = 1;
                break;
            case 2:
                this.frameY = 2;
                break;
            case 3:
                this.frameY = 3;
                break;
            case 4:
                this.frameY = 4;
                break;
            default:
                this.frameY = 0;
        }

        this.x -= gameSpeed;

        this.hitBoxWidth = this.width * .83;
        this.hitBoxHeight = this.height * .87;
        this.hitBoxX = this.x + (this.width * .05);
        this.hitBoxY = this.y + this.height * .1;
        this.draw();
    }

    draw() {
        ctx.drawImage(
            this.image, // sprite sheet
            this.frameX * this.originalWidth, // x position of sprite sheet
            this.frameY * this.originalHeight, // y position of sprite sheet
            this.originalWidth, // individual sprite width
            this.originalHeight, // individual sprite height
            this.x, // x position of fish
            this.y, // height of fish
            this.width, // intended width
            this.height, // intended height
        );
    }
}

const handleFish = () => {
    if (gameFrame % 1100 === 0) {
        fishArray.unshift(new Fish());
        if (fishIndex < 2) { // cycle through fish colors
            fishIndex++;
            fishColor = fishColorArray[fishIndex];
        } else {
            fishIndex = 0;
            fishColor = fishColorArray[fishIndex];
        }
    }

    for (let i = 0; i < fishArray.length; i++) {
        fishArray[i].update();
    }

    if (fishArray.length > 10) {
        fishArray.pop(fishArray[0]);
    }
};

const fish = new Fish();