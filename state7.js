//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 7 for a different purpose than state1


demo.state7 = function(){};                   

demo.state7.prototype = {                    
    preload: function(){},                  
    create: function()
    { addChangeStateEventListeners();
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state7');
    },                 
    update: function(){},                
}