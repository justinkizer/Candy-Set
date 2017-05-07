class Preload extends Phaser.State {
    preload() {
        this.game.load.spritesheet('circle', './images/circle.png', 20, 20, 3);
        this.game.load.spritesheet('candyCorn', './images/candyCorn.png', 58, 99, 3);
        this.game.load.spritesheet('gummyBear', './images/gummyBear.png', 57, 101, 3);
        this.game.load.spritesheet('jellyBean', './images/jellyBean.png', 96, 68, 3);
        this.game.load.spritesheet('jollyRancher', './images/jollyRancher.png', 96, 39, 3);
        this.game.load.spritesheet('peppermint', './images/peppermint.png', 96, 100, 3);
        this.game.load.spritesheet('peppermintSquare', './images/peppermintSquare.png', 68, 87, 3);
        this.game.load.spritesheet('box', './images/box.png', 380, 380, 1);
        this.game.load.image('background', './images/background.png');
    }

    create() {
        this.game.state.start("Level");
    }

}

export default Preload;