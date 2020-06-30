class InitialScreen {
    constructor() {
        this.btn = new StartGameButton("Iniciar", width/2, height/2);
    }

    draw() {
        this._showBackgroundImage();
        this._text();
        this.btn.draw();
    }

    _showBackgroundImage() {
        image(initialScreenImage, 0, 0, width, height);
    }

    _text() {
        //textFont(initialScreenFont);
        //textAlign(CENTER);
    }
}