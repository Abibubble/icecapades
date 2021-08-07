let slugs = [];
let timeToNextSlug = 0;
let slugInterval = 1500;
let lastTime = 0;

class Slug {
    constructor() {
        // this.x = canvas.width+10;
        // this.y = canvas.height-floorHeight;
        this.vy = 0;
        this.originalWidth = 298;
        this.originalHeight = 178;
        // this.sizeModifier = Math.random() * 0.2 + 0.5; //code out for simplicity
        // this.width = this.originalWidth * this.sizeModifier;
        // this.height = this.originalHeight * this.sizeModifier;
        this.width = this.originalWidth / 3;
        this.height = this.originalHeight / 3;
        this.x = canvas.width;
        this.y = canvas.height - this.height;
        this.weight = 1;
        this.frameX = 0;
        // this.charSlideWidth = 40;
        // this.charSlideheight = 20;
        // this.directionX = Math.random() * 0.1 + 2;
        // this.markedForDeletion = false;
        this.image = new Image();
        this.image.src = "static/animations/enemies/slug/slug-sprite1.png"; //894 x 178
    }

    // update(deltatime) {
    //     this.x -= this.directionX;
    //     if (this.x < 0 - this.width) this.markedForDeletion = true;

    // }
    update() {
        this.x -= gameSpeed;
        if (gameFrame % staggerFrames == 0) {
            if (frameX < 2) this.frameX++;
            else this.frameX = 0;
        }
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(
            //sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            this.image,
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

    die() {
        // do something on death
    }
}

const slug = new Slug();

// function animate(timestamp) {
//     // ctx.clearRect(0,0, canvas.width, canvas.height);
//     let deltatime = timestamp - lastTime;
//     lastTime = timestamp;
//     timeToNextSlug += deltatime;
//     // console.log(deltatime);
//     if (timeToNextSlug > slugInterval){
//         slugs.push(new Slug());
//         timeToNextSlug = 0;
//         // console.log(slugs);
//     }
//     [...slugs].forEach(object => object.update(deltatime));
//     [...slugs].forEach(object => object.draw());
//     slugs = slugs.filter(object => !object.markedForDeletion) //create new array without those marked for deletion
//     requestAnimationFrame(animate);
// }

// animate(0); //pass timestamp value