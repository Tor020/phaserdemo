//a state is any state that your game is in.  Beggining middle pause menu etc


var demo = {}                       //blank object - name of the game this is the core game object and only needs to be made one time

demo.state1 = function(){};                   // Adding a state1 property to demo object with a callback function


demo.state1.prototype = {                    //prototype adds methods to an object that already exists
    preload: function(){},                  //preload is mostly used for loading images preload function is only called one time at the beggining of the game state
    create: function(){                 //create function is similar to the preload function but instead of loading images it sets all of the initial values that are going to be used in your game state.
        game.stage.backgroundColor = '#DDDDDD'; 
        console.log('state1');
    },                   
    update: function(){},                   //checks to see what is happening in the game based on the inputs of the user
};