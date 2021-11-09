const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const playerPattern = [];
var level = 0;

const buttonSound = new Audio("/sounds/" + nextSequence() + ".mp3");

$(document).keypress(function () {
  $("#" + nextSequence())
    .fadeOut(100)
    .fadeIn(100);
  buttonSound.play();
});

$(".game-button").on("click", function () {
  const userButtonPressed = $(this).attr("id");
  $("#" + userButtonPressed)
    .fadeOut(100)
    .fadeIn(100);
  const buttonPressedSound = new Audio("/sounds/" + userButtonPressed + ".mp3");
  buttonPressedSound.play();
  playerPattern.push(userButtonPressed);
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  level++;
  $("#title").text("Tu puntuación es: " + level + " puntos!");
  return randomChosenColor;
}
