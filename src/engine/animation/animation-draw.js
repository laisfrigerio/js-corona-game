class AnimationDraw {
    constructor(matrix, image, x, yRange, widthElement, heightElement, widthSprite, heightSprite, velocity) {
        this.matrix = matrix;
        this.image = image;
        this.width = widthElement;
        this.height = heightElement;
        this.yRange = yRange;
        this.x = x;
        this.y = height - this.height - yRange;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.currentPostion = 0;
        this.velocity = velocity;
    }

    draw (play) {
        image(
            this.image, 
            this.x, 
            this.y, 
            this.width, 
            this.height, 
            this.matrix[this.currentPostion][0], 
            this.matrix[this.currentPostion][1],
             this.widthSprite, 
             this.heightSprite
        );
        if (play) {
            this.animate();
        }
    }

    // animate() {
    //     // this.currentPostion = 8;
    //     this.currentPostion++;
    //     if (this.currentPostion >= (this.matrix.length - 1)) {
    //         this.currentPostion = 0;
    //     }
    // }

    animate() {
        // this.currentPostion = 1;
        this.currentPostion++;
        if (this.currentPostion > (this.matrix.length - 1)) {
            this.currentPostion = 0;
        }
    }
}
