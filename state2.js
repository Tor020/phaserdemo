
var demo = {}  
var centX = 1500 / 2;
var centY = 1000 / 2;
var frenk;
var speed = 4;
demo.state2 = function(){};                   

demo.state2.prototype = {                    
    preload: function(){
        game.load.image('frenk', 'assets/sprites/frenk.png') 
    },                  
    create: function()
    { 
    addChangeStateEventListeners();
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
    frenk = game.add.sprite(centX, centY, 'frenk')  
    frenk.anchor.setTo(0.5, 0.5); 
    game.stage.backgroundColor = '#80ff80';
    console.log('state2');
    },
    
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.D) || (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)))
        {   frenk.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.A) || (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))){
            frenk.x -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.W) || (game.input.keyboard.isDown(Phaser.Keyboard.UP) )){  
            frenk.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.S) || (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))){
            frenk.y += speed;
        }
    },                
}



function changeState (i, stateNum){

    game.state.start('state' + stateNum);
    
}

function addKeyCallback(key, fn, args) 
{
    game.input.keyboard.addKey(key).onDown.add(fn, null,null, args)  
}

function addChangeStateEventListeners(){
     addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
     addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
     addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
     addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
     addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
     addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
     addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
     addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
     addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
     addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}