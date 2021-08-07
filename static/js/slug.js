let slugs = [];
let timeToNextSlug = 0;
let slugInterval = 1500;
let lastTime = 0;

class Slug {
    constructor() {
        this.x = 250;
        this.y = 0;
        this.vy = 0;
        this.originalWidth = 64;
        this.originalHeight = 70;
        this.width = this.originalWidth;
        this.height = this.originalHeight;
        this.weight = 1;
        this.frameX = 0;
        this.jumping = true;
        this.sliding = false;
        this.charSlideWidth = 40;
        this.charSlideheight = 20;
        this.directionX = Math.random() * 5 + 3;
    }

    update() {
        this.x -= this.directionX;
        // //Stop character at floor level
        // if (this.y > canvas.height - this.height) {
        //     this.y = canvas.height - this.height;
        //     this.vy = 0;
        // } else {
        //     //Otherwise set y velocity to act as gravity, along with setting y co-ord += y velocity
        //     this.vy += this.weight;
        //     this.vy *= 0.9; // slow down velocity
        //     this.y += this.vy;
        // }
        // //Don't allow character out the top of canvas
        // if (this.y < 0 + this.height) {
        //     this.y = 0 + this.height;
        //     this.vy = 0;
        // }
        // //If space bar pressed and char not jumping, call jump
        // // if (spacePressed && !this.jumping) {
        // //     this.jump();
        // // }
        // //Check if char is on floor, if so, set jumping to false;
        // if (this.y > canvas.height - this.height) {
        //     this.jumping = false;
        // }
        //If ArrowRight pressed
        // if (arrowRightPressed && !this.sliding) {
        //     this.slide();
        // }
        // Once let go of arrow right, set hitbox back to original position
        // if (!arrowRightPressed) {
        //     this.height = this.originalHeight;
        //     this.width = this.originalWidth;
        // }
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if (this.y > canvas.height - this.height && !this.sliding) {
            playerImage.src = "static/animations/enemies/slug/slug-sprite1.png"; //894 x 178
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
            this.height+350,//this.height + 10,
            this.originalWidth, //dwidth
            this.originalHeight  //dheight
        );
    }
}

const slug = new Slug();

function animate(timestamp) {
    // ctx.clearRect(0,0, canvas.width, canvas.height);
    let deltatime = timestamp - lastTime;
    lastTime = timestamp;
    timeToNextSlug += deltatime;
    // console.log(deltatime);
    if (timeToNextSlug > slugInterval){
        slugs.push(new Slug());
        timeToNextSlug = 0;
        console.log(slugs);
    }
    [...slugs].forEach(object => object.update());
    [...slugs].forEach(object => object.draw());
    requestAnimationFrame(animate);
}

animate(0); //pass timestamp value