function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(10);

    /**
     * Scenario
     */
    scenario = new Scenario(scenarioImage, 30);
    character = new Character(matrixCharacter, characterImage, -30, 50, 170, 200, 170, 210);
    enemyGreen = new Enemy(enemyGreenMatrix, enemyGreen, width - 50, 10, 200, 200, 200, 200, 15);
}


function keyPressed() {}

function draw() {
    scenario.draw();
    character.draw(play);
    enemyGreen.draw(play);
    
    scenario.move();
    enemyGreen.move();
}