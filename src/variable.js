/**
 * Scenario
 */
let scenario;
let scenarioImage;

/**
 * Character
 */
let character;
let characterImage;
let matrixCharacter = [
    [285, 0],
    [430, 0],
    [575, 0],
    [720, 0],
    [1008, 0],
];

/**
 * Enemies
 */
let coronaGreen;
let coronaGreenImage;
let coronaGreenMatrix = [
    [53, 600],
    [210, 600]
];

let coronaYellow;
let coronaYellowImage;
let coronaYellowMatrix = [
    [53,  450],
    [210, 450]
];

enemyIndex = 0;
let enemies = [];
let enemy;

/**
 * Game control
 */
let play = true;
let game;
let pointing;

/**
 * Sounds
 */
let gameAudio;
let jumpAudio;

/**
 * Config file
 */
let configFile;
let map = [];

/**
 * Initial Screen
 */
let initialScreenImage;
let initialScreen;

let currentScene = 'initialScreen';
let scenes = [];