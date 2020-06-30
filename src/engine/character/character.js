class Character extends AnimationDraw {
    constructor(matrix, image, x, yRange, widthCharacter, heightCharacter, widthSprite, heightSprite) {
        super(matrix, image, x, yRange, widthCharacter, heightCharacter, widthSprite, heightSprite, 1);
        this.yInital = height - this.height - yRange;
        this.y = this.yInital;
        this.jumpVelocity = 100;
        this.gravity = 8;
        this.skips = 0;
        this.isInvincible = false;
    }

    applyGravity () {
        this.y = this.y + this.jumpVelocity;
        this.jumpVelocity = this.jumpVelocity + this.gravity;

        if (this.y > this.yInital) {
            this.y = this.yInital;
            this.skips = 0;
        }
    }

    checkCollision(enemy) {
        if (this.isInvincible) return false;

        const precision = .65;
        return collideRectRect(
            this.x, 
            this.y, 
            this.width * precision, 
            this.height * precision, 
            enemy.x, 
            enemy.y, 
            enemy.width * precision, 
            enemy.height * precision
        );
    }

    jump () {
        if (this.skips < 2) {
            this.jumpVelocity = -35;
            this.skips++;
        }
    }
}