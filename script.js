let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let maximumRounds = 5;
let currentRound = 0;

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
}
function setPlayerRock() {
  playerChoice = "rock";
  generateComputerChoice();
  playGame();
  whoWins();
}
function setPlayerPaper() {
  playerChoice = "paper";
  generateComputerChoice();
  playGame();
  whoWins();
}
function setPlayerScissors() {
  playerChoice = "scissors";
  generateComputerChoice();
  playGame();
  whoWins();
}

function whoWins() {
  if (currentRound === maximumRounds && playerScore != computerScore) {
    if (playerScore > computerScore) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("player winnnnnnnnnnnnnnnnnnnnnnn");
    } else if (playerScore < computerScore) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("computer winnnnnnnnnnnnnnnnnnnnnnn");
    }
  } else if (currentRound < maximumRounds && playerScore != computerScore) {
    if (playerScore > computerScore && playerScore - computerScore === 3) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("player winnnnnnnnnnnnnnnnnnnnnnn");
    } else if (
      playerScore < computerScore &&
      computerScore - playerScore === 3
    ) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("computer winnnnnnnnnnnnnnnnnnnnnnn");
    }
  } else if (currentRound === maximumRounds && playerScore === computerScore) {
    console.log(
      "=================== game ends its a tie ======================="
    );
  }
}
function logScores() {
  console.log("computer score = " + computerScore);
  console.log("player score = " + playerScore);
}

function playGame() {
  currentRound++;
  console.log(
    "================== Round " + currentRound + " =================="
  );
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
    } else if (computerChoice === "paper") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
    } else if (computerChoice === "scissors") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
    } else if (computerChoice === "rock") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
    }
  } else {
    if (computerChoice === "scissors") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
    } else if (computerChoice === "rock") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
    } else if (computerChoice === "paper") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
    }
  }
  logScores();
}

function test() {
  playerChoice = "rock";
  computerChoice = "rock";
}
