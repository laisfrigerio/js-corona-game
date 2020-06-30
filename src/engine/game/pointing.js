class Pointing {
    constructor() {
        this.total = 0;
    }

    draw() {
        fill('#fff');
        text(parseInt(this.total), width -30, 50);
        textAlign(RIGHT);
        textSize(50);
    }

    add() {
        this.total = this.total + 0.2;
    }
}