//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 2 for a different purpose than state1


demo.state3 = function(){};                   

demo.state3.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state3');
    },                 
    update: function(){},                
}