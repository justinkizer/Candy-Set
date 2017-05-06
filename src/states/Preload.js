class Preload extends Phaser.State {
    preload() {
        this.game.load.spritesheet('circle', './images/circle.png', 20, 20, 3);
    }

    create() {
        this.game.state.start("Level");
    }

}

export default Preload;