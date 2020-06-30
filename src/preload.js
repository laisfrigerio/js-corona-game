function preload() {
    scenarioImage = loadImage("assets/images/scenarios/step-one.png");
    characterImage = loadImage("assets/images/characters/nurse-girl.png");
    
    coronaGreenImage = loadImage("assets/images/characters/nurse-girl.png");
    coronaYellowImage = loadImage("assets/images/characters/nurse-girl.png");

    initialScreenImage = loadImage("assets/images/initial-screen/telainicial_corona.png");

    gameAudio = loadSound("assets/audios/game-track.mp3");
    jumpAudio = loadSound("assets/audios/jumping-sound.mp3");

    healthImage = loadImage("assets/images/health/heart.png");
    configFile = loadJSON("assets/config.json");
}