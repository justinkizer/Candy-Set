/* global Phaser */

import Level from 'states/Level';
import Boot from 'states/Boot';
import Preload from 'states/Preload';

class Game extends Phaser.Game {

    constructor() {
        super(800, 600, Phaser.AUTO, 'content', null);
        this.state.add('Boot', Boot, false);
        this.state.add('Preload', Preload, false);
        this.state.add('Level', Level, false);
        this.state.start('Boot');
    }
}

new Game();