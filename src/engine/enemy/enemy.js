class Enemy extends AnimationDraw {

    constructor(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity) {
        super(matrix, image, x, yRange, widthEnemy, heightEnemy, widthSprite, heightSprite, velocity);
    }

    move() {
        this.x -= this.velocity;
        if (this.x < -this.width) {
            enemyIndex++;
            this.x = width;

            if (enemyIndex > (enemies.length - 1)) {
                enemyIndex = 0;
            }
        }
    }
}
