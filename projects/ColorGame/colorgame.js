/* To keep track which mode user is using */
var numberOfSquares = 6;

var pickedColor;

var colors = [];

var message = document.querySelector("#message");

var squares = document.querySelectorAll(".square");

var mainColor = document.getElementById("mainColor");

var h2 = document.querySelector("h2");

var div = document.querySelector("#messagediv");

/* reset button */
var reset = document.getElementById("reset");

var modeButton = document.querySelectorAll(".mode");

init();

function init() {

    setUpModeButtons();
    
    setUpSquares();

    resa();
}

function setUpModeButtons()
{
    //GAME MODE BUTTON EVENT LISTENERS
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;

            /* if (this.textContent === "Easy") {  
                numberOfSquares = 3;
            } else {
                numberOfSquares = 6;
            } */
            resa();
        });
    }
}

function setUpSquares()
{
    for (var i = 0; i < squares.length; i++) {
        /* adding initial colors */
        squares[i].style.backgroundColor = colors[i];

        /* adding click listeners */
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                console.log("correct!");
                message.textContent = "CORRECT!";
                message.style.color = "green";
                changeColors(clickedColor);
                reset.textContent = "Play again?";
                h2.style.backgroundImage = "none"
                h2.style.backgroundColor = clickedColor;
                div.style.backgroundColor = "white";
            }
            else {
                console.log("wrong!")
                this.style.backgroundColor = "#232323";
                message.textContent = "Try again!";
                message.style.color = "red";
                div.style.backgroundColor = "white";
            }
        });
    }
}

function resa() {

    colors = generateRandomColors(numberOfSquares);

    pickedColor = pickColor();

    mainColor.textContent = pickedColor;

    reset.textContent = "New colors";

    message.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        }
        else {
            squares[i].style.display = "none";
        }

    }

    h2.style.backgroundImage = "url(https://cdn2.vectorstock.com/i/1000x1000/85/91/abstract-geometric-backgrounds-full-color-vector-24168591.jpg)";
}

//REFACTORING CODE
/* var hard = document.querySelector("#hard");

var easy = document.querySelector("#easy");

easy.addEventListener("click", function()
{
    this.classList.add("selected");
    hard.classList.remove("selected");

    numberOfSquares = 3;

    colors = generateRandomColors(numberOfSquares);

    pickedColor = pickColor();

    mainColor.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++)
    {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } 
        else 
        {
            squares[i].style.display ="none";
        }
    }
});

hard.addEventListener("click", function()
{
    this.classList.add("selected");
    easy.classList.remove("selected");

    numberOfSquares = 6;

    colors = generateRandomColors(numberOfSquares);

    pickedColor = pickColor();

    mainColor.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i]; 
        squares[i].style.display = "block";
    }
}); */

reset.addEventListener("click", function () {
    /*     location.reload();  */
    resa();
});

/* function to change h1 color to dry up code */
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

/* Trying tu use PSEUDO code */
function randomColor() {
    //pick red from 0 to 255 floor = number without floating points
    var red = Math.floor(Math.random() * 256);
    //pick green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}