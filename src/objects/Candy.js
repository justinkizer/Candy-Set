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
    constructor(game, type, color, x, y, size) {
        super(game, x, y, type, colorMap(color));
        this.anchor.setTo(0.5, 0.5);
        this.type = type;
        this.color = color;
        game.add.existing(this);
        if (type === 'jollyRancher') {
            this.angle += 45;
        }

        var max = Math.max(this.width, this.height);
        var scale = size / max;
        this.x += size / 2;
        this.y += size / 2;

        this.scale.setTo(scale, scale);

        this.inputEnabled = true;
        this.input.enableDrag(true, true);
    }

    isEqual(candy) {
        return (this.type === candy.type) && (this.color === candy.color);
    }
}

export default Candy;