var rgbColorGame = (function() {
    var numberOfSquares = 6,
        colors = [],
        pickedColor,
        squares = document.querySelectorAll(".square"),
        colorDisplay = document.getElementById("colorDisplay"),
        messageDisplay = document.querySelector("#message"),
        h1 = document.querySelector("h1"),
        resetButton = document.querySelector("#reset"),
        modeButtons = document.querySelectorAll(".mode");

    var setupColorSquares = function() {
        for(var i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function() {
                var clickedColor = this.style.backgroundColor;
                if(clickedColor === pickedColor){
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                    changeColors(pickedColor);
                    h1.style.backgroundColor = pickedColor;
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
            });
        }
    };
    var setupModeButtons = function() {
        for(var i = 0; i < modeButtons.length; i++) {
             modeButtons[i].addEventListener("click", function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
                reset();
             });
        }
    };

    var reset = function() {
        colors = generateRandomColors(numberOfSquares);
        pickedColor = randomPickedColor();
        resetButton.textContent = "New Color";
        messageDisplay.textContent = "";
        colorDisplay.textContent = pickedColor;

        for(var i = 0; i < squares.length; i++){
            if(colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
            }
        }
        h1.style.backgroundColor = "steelblue";
    };

    var resetButtonEvent = function() {
        resetButton.addEventListener("click", function() {
            reset();
        });
    };

    var changeColors = function(color) {
        for(var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    };

    var randomPickedColor = function() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    };

    var generateRandomColors = function(numberOfColors) {
         var randomColors = [];
        for(var i = 0; i < numberOfColors; i++){
            randomColors.push(randomColor());
        }
        return randomColors;
    };

    var randomColor = function() {
         //pick a 'red' from 0 - 255
        var r = Math.floor(Math.random() * 256)
        // pic a 'green' from 0 - 255
        var g =  Math.floor(Math.random() * 256);
        // pick a 'blue' from 0 - 255
        var b =  Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    };

    var init = function() {
        setupModeButtons();
        setupColorSquares();
        reset();
    };

    return {
        init: init,
        resetButtonEvent: resetButtonEvent,
        reset: reset,
        resetButton: resetButton
    };


})();

rgbColorGame.init();
rgbColorGame.resetButton.addEventListener("click", function() {
    rgbColorGame.reset();
});
