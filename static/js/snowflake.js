const flakeArray = [];

class Snowflake {
  constructor() {
    this.originalHeight = 64;
    this.originalWidth = 64;
    this.width = this.originalWidth;
    this.height = this.originalHeight;
    // random start position of snowflake
    this.x = (tux.x + tux.width - this.width / 2) + Math.random() * 500;
    this.y = -20;
    this.collected = false;
    this.image = new Image ();
    this.image.src = "static/background/object_snowflake.png";
    this.weight = .4;
    this.vy = 0;
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
    this.x = this.x - .8; //slowly move left
    this.vy += this.weight;
    this.vy *= 0.9; 
    this.y += this.vy;
      if (this.y > canvas.height - tux.height * 3) {
      this.x = this.x -= flakeSpeed * 2; // fast left
    }
    this.draw();
    // ?? hide image in a better way ??
    if (this.collected) {
      this.width = 0;
      this.height = 0;
    }
  }
}

/**
 * create snowflakes
 * - array max 5
 */
const handleSnowflake = () => {
  if (gameFrame % 300 === 0) {
      flakeArray.unshift(new Snowflake());
  }
  for (let i = 0; i < flakeArray.length; i++) {
      flakeArray[i].update();
  }
  if (flakeArray.length > 5) {
      flakeArray.pop(flakeArray[0]);
  }
};

const snowflake = new Snowflake();
