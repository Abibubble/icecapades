class Fish {
    constructor() {
        this.x = 150;
        this.y = 100;
        this.vy = 0;
        this.originalWidth = 64;
        this.originalHeight = 70;
        this.width = this.originalWidth;
        this.height = this.originalHeight;
        this.weight = 1;
        this.frameX = 0;
    }

    update() {
        //Stop character at floor level
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.vy = 0;
        } else {
            //Otherwise set y velocity to act as gravity, along with setting y co-ord += y velocity
            this.vy += this.weight;
            this.vy *= 0.9; // slow down velocity
            this.y += this.vy;
        }
        //Don't allow character out the top of canvas
        if (this.y < 0 + this.height) {
            this.y = 0 + this.height;
            this.vy = 0;
        }
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.y > canvas.height - this.height) {
            playerImage.src = "static/animations/fish/purple-fish.png";
        }
        ctx.drawImage(
            playerImage,
            frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            this.y,
            this.width + 5,
            this.height + 10,
            this.originalWidth,
            this.originalHeight
        );
    }
}

const fish = new Fish();
