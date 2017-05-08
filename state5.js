//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 5 for a different purpose than state1


demo.state5 = function(){};                   

demo.state5.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state5');
    },                 
    update: function(){},                
}