//a state is any state that your game is in.  Beggining middle pause menu etc
//this is state 2 for a different purpose than state1


demo.state9 = function(){};                   

demo.state9.prototype = {                    
    preload: function(){},                  
    create: function()
    { 
    
    game.stage.backgroundColor = '#80ff80';
    console.log('state9');
    },                 
    update: function(){},                
}