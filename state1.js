//a state is any state that your game is in.  Beggining middle pause menu etc


var demo = {}                       //blank object - name of the game 

demo.state1 = function(){};                   // Adding a state1 property to demo object with a callback function


demo.state1.prototype = {                    //prototype adds methods to an object that already exists
    preload: function(){},
    create: function(){},
    update: function(){},
};