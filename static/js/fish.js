class Fish {
    constructor() {
        this.x = canvas.width - 100;
        this.y = canvas.height - 150;
        this.vy = 0;
        this.originalWidth = 1992;
        this.originalHeight = 1634;
        this.width = this.originalWidth / 4; // Take main image width + divide by 4 to find one frame width
        this.height = this.originalHeight / 5; // Take main image height + divide by 5 to find one frame height
        this.weight = 1;
        this.frameX = 0;
        this.frameY = 0;
        this.hitWidth = 75;
        this.hitHeight = 75;
    }

    update() {
        if (gameFrame % staggerFrames == 0) {
            let fishRow = 0;
            switch (frameX) {
                case (frameX % 4 == 0):
                    this.frameX = 0;
                    if (fishRow <= 4) {
                        fishRow++;
                    } else {
                        fishRow = 0;
                    }
                    break;
                case (frameX % 4 == 1):
                    this.frameX = 1;
                    break;
                case (frameX % 4 == 2):
                    this.frameX = 2;
                    break;
                case (frameX % 4 == 3):
                    this.frameX = 3;
                    break;
                default:
                    this.frameX = 0;
            }
            switch (fishRow) {
                case (fishRow % 5 == 0):
                    this.frameY = 0;
                    break;
                case (fishRow % 5 == 1):
                    this.frameY = 1;
                    break;
                case (fishRow % 5 == 2):
                    this.frameY = 2;
                    break;
                case (fishRow % 5 == 3):
                    this.frameY = 3;
                    break;
                case (fishRow % 5 == 4):
                    this.frameY = 4;
                    break;
                default:
                    this.frameY = 0;
            }
        }
    }

    // frameX is main frame rate

    // this.x = canvas.width - 100;
    // this.y = canvas.height - 150;

    draw() {
        ctx.fillStyle = "purple"; // Collision box
        ctx.fillRect(this.x, this.y, this.hitWidth, this.hitHeight);
        ctx.drawImage(
            fishImage,
            this.frameX * this.originalWidth,
            this.frameY * this.originalHeight,
            this.width,
            this.height,
            this.x, // position width
            this.y, // position height
            75, // 75px width (x)
            75, // 75px height (y)
            this.originalWidth,
            this.originalHeight
        );
    }
}

const fish = new Fish();