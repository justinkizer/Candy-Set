class Boot extends Phaser.State {
    preload() {}

    create() {
        this.game.state.start("Preload");
    }

}

export default Boot;