let playerChoice = "";
let computerChoice = "";

function generateComputerChoice() {
  let randNumber;
  randNumber = Math.floor(Math.random() * (4 - 1)) + 1;
  if (randNumber === 1) {
    computerChoice = "rock";
  } else if (randNumber === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("computer choice is " + computerChoice);
}
function setPlayerRock() {
  playerChoice = "rock";
  console.log("player choice is Rock");
}
function setPlayerPaper() {
  playerChoice = "paper";
  console.log("player choice is paper");
}
function setPlayerScissors() {
  playerChoice = "rock";
  console.log("player choice is scissors");
}
