import Candy from 'objects/Candy';

class Level extends Phaser.State {
    preload() {}

    create() {
        let center = { x: this.game.world.centerX, y: this.game.world.centerY }

        new Candy(this.game, 'circle', 'red', center.x, center.y);
        new Candy(this.game, 'circle', 'blue', this.game.world.randomX, this.game.world.randomY);
        new Candy(this.game, 'circle', 'orange', this.game.world.randomX, this.game.world.randomY);
        new Candy(this.game, 'circle', 'blue', this.game.world.randomX, this.game.world.randomY);
        new Candy(this.game, 'circle', 'orange', this.game.world.randomX, this.game.world.randomY);
    }

}

export default Level;