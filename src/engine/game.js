class Game {
    constructor() {}

    draw() {
        enemy = enemies[enemyIndex];
        scenario.draw();
        character.draw(play);
        enemy.draw(play);
        if (play) {
            scenario.move();
            enemy.move();
            character.applyGravity();

            if (character.checkCollision(enemy)) {
                console.log('collision');
            }
        }
    }

    init() {
        /**
     * Scenario
     */
        scenario = new Scenario(scenarioImage, 30);
        character = new Character(matrixCharacter, characterImage, 10, 50, 130, 210, 130, 210);
        coronaGreen = new Enemy(coronaGreenMatrix, coronaGreenImage, width - 50, 30, 155, 155, 155, 155, 30);
        coronaYellow = new Enemy(coronaYellowMatrix, coronaYellowImage, width - 50, 50, 155, 155, 155, 155, 30);
        enemies = [coronaYellow, coronaGreen, coronaGreen, coronaYellow, coronaGreen, coronaYellow, coronaYellow];
    }

    keyPressed(key) {
        if (key === 'ArrowUp') {
            character.jump();
            jumpAudio.play();
        }
    }
}