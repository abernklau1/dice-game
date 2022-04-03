

randomNumber1 = Math.floor(Math.random() * 6) + 1;

randomNumber2 = Math.floor(Math.random() * 6) + 1;

diceImage1 = "dice" + randomNumber1 + ".png";
diceImage2 = "dice" + randomNumber2 + ".png";

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];



image1.setAttribute("src", "images/" + diceImage1);
image2.setAttribute("src", "images/" + diceImage2);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    heading.innerHTML = "Player 2 Wins!🚩";
} else {
    heading.innerHTML = "Draw!";
}