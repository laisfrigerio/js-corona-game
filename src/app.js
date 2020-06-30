function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(10);

    /**
     * Initial Screen
     */
    initialScreen = new InitialScreen();

    /**
     * Game
     */
    game = new Game();

    scenes = {
        game,
        initialScreen
    };
}

function keyPressed() {
    game.keyPressed(key);
}

function draw() {
    scenes[currentScene].draw();
    // game.draw();
}