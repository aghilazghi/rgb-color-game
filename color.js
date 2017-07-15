var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < colors.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }

    });
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numberOfColors) {
    // make an array
    var randomColors = [];
    // add numberOfColors random colors to array
    for(var i = 0; i < numberOfColors; i++){
        randomColors.push(randomColor());
    }
    // return that array
    return randomColors;
}

function randomColor() {
   //pick a 'red' from 0 - 255
   var r = Math.floor(Math.random() * 256)
   // pic a 'green' from 0 - 255
    var g =  Math.floor(Math.random() * 256);
   // pick a 'blue' from 0 - 255
   var b =  Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}

