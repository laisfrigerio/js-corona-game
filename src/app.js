function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(10);
    game = new Game();
    game.init();
    playSound();
}

function keyPressed() {
    game.keyPressed(key);
}

function draw() {
    game.draw();
}