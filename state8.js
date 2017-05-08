//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 2 for a different purpose than state1


demo.state8 = function(){};                   

demo.state8.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state8');
    },                 
    update: function(){},                
}