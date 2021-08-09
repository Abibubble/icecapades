class Tux {
    constructor() {
        // Set Tux values
        this.x = 150;
        this.y = floorHeight;
        this.vy = 0;
        this.originalWidth = 154;
        this.originalHeight = 138;
        this.width = this.originalWidth + 5;
        this.height = this.originalHeight + 10;
        this.weight = 0.7;
        this.frameX = 0;
        this.jumping = true;
        this.sliding = false;
        this.charSlideWidth = 40;
        this.charSlideheight = 20;
        this.hitBoxX = this.x + 15;
        this.hitBoxY = this.y + 6;
        this.hitBoxWidth = this.width * .7;
        this.hitBoxHeight = this.height * .9;
        this.dead = false;
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
        if (arrowUpPressed && !this.jumping && !this.dead && !endGame) {
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
        if (arrowDownPressed && !this.sliding && !this.jumping && !this.dead && !endGame) {
            this.slide();
            gameSpeed *= 1.5;
            if (audio == 'on') {
                slideAudio.play();
            }
        }

        if (arrowDownPressed && arrowUpPressed && !endGame) {
            this.sliding = false;
            playerImage.src = "static/animations/penguin/walk_spritesheet.png";
            this.height = this.originalHeight;
            this.width = this.originalWidth;
            if (score <= 75) {
                gameSpeed = 6;
                this.weight = .7;
            } else if (66< score && score <= 120) {
                gameSpeed = 9;
                this.weight = .8;
            } else if (120 < score && score < 150) {
                gameSpeed = 12;
                this.weight = .9;
            }
        }

        // Once let go of arrow down, set hitbox back to original position
        if (!arrowDownPressed && !endGame) {
            this.sliding = false;
            playerImage.src = "static/animations/penguin/walk_spritesheet.png";
            this.height = this.originalHeight;
            this.width = this.originalWidth;
            // increase game speed as you progress
            // weight increased to speed up fall rate
            if (score <= 75) {
                gameSpeed = 6;
                this.weight = .7;
            } else if (66< score && score <= 120) {
                gameSpeed = 9;
                this.weight = .8;
            } else if (120 < score && score < 150) {
                gameSpeed = 12;
                this.weight = .9;
            }
        }

        // If not jumping or sliding already, allow jump animation
        if (this.jumping && !this.sliding) {
            this.jumpAnim();
        }

        // If a collision isn't already being checked, and if Tux isn't already being hurt
        if (!busy) {
            this.collision(); // Check for collisions
        }

        // if firing and has ammo, fire
        if ((fire) && (currentAmmo > 0)) {
            snowballArray.unshift(new Snowball());
            currentAmmo--;
            pushAmmo();
            if (audio == 'on') {
                throwSnowballAudio.play();
            }
            fire = false;
        } else {
            fire = false;
        }

        //update hit box area
        if (!this.sliding) {
            this.hitBoxX = this.x + 15;
            this.hitBoxY = this.y + 6;
            this.hitBoxWidth = this.width * .7;
            this.hitBoxHeight = this.height * .9;
        }
    }

    draw() {
        // Draw Tux
        if (this.y > canvas.height - this.height - floorHeight && !this.sliding && !this.dead && !endGame) {
            playerImage.src = "static/animations/penguin/walk_spritesheet.png";
            this.originalWidth = 154;
            this.frameX = frameX;
        }

        // Stop frame rate if in boss battle
        if (score >= 150 && !this.jumping && !this.sliding && !this.dead) {
            this.frameX = 1;
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
        if (!this.sliding){
            playerImage.src = "static/animations/penguin/penguin_jump@2x.png";
        }
    }

    slide() {
        this.originalWidth = 144;
        this.width = this.width + 20;
        this.frameX = 0;
        this.hitBoxX = this.x + 15;
        this.hitBoxY = this.y + 35;
        this.hitBoxWidth = this.width * .86;
        this.hitBoxHeight = this.height * .7;
        playerImage.src = "static/animations/penguin/penguin_slide02@2x.png";
        this.sliding = true;
    }

    die() {
        this.originalWidth = 144;
        this.width = this.width + 20;
        this.frameX = 0;
        playerImage.src = "static/animations/penguin/penguin_die04@2x.png";
        gameSpeed = 0;
        this.dead = true;
        endGame = true;
        tuxIsDead = true;
        flakeSpeed = 0;
    }

    collision() { // Tux is hit by an enemy or projectile, or collects a projectile
        let currentEnemy = null; // Variable for enemy that's currently hurting Tux
        busy = true; // Checking for collision

        for (let i = 0; i < slugsArray.length; i++) {
            let collideWith = slugsArray[i]; // Slug instance
            if ((collideWith.hitBoxX > this.hitBoxX &&
                    collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
                (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                    collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.hitBoxY > this.hitBoxY &&
                        collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                    (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                        collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    slugsArray.splice(i, 1);
                    tuxIsHit(10); // Drop health by 10
                }
            }
        }

        for (let i = 0; i < wormsArray.length; i++) {
            let collideWith = wormsArray[i]; //  Worm instance
            if ((collideWith.hitBoxX > this.hitBoxX &&
                    collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
                (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                    collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.hitBoxY > this.hitBoxY &&
                        collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                    (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                        collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    wormsArray.splice(i, 1); // Remove collided worm from array
                    tuxIsHit(15); // Drop health by 15
                }
            }
        }

        for (let i = 0; i < carrotArray.length; i++) {
            let collideWith = carrotArray[i]; // Carrot instance
            if (!collideWith.hit) {
                if ((collideWith.hitBoxX > this.hitBoxX &&
                        collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
                    (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                        collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
                    if ((collideWith.hitBoxY > this.hitBoxY &&
                            collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                        (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                            collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                        collideWith.hit = true;
                        tuxIsHit(10); // Drop health by 10
                    }
                }
            }
            if (collideWith.x <= this.x + this.width / 2 &&
                collideWith.hit === true) {
                carrotArray.splice(i, 1); // Remove collided carrot from array
            }
        }

        for (let i = 0; i < flakeArray.length; i++) { // See above
            let collideWith = flakeArray[i];
            if ((collideWith.hitBoxX > this.hitBoxX &&
                    collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
                (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                    collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.hitBoxY > this.hitBoxY &&
                        collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                    (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                        collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    flakeArray.splice(i, 1); // Remove collided snowflake from array
                    tuxGetsASnowflake(); // Add to snowballs
                }
            }
        }

        for (let i = 0; i < fishArray.length; i++) { // See above
            let collideWith = fishArray[i];
            if ((collideWith.hitBoxX > this.hitBoxX &&
                    collideWith.hitBoxX < this.hitBoxX + this.hitBoxWidth) ||
                (collideWith.hitBoxX + collideWith.hitBoxWidth > this.hitBoxX &&
                    collideWith.hitBoxX + collideWith.hitBoxWidth < this.hitBoxX + this.hitBoxWidth)) {
                if ((collideWith.hitBoxY > this.hitBoxY &&
                        collideWith.hitBoxY < this.hitBoxY + this.hitBoxHeight) ||
                    (collideWith.hitBoxY + collideWith.hitBoxHeight > this.hitBoxY &&
                        collideWith.hitBoxY + collideWith.hitBoxHeight < this.hitBoxY + this.hitBoxHeight)) {
                    fishArray.splice(i, 1);// Remove collided fish from array
                    tuxGetsAFish(); // Add to health
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