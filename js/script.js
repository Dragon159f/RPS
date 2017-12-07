//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input1 field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input1 box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// var input1 =  $("#input1").val();


//FUNCTIONS

// DOCUMENT READY FUNCTION
$(document).ready(function(){
        $("#input2").hide(); 
        $(".pokemon").hide();
        $("#p2button").hide();
        $("#input1").keydown(function(event){
        if(event.keyCode == 13){
        $("#p1button").click();
        }
});

        $("#player").click(function(){
        $("#input1, #input2, #p2button").show();
        $("#p1button, .pokemon").hide();
        $(".text").text("Player 2 Choice");
});
        $("#computer").click(function(){
        $("#input2, .pokemon, #p2button").hide();
        $("#input1, #p1button").show();
        $(".text").text("Computer Choice");
});     
        $("#buttonChoice").click(function(){
        $(".pokemon").show();
        $("#input1, #input2, #p1button,#p2button").hide();
        $(".text").text("Computer Choice");
});

        $("#p1button").click(function(){
                var pokemon = ["row","pop","lit"];
                var RPL = Math.floor((Math.random()*3));
                var comchoice = pokemon[RPL]
                console.log(comchoice);
                var input1 = $("#input1").val().toLowerCase();
                var input2 = $("#input2").val().toLowerCase();
                console.log("I've been found");
      
//Litten                
        if(input1 === "lit" && comchoice === "lit"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input1 === "lit" && comchoice === "pop"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input1 === "lit" && comchoice === "row"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/win.png");
//Popplio                
        }else if(input1 === "pop" && comchoice === "lit"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input1 === "pop" && comchoice === "pop"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input1 === "pop" && comchoice === "row"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/lose.png");
//Rowlet              
        }else if(input1 === "row" && comchoice === "lit"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input1 === "row" && comchoice === "pop"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input1 === "row" && comchoice === "row"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/tie.png");
                
//Extra
        }else if(input1 === "wisely"){
                alert("Didn't mean it literally, but you get the prize of nothing anyway");
        }else if(input1 === "ultra"){
                $("#gen7start").attr("src", "https://www.pokemon-sunmoon.com/ultra/assets/img/home/Pokemon_UltraSun_Pokemon_UltraMoon.jpg");
        }else if(input1 === "help"){
                $("#gen7start").attr("src", "http://pokemonaustralia.com/wp-content/uploads/2013/01/XY_Starter-Type-Infographic.jpg");
        }else if(input1 === ""){
                $("#gen7start").attr("src", "images/Starters07.jpg");
        }else{
                alert("Only type Row, Pop, or Lit");
        }
 });

        $("#p2button").click(function(){
        var input1 = $("#input1").val().toLowerCase();
        var input2 = $("#input2").val().toLowerCase();
//Litten                
        if(input1 === "lit" && input2 === "lit"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input1 === "lit" && input2 === "pop"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input1 === "lit" && input2 === "row"){
                $("#userpic").attr("src", "images/litten.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/win.png");
//Popplio                
        }else if(input1 === "pop" && input2 === "lit"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input1 === "pop" && input2 === "pop"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/tie.png");
        }else if(input1 === "pop" && input2 === "row"){
                $("#userpic").attr("src", "images/popplio.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/lose.png");
//Rowlet              
        }else if(input1 === "row" && input2 === "lit"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/litten.jpg");
                $("#result").attr("src", "images/lose.png");
        }else if(input1 === "row" && input2 === "pop"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/popplio.jpg");
                $("#result").attr("src", "images/win.png");
        }else if(input1 === "row" && input2 === "row"){
                $("#userpic").attr("src", "images/rowlet.jpg");
                $("#compic").attr("src", "images/rowlet.jpg");
                $("#result").attr("src", "images/tie.png");
        }
 });
});

//$("#buttonChoice").click(function(){
//        var  input3 = $("#input3").val().toLowerCase();
//}