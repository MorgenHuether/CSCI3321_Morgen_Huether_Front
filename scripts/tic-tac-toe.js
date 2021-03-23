//
//  Morgen Huether
//  3-22-21
//


var turnNum = 1;
var player = 1;
var winner = "";
var started = false;
var xWins = 0;
var oWins = 0;

// General function for when a player wishes to place a token
function place(pos){
    var square = document.getElementById(pos);

    // IF (is started but not won and the desired position is open)
    if (square.innerHTML == "" && turnNum < 10 && winner == "" && started){

        // IF (it is player one's turn)
        //      mark the square with an X, increment the turn counter, and check for a win
        // ELSE (it is player two's turn)
        //      same execution
        if(player == 1){
            square.innerHTML = "X";
            document.getElementById("results").innerHTML = "Place an O";
            turnNum ++;
            checkWin();

            // used to properly increment turns so the winner always starts
            if (winner == "" && turnNum < 10) player ++;
        }
        else{
            square.innerHTML = "O";
            document.getElementById("results").innerHTML = "Place an X";
            turnNum ++;
            checkWin();

            // used to properly increment turns so the winner always starts
            if (winner == "" && turnNum < 10) player --;
        }
    
    }

    // Test for if a player was declared as the winner
    if (winner != ""){
        // display the winner and make the reset button visible
        document.getElementById("results").innerHTML = (winner + " won");
        document.getElementById("theBigNotRedButton").innerHTML = "Reset";
        document.getElementById("theBigNotRedButton").style.visibility = "visible";
        
        // increment and update win counters
        if (winner == "X") {
            xWins += 1;
            document.getElementById("xCounter").innerHTML = xWins;
        }
        if (winner == "O") {
            oWins += 1;
            document.getElementById("oCounter").innerHTML = oWins;
        }
    }

    // display the tie message and make the reset button visible
    if (turnNum > 9 && winner == ""){
        document.getElementById("results").innerHTML = ("It's a tie");
        document.getElementById("theBigNotRedButton").innerHTML = "Reset";
        document.getElementById("theBigNotRedButton").style.visibility = "visible";
    }
}

// Checks board for and winning combos and updates the winner global var if one is found
function checkWin(){
    // Get all board space contents
    var s1 = document.getElementById('one').innerHTML;
    var s2 = document.getElementById('two').innerHTML;
    var s3 = document.getElementById('three').innerHTML;
    var s4 = document.getElementById('four').innerHTML;
    var s5 = document.getElementById('five').innerHTML;
    var s6 = document.getElementById('six').innerHTML;
    var s7 = document.getElementById('seven').innerHTML;
    var s8 = document.getElementById('eight').innerHTML;
    var s9 = document.getElementById('nine').innerHTML;

    // check rows
         if (s1 != "" && s1 == s2 && s1 == s3) winner = s1; // row 1
    else if (s4 != "" && s4 == s5 && s4 == s6) winner = s4; // row 2
    else if (s7 != "" && s7 == s8 && s7 == s9) winner = s7; // row 3
    
    // check columns
    else if (s1 != "" && s1 == s4 && s1 == s7) winner = s1; // column 1
    else if (s2 != "" && s2 == s5 && s2 == s8) winner = s2; // column 2
    else if (s3 != "" && s3 == s6 && s3 == s9) winner = s3; // column 3
    
    //check diagonals
    else if (s1 != "" && s1 == s5 && s1 == s9) winner = s1; // top-left - bottom-right
    else if (s3 != "" && s3 == s5 && s3 == s7) winner = s3; // top-right - bottom-left
}

// If the Start/Reset button is pressed, start the game, reset the board, and hide the button
function theButtonWasPressed(){
    started = true;
    reset();
    document.getElementById("theBigNotRedButton").style.visibility = "hidden";
}

// Resets the board to all blank
function reset(){
    // set all spaces to blank
    document.getElementById('one').innerHTML = "";
    document.getElementById('two').innerHTML = "";
    document.getElementById('three').innerHTML = "";
    document.getElementById('four').innerHTML = "";
    document.getElementById('five').innerHTML = "";
    document.getElementById('six').innerHTML = "";
    document.getElementById('seven').innerHTML = "";
    document.getElementById('eight').innerHTML = "";
    document.getElementById('nine').innerHTML = "";

    // reset winner notice
    document.getElementById('results').innerHTML = "";

    // reset globals
    turnNum = 1;
    winner = "";
}