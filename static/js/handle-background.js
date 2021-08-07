const background = new Image();
background.src = "static/background/background.png";
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height,
};
function handleBackground() {
    if (BG.x1 <= -BG.width + gameSpeed) {
        BG.x1 = BG.width;
    } else {
        BG.x1 -= gameSpeed;
    }
    if (BG.x2 <= -BG.width + gameSpeed) {
        BG.x2 = BG.width;
    } else {
        BG.x2 -= gameSpeed;
    }
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}
