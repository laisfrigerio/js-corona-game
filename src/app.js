function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(4);

    /**
     * Scenario
     */
    scenario = new Scenario(scenarioImage, 1);
    character = new Character(matrixCharacter, characterImage, -30, 50, 170, 200, 170, 210);
}


function keyPressed() {}

function draw() {
    scenario.draw();
    character.draw(play);
}