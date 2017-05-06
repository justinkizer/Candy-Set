var colorMap = function(color) {
    switch (color) {
        case 'red':
            return 0;
        case 'orange':
            return 1;
        case 'blue':
            return 2;
    }
};

class Candy extends Phaser.Sprite {
    constructor(game, type, color, x, y) {
        super(game, x, y, type, colorMap(color));
        this.type = type;
        this.color = color;
        game.add.existing(this);

        this.inputEnabled = true;
        this.input.enableDrag();
    }

    isEqual(candy) {
        return (this.type === candy.type) && (this.color === candy.color);
    }
}

export default Candy;