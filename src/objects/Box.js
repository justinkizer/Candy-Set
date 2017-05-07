import Candy from 'objects/Candy';
import CandySet from 'objects/CandySet';

class Box extends CandySet {

    constructor(game, x, y, height, width, preFilled, size) {
        var sprite = game.add.sprite(x, y, 'box');
        sprite.height = height * size + 30;
        sprite.width = width * size + 30;
        var stuck = [];
        var candies = Array(height).fill().map(() => []);

        for (var candy of preFilled) {
            candies[candy.coord.i][candy.coord.j] = new Candy(game, candy.type, candy.color, x + 15 + candy.coord.j * size, y + 15 + candy.coord.i * size, size);
            if (candy.stuck) {
                stuck.push(candy.coords);
            }
        }

        super(game, width, height, candies);

        this.x = x;
        this.y = y;
        this.stuck = stuck;
        //this.game.stage.addChild(this);
    }

    isStuck(pos) {
        for (var coord of stuck) {
            if (coord.i === pos.i && coord.j === pos.j) {
                return true;
            }
        }
        return false;
    }

    removeCandy(coords) {
        if (isStuck(coords)) {
            return false;
        }
        return super.removeCandy(candy, coords);
    }
}

export default Box;