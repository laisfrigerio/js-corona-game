function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(10);

    /**
     * Scenario
     */
    scenario = new Scenario(scenarioImage, 30);
    character = new Character(matrixCharacter, characterImage, 10, 50, 130, 210, 130, 210);
    enemyGreen = new Enemy(enemyGreenMatrix, enemyGreen, width - 50, 0, 155, 155, 155, 155, 4);
}


function keyPressed() {}

function draw() {
    scenario.draw();
    character.draw(play);
    enemyGreen.draw(play);
    if (play) {
        scenario.move();
        enemyGreen.move();
    }
}