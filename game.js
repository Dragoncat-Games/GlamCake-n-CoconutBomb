
// The main scene thing for the game
let game_scene = new Phaser.Scene('Game');
let game_width = 1080;
let game_height = 720;

// Load up some asset files for the game
game_scene.preload = function() {
  let scene = this; // fuck this
  // load images
  scene.load.image('background', 'backgrounds/white-room.png');

  scene.load.image('player', 'characters/derpmaster.png');
};

// executed once after assets are loaded
game_scene.create = function() {
  let scene = this; // fuck this

  // background
  let bg = scene.add.sprite(0, 0, 'background');

  // change origin to top-left of the sprite
  bg.setOrigin(0, 0);

  // the player
  scene.player = scene.add.sprite(120, scene.sys.game.config.height/2, 'player');
  // scale down
  scene.player.setScale(0.5);

  scene.player.setAlpha(0);

  texto_boxo(scene, "moo");

  scene.tweens.add({
    targets: scene.player,
    alpha: { value: 1, duration: 500, delay: 0 },
    yoyo: false,
    loop: 20
  });
};

function texto_boxo(scene, text) {
  // var graphics = scene.add.graphics();

  0xaabbcc // fill color
  0.50 // alpha

  // var text_rect = new Phaser.Geom.Rectangle(0, // x
  //                                      game_height*(1/4), // y 3/4ths of the way down
  //                                      game_width, // width
  //                                      game_height*(3/4)); // height


  // graphics.clear();
  // graphics.fillRectShape(text_rect);

  var god_damn_rectangle = scene.add.rectangle(0,
                                               game_height*(1/4), // y 3/4ths of the way down
                                               game_width, // width
                                               game_height*(3/4),
                                               0x123456,
                                               0.5);


  console.log("i got rekt! x: " + text_rect.width + ", y: " + text_rect.height);

};

let config = {
  type: Phaser.AUTO,
  width: game_width,
  height: game_height,
  scene: game_scene
};

let game = new Phaser.Game(config);

function play_game() {
  return console.log("yay a game!");
}


// Some utility math functions...
Math.TAU = Math.PI * 2;

function deg_to_rad(deg) {
  return (Math.TAU / 360) * deg
}
