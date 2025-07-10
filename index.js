var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "dice" + randomNumber1 + ".png";
var randomDice2 = "dice" + randomNumber2 + ".png";

var randomSrc1 = "images/" + randomDice1;
var randomSrc2 = "images/" + randomDice2;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomSrc1);

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomSrc2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
