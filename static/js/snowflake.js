let flakeArray = [];

class Snowflake {
  constructor() {
    this.originalHeight = 64;
    this.originalWidth = 64;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    // Random start position of snowflake
    this.x = (tux.x + tux.width - this.width / 2) + Math.random() * 500;
    this.y = -20;
    this.collected = false;
    this.image = new Image();
    this.image.src = "static/animations/projectiles/object_snowflake.png";
    this.weight = .4;
    this.vy = 0;
    this.hitBoxWidth = this.width * .73;
    this.hitBoxHeight = this.height * .7;
    this.hitBoxX = this.x + this.width * .13;
    this.hitBoxY = this.y + this.height * .15;
  }

  draw() {
    ctx.drawImage(
      this.image,
      0,
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
    this.x = this.x - .8; // Slowly move left
    this.vy += this.weight;
    this.vy *= 0.9;
    this.y += this.vy;
    this.hitBoxWidth = this.width * .73;
    this.hitBoxHeight = this.height * .7;
    this.hitBoxX = this.x + this.width * .13;
    this.hitBoxY = this.y + this.height * .15;

    if (this.y > canvas.height - tux.height * 3) {
      this.x = this.x -= flakeSpeed * 2; // Fast left
      this.hitBoxX = this.x + this.width * .15;
    }

    this.draw();

    if (this.collected) {
      this.width = 0;
      this.height = 0;
    }
  }
}

// Create snowflakes array - max 5
const handleSnowflake = () => {
  if (!endGame) {
    if (gameFrame % 300 === 0) {
      flakeArray.unshift(new Snowflake());
    }

    for (let i = 0; i < flakeArray.length; i++) {
      flakeArray[i].update();
    }

    if (flakeArray.length > 5) {
      flakeArray.pop(flakeArray[0]);
    }
  }
};

const snowflake = new Snowflake();