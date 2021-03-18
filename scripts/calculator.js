// Adjusts display for number input
function numClick(input){
    document.getElementById("display").innerHTML += input;
}

// Clears display
function clearClick(){
    document.getElementById("display").innerHTML = "";
}

// Adjusts display for operator input
function opClick(input){
    // Get and store display object in a var for simplicity
    var disp = document.getElementById("display");

    // IF       (operator at end of display input)
    //              flash syntax warning
    // ELSE IF  (display input is empty)
    //              flash syntax warning
    // ELSE     (acceptable position)
    //              add operator to display input
    if (disp.innerHTML.endsWith("+") || disp.innerHTML.endsWith("-") || 
    disp.innerHTML.endsWith("*") || disp.innerHTML.endsWith("/")){
        var curr = disp.innerHTML;
        setTimeout(function(){disp.innerHTML = curr}, 1000)
        disp.innerHTML = "Syntax Err";
    }

    else if (disp.innerText.length == 0){
        setTimeout(function(){disp.innerHTML = ""}, 1000)
        disp.innerHTML = "Syntax Err";
    }

    else {
        document.getElementById("display").innerHTML += input;
    }

}

// Adjusts display for equals operation
function totalClick(){
    // Get and store display object in a var for simplicity
    var disp = document.getElementById("display");

    // IF   (operator at end of display input)
    //          flash syntax warning
    // ELSE (acceptable input)
    //          evaluate input and update display with result
    if (disp.innerHTML.endsWith("+") || disp.innerHTML.endsWith("-") || 
    disp.innerHTML.endsWith("*") || disp.innerHTML.endsWith("/")){
        var curr = disp.innerHTML;
        setTimeout(function(){disp.innerHTML = curr}, 1000)
        disp.innerHTML = "Syntax Err";
    }

    else{
        document.getElementById("display").innerHTML = eval(disp.innerHTML);
    }
}

// Adjusts display for a delete operation
function delClick(){
    // Get and store display object in a var for simplicity
    var curr = document.getElementById("display").innerHTML;

    // IF   (display has input)
    //          remove the last character from the display
    // ELSE (display is empty)
    //          do nothing
    if (curr.length > 0){
        curr = curr.slice(0, -1)
        document.getElementById("display").innerHTML = curr;
    }
}