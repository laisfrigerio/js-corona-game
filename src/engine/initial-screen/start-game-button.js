class StartGameButton {
    constructor() {
        this.text = "Iniciar";
        this.x =  width/2;
        this.y = height;
        this.element = createButton(this.text);
        this.element.addClass("start-game");
    }

    draw() {
        this.element.position(this.x, this.y);
        this.element.mousePressed(() => {
            game.init();
            playSound();
            currentScene = 'game';
            this.element.remove();
        });
    }
}