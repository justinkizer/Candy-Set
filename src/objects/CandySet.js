import Collection from 'objects/Collection';

class CandySet extends Collection {
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

    addCandy(candy, coords) {
        if (contains(candy)) {
            return false;
        }
        return super.AddCandy(candy, coords);
    }
}

export default CandySet;