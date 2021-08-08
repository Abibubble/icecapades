class Tux {
    constructor() {
        this.x = 150;
        this.y = floorHeight;
        this.vy = 0;
        this.originalWidth = 154;
        this.originalHeight = 138;
        this.width = this.originalWidth + 5;
        this.height = this.originalHeight + 10;
        this.weight = 0.9;
        this.frameX = 0;
        this.jumping = true;
        this.sliding = false;
        this.charSlideWidth = 40;
        this.charSlideheight = 20;
        this.hitBoxX =  this.x + 15;
        this.hitBoxY = this.y + 6;
        this.hitBoxWidth = this.width * .7;
        this.hitBoxHeight = this.height * .9;
    }

    update() {
        //Stop character at floor level
        if (this.y > canvas.height - this.height - floorHeight) {
            this.y = canvas.height - this.height - floorHeight;
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

        //If arrow pressed and char not jumping, call jump
        if (arrowUpPressed && !this.jumping) {
            this.jump();
            if (audio == 'on') {
                jumAudio.play();
            }
        }

        //Check if char is on floor, if so, set jumping to false;
        if (this.y > canvas.height - this.height - floorHeight) {
            this.jumping = false;
        }

        //If ArrowDown pressed
        if (arrowDownPressed && !this.sliding && !this.jumping) {
            this.slide();
            if (audio == 'on') {
                slideAudio.play();
            }
        }

        // Once let go of arrow down, set hitbox back to original position
        if (!arrowDownPressed) {
            this.height = this.originalHeight;
            this.width = this.originalWidth;
        }
        if (this.jumping) {
            this.jumpAnim();
        }

        if (!busy) { // If a collision isn't already being checked, and if Tux isn't already being hurt
            this.collision(); // Check for collisions
        }

        if ((fire) &&
            (currentAmmo > 0)) {
            snowballArray.unshift(new Snowball());
            currentAmmo--;
            pushAmmo();
            if (audio == 'on') {
                throwSnowballAudio.play();
            }
            fire = false;
        }
        
        if (!this.sliding) {
            //update hit box area
            this.hitBoxX =  this.x + 15;
            this.hitBoxY = this.y + 6;
            this.hitBoxWidth = this.width * .7;
            this.hitBoxHeight = this.height * .9;
        }

    }

    draw() {
        ctx.fillStyle = "red";
        // ctx.fillRect(this.x + 15, this.y + 6, this.width * .7, this.height * .9);
        ctx.fillRect(this.hitBoxX, this.hitBoxY, this.hitBoxWidth, this.hitBoxHeight);
        if (this.y > canvas.height - this.height - floorHeight && !this.sliding) {
            playerImage.src = "static/animations/penguin/walk_spritesheet.png";
            this.originalWidth = 154;
            this.frameX = frameX;
        }

        ctx.drawImage(
            playerImage,
            this.frameX * this.originalWidth,
            0,
            this.originalWidth,
            this.originalHeight,
            this.x,
            this.y,
            this.width,
            this.height,
        );
    }

    jump() {
        this.vy -= 50; //jump height
        this.jumping = true;
        this.frameX = 0;
        this.jumpAnim();
    }

    jumpAnim() {
        this.originalWidth = 144;
        if (this.y >= canvas.height - this.height - 80) this.frameX = 0;
        else if (this.y >= canvas.height - this.height - 160) this.frameX = 1;
        else this.frameX = 2;
        playerImage.src = "static/animations/penguin/penguin_jump@2x.png";
    }

    slide() {
        this.originalWidth = 144;
        this.width = this.width + 20;
        this.frameX = 0;
        this.hitBoxX =  this.x + 15;
        this.hitBoxY = this.y + 35;
        this.hitBoxWidth = this.width * .86;
        this.hitBoxHeight = this.height * .7;
        playerImage.src = "static/animations/penguin/penguin_slide02@2x.png";
        this.sliding = true;
    }

    die() {
        playerImage.src = "static/animations/penguin/penguin_die04@2x.png";
    }

    collision() {
        let currentEnemy = null; // Variable for enemy that's currently hurting Tux
        busy = true; // Checking for collision
        
        for (let i = 0; i < slugsArray.length; i++) {
            let slugY = slugsArray[i].y; // Loop through slugs
            let slugX = slugsArray[i].x; // Get slug[i] x value
            if ((slugX > this.x && slugX < this.x + this.width) || (slugX + slug.width > this.x && slugX + slug.width < this.x + this.width)) {
                if ((slugY > this.y && slugY < this.y + this.height) || (slugY + slug.height > this.y && slugY + slug.height < this.y + this.height)) {
                    slugsArray.pop(slugsArray[i]);
                    tuxIsHit(15); // Add damage to Tux
                }
            }
        }
        
        for (let i = 0; i < wormsArray.length; i++) { // See above
            let wormX = wormsArray[i].x;
            let wormY = wormsArray[i].y;
            if ((wormX > this.x && wormX < this.x + this.width) || (wormX + worm.width > this.x && wormX + worm.width < this.x + this.width)) {
                if ((wormY > this.y && wormY < this.y + this.height) || (wormY + worm.height > this.y && wormY + worm.height < this.y + this.height)) {
                    wormsArray.pop(wormsArray[i]);
                    tuxIsHit(15);
                }
            }
        }

        for (let i = 0; i < carrotArray.length; i++) { // See above
            let carrotX = carrotArray[i].x;
            let carrotY = carrotArray[i].y;
            if ((carrotX > this.x && carrotX < this.x + this.width) || (carrotX + carrot.width > this.x && carrotX + carrot.width < this.x + this.width)) {
                if ((carrotY > this.y && carrotY < this.y + this.height) || (carrotY + carrot.height > this.y && carrotY + carrot.height < this.y + this.height)) {
                    carrotArray.pop(carrotArray[i]);
                    tuxIsHit(10);
                }
            }
        }

        for (let i = 0; i < flakeArray.length; i++) { // See above
            let snowflakeX = flakeArray[i].x;
            let snowflakeY = flakeArray[i].y;
            if ((snowflakeX > this.x && snowflakeX < this.x + this.width) || (snowflakeX + snowflake.width > this.x && snowflakeX + snowflake.width < this.x + this.width)) {
                if ((snowflakeY > this.y && snowflakeY < this.y + this.height) || (snowflakeY + snowflake.height > this.y && snowflakeY + snowflake.height < this.y + this.height)) {
                    flakeArray.pop(flakeArray[i]);
                    tuxGetsASnowflake();
                }
            }
        }

        for (let i = 0; i < fishArray.length; i++) { // See above
            let fishX = fishArray[i].x;
            let fishY = fishArray[i].y;
            if ((fishX > this.x && fishX < this.x + this.width) || (fishX + fish.width > this.x && fishX + fish.width < this.x + this.width)) {
                if ((fishY > this.y && fishY < this.y + this.height) || (fishY + fish.height > this.y && fishY + fish.height < this.y + this.height)) {
                    fishArray.pop(fishArray[i]);
                    tuxGetsAFish();
                }
            }
        }

        if (!((currentEnemy / 2) >= this.x)) { // If currentEnemy x value is less than Tux's
            tuxBeingHurt = false; // Tux is no longer being hit
            currentEnemy = null;
            busy = false; // Allow for collision checking again
        }
    }
}

const tux = new Tux();
