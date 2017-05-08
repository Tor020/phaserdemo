//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 6 for a different purpose than state1


demo.state6 = function(){};                   

demo.state6.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state6');
    },                 
    update: function(){},                
}