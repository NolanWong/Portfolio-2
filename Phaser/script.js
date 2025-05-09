// create Phaser.Game object assigned to global variable named game
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'my-game', { preload: preload, create: create, update: update });

// declare other global variables (for sprites, etc.)
var logo;
var hello1, hello2, hello3;
var spacebar;
var spinSound;
var scoreText, matchText, hstext;
var score = 100;
var hscore = 100;
var match2Sound, match3Sound;

// preload game assets - runs one time when webpage first loads
function preload() {
  game.load.image('phaser-logo', 'assets/phaser.png');
  game.load.spritesheet('hello', 'assets/hello-sprite.png', 64, 64);
  game.load.audio('spin', 'assets/spinner.mp3');
  game.load.audio('coin', 'assets/coin.wav');
  game.load.audio('pu', 'assets/power-up.wav');
}


// create game world - runs one time after preload finishes
function create() {
  //logo = game.add.image(400, 300, 'phaser-logo');
  //logo.anchor.setTo(0.5, 0.5);    
  game.stage.backgroundColor = '#6699ff';
  hello1 = game.add.sprite(game.world.centerX, game.world.centerY, 'hello');
  hello1.anchor.setTo(0.5, 0.5);
  hello2 = game.add.sprite(game.world.centerX - 100, game.world.centerY, 'hello');
  hello2.anchor.setTo(0.5, 0.5);
  hello3 = game.add.sprite(game.world.centerX + 100, game.world.centerY, 'hello');
  hello3.anchor.setTo(0.5, 0.5);


  spacebar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

  spinSound = game.add.audio('spin', 0.3);
  spinSound.loop = true;
  match2Sound = game.add.audio('coin', .5);
  match3Sound = game.add.audio('pu', .75);

  scoreText = game.add.text(game.world.centerX - 100, game.world.centerY + 80,
    '$' + score + '\n|Use Spacebar to Spin|',
    { font: 'Arial', fontSize: '20px', fontStyle: 'bold', fill: '#ffffff' });

  matchText = game.add.text(game.world.centerX + 100, game.world.centerY + 80,
    '',
    { font: 'Arial', fontSize: '20px', fontStyle: 'bold', fill: '#ffffff' });

  hstext = game.add.text(game.world.centerX - 100, game.world.centerY - 80,
    hscore,
    { font: 'Arial', fontSize: '20px', fontStyle: 'bold', fill: '#ffffff', color: '#000000' });

  scoreText.setShadow(1, 1, '#000000', 2);
  matchText.setShadow(1, 1, '#000000', 2);
  hstext.setShadow(1, 1, '#000000', 2);

}

// update game - runs repeatedly in loop after create finishes
function update() {
  if (score > 0) {
    if (spacebar.justDown) {
      spinSound.play();

    } else if (spacebar.isDown) {
      hello1.frame = Math.floor(Math.random() * 6);
      hello2.frame = Math.floor(Math.random() * 6);
      hello3.frame = Math.floor(Math.random() * 6);
    } else if (spacebar.justUp) {
      spinSound.stop()
      checkForMatch();
    }
  } else if (score <= 0) {
    matchText.text = "Better luck next time,\n you are out of money.\n Go home, gambling is bad\n for your bank account.";
  }
}

// add custom functions (for collisions, etc.) - only run when called
function checkForMatch() {
  if (hello1.frame == hello2.frame && hello2.frame == hello3.frame) {
    // all 3 match
    score = score + 100;
    match3Sound.play();
    matchText.fill = '#22ff00';
    matchText.text = 'Match Three +$100';
    game.stage.backgroundColor = '#0099ff';
    if (score > hscore) {
      hscore = score;
      game.stage.backgroundColor = '#00ffff';
    }
  }
  else if (hello1.frame == hello2.frame || hello2.frame == hello3.frame
    || hello1.frame == hello3.frame) {
    // any 2 match
    score = score + 20;
    match2Sound.play();
    matchText.fill = '#00ff00';
    matchText.text = 'Match Two +$20';
    game.stage.backgroundColor = '#ffff00';
    if (score > hscore) {
      hscore = score;
      game.stage.backgroundColor = '#00ffff';
    }
  }
  else {
    // none match
    score = score - 10;
    matchText.fill = '#ff0000';
    matchText.text = 'None -$10';
    game.stage.backgroundColor = '#660000';
  }
  scoreText.text = "$" + score;
}
