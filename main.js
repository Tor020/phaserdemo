
        
var game = new Phaser.Game(1500, 1000, Phaser.AUTO);  //Takes (width, height, game renderer) arguments (either webgl or canvas but phaser can decide for us with auto)
game.state.add('state0', demo.state0);
game.state.add('state1', demo.state1); // this adds a state to the game this is the first state that's run when the game loads the 'state1' in quotation is a key of the state
game.state.add('state2', demo.state2);
game.state.add('state3', demo.state3);
game.state.add('state4', demo.state4);
game.state.add('state5', demo.state5);
game.state.add('state6', demo.state6);
game.state.add('state7', demo.state7);
game.state.add('state8', demo.state8);
game.state.add('state9', demo.state9);


game.state.start('state2'); //here i'm calling the key to start the game state