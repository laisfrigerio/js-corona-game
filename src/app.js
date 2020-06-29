function setup() {
    createCanvas(windowWidth - 100, windowHeight - 200);
    frameRate(100);

    /**
     * Scenario
     */
    scenario = new Scenario(scenarioImage, 3);
}


function keyPressed() {}

function draw() {
    scenario.draw();
}