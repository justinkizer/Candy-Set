class Collection {

    constructor(game, width, height, candies) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.candies = candies;
        //this.game.stage.addChild(this);
    }

    get(coords) {
        return candies[coords.i][coords.j];
    }

    put(candy, coords) {
        candies[coords.i][coords.j] = candy;
    }

    take(coords) {
        var candy = get(coords);
        put(null, coords);
        return candy;
    }

    addCandy(candy, coords) {
        if (!get(coords)) {
            put(candy, coords);
            return true;
        } else {
            for (var i = 0; i++; i < this.candies.length) {
                for (var j = 0; j++; j < this.candies[i].length) {
                    var pos = { i: i, j: j };
                    if (!get(pos)) {
                        put(candy, pos);
                        return true;
                    }
                }
            }
        }

        return false;
    }

    removeCandy(coords) {
        return take(coords);
    }
}

export default Collection;