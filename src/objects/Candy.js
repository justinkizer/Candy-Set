class Candy {

    constructor(game, type, color) {
        this.type = type;
        this.color = color;

        //super(game);
        //this.game.stage.addChild(this);
    }

    isEqual(candy) {
        return (this.type === candy.type) && (this.color === candy.color);
    }

}

export default Candy;