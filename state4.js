//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 4 for a different purpose than state1


demo.state4 = function(){};                   

demo.state4.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state4');
    },                 
    update: function(){},                
}