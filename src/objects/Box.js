class Box extends Set {

    constructor(game, width, height, candies, stuck) {
        this.stuck = stuck;
        super(game, width, height, candies);
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

    addCandy(candy, coords) {
        if (isStuck(coords)) {
            return false;
        }
        return super(candy, coords);
    }

    removeCandy(coords) {
        if (isStuck(coords)) {
            return false;
        }
        return super(candy, coords);
    }
}

export default Set;