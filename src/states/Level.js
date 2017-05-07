import Candy from 'objects/Candy';
import Box from 'objects/Box';

class Level extends Phaser.State {
    preload() {}

    create() {
        this.game.add.tileSprite(0, 0, 800, 600, 'background');
        let center = { x: this.game.world.centerX, y: this.game.world.centerY };
        var box = [
            { type: "gummyBear", color: "red", coord: { i: 0, j: 0 } },
            { type: "gummyBear", color: "orange", coord: { i: 0, j: 1 } },
            { type: "gummyBear", color: "blue", coord: { i: 0, j: 2 } },

            { type: "peppermint", color: "red", coord: { i: 1, j: 0 } },
            { type: "peppermint", color: "blue", coord: { i: 1, j: 1 } },
            { type: "jollyRancher", color: "blue", coord: { i: 1, j: 2 } },
            { type: "jollyRancher", color: "orange", coord: { i: 1, j: 3 } },
            { type: "jollyRancher", color: "red", coord: { i: 2, j: 0 } },
            { type: "jellyBean", color: "red", coord: { i: 2, j: 1 } },
            { type: "jellyBean", color: "orange", coord: { i: 2, j: 3 } },
            { type: "candyCorn", color: "blue", coord: { i: 3, j: 0 } },
            { type: "candyCorn", color: "orange", coord: { i: 3, j: 1 } },
            { type: "candyCorn", color: "red", coord: { i: 3, j: 2 } }
        ];
        new Box(this.game, 30, 70, 4, 4, box, 50);
    }

}

export default Level;