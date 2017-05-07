
        
var game = new Phaser.Game(600, 400, Phaser.AUTO);  //Takes width height and game renderer arguments (either webgl or canvas but phaser can decide for us with auto)
game.state.add('state1', demo.state1); // this adds a state to the game this is the first state that's run when the game loads the 'state1' in quotation is a key of the state
game.state.start('state1'); //here i'm calling the key to start the game state