function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(10);
    game = new Game();
    game.init();
}


function keyPressed() {}

function draw() {
    game.draw();
}