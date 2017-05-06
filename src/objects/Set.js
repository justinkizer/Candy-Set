class Set {

    constructor(game, width, height, candies) {
        this.width = width;
        this.height = height;
        this.candies = candies;
        //super(game);
        //this.game.stage.addChild(this);
    }

    contains(candy) {
        for (var row of this.candies) {
            for (var el of row) {
                if (el.isEqual(candy)) {
                    return true;
                }
            }
        }
        return false;
    }

    isSubset(set) {
        for (var row of this.candies) {
            for (var el of row) {
                if (!set.contains(el)) {
                    return false;
                }
            }
        }
        return true;
    }

    isSuperset(set) {
        return set.isSubset(this);
    }

    isEqual(set) {
        return this.isSubset(set) && this.isSuperset(set);
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
        if (contains(candy)) {
            return false;
        }
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

export default Set;