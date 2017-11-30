//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// var input =  $("#input").val();


//FUNCTIONS

// DOCUMENT READY FUNCTION
$(document).ready(function(){
        $("input").keydown(function(event){
        if(event.keyCode == 13){
        $("button").click();
  }
});
        $("button").click(function(){
                var pokemon = ["row","pop","lit"];
                var RPL = Math.floor((Math.random()*3));
                var comchoice = pokemon[RPL]
                console.log(comchoice);
                var input = $("#input").val().toLowerCase();
                console.log("I've been found");
//Litten                
        if(input === "lit" && comchoice === "lit"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input === "lit" && comchoice === "pop"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input === "lit" && comchoice === "row"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/win.png");
//Litten                
        }else if(input === "pop" && comchoice === "lit"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input === "pop" && comchoice === "pop"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input === "pop" && comchoice === "row"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/lose.png");
//Rowlet              
        }else if(input === "row" && comchoice === "lit"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input === "row" && comchoice === "pop"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input === "row" && comchoice === "row"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/tie.png");
//Extra
        }else if(input === "wisely"){
                alert("Didn't mean it literally, but you get the prize of nothing anyway");
        }else if(input === "ultra"){
                $("#gen7start").attr("src", "https://www.pokemon-sunmoon.com/ultra/assets/img/home/Pokemon_UltraSun_Pokemon_UltraMoon.jpg");
        }else{
                alert("Only type Row, Pop, or Lit");
        }
 });
});