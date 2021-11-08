const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const randomChosenColor = buttonColors[nextSequence()];
console.log(randomChosenColor);
gamePattern.push(randomChosenColor);

$("#green").on("click", function () {
  $("#green").css("color", "red");
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}
