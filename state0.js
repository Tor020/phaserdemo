//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 2 for a different purpose than state1
var demo = {}  
var centX = 1500 / 2;
var centY = 1000 / 2;
var frenk;
demo.state0 = function(){};                   

demo.state0.prototype = {                    
    preload: function(){
        game.load.image('frenk', 'assets/sprites/frenk.png') //('imagekey', 'filelocation')
    },                  
    create: function()
    {  // game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null,null, 1) //phaser calls the change State function defined below and passes it two null arguements and 1 argument to be paseed with changeState
    addChangeStateEventListeners();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; //this allows the game to resize to the size of the window that it's running in. it will resize across all states 
    var frenk = game.add.sprite(centX, centY, 'frenk')  //adds a sprite to the game work at the location. Here the location is the center of the game world (half the width and height)
    frenk.anchor.setTo(0.5, 0.5); // equivalent tofrenk.anchor.x = 0.5; frenk.anchor.y = 0.5;
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state0');
    },
    
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){  //arguments here represent a keycode 
            frenk.x += 4;
        }
        
    },                
       
}



function changeState (i, stateNum){
    //console.log(i);
    game.state.start('state' + stateNum);
    
}

function addKeyCallback(key, fn, args) //the arguements are the key that you're pressing down, the function that is called, and the arguments passed to that function
{
    game.input.keyboard.addKey(key).onDown.add(fn, null,null, args)  
}

function addChangeStateEventListeners(){
     addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
     addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
     addKeyCallback(Phaser.Keyboard.TWO,changeState, 2);
     addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
     addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
     addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
     addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
     addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
     addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
     addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}