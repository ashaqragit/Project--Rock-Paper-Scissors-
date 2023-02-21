let playerChoice = "";
let computerChoice = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let maximumRounds = 5;
let currentRound = 0;

const logMessage = document.querySelector(".log-message");
const whoWin = document.querySelector(".who-win");
const round = document.querySelector(".round");
const computerChoiceImg = document.querySelector(".computer-choice");
const playerChoiceImg = document.querySelector(".player-choice");
const playerScoreLog = document.querySelector(".player-score");
const computerScoreLog = document.querySelector(".computer-score");
const playerButtons = document.querySelector(".player-choice-btn");
const gameLog = document.querySelector(".log");
const retryGame = document.querySelector(".retry-game");

function generateComputerChoice() {
  let randNumber;
  randNumber = Math.floor(Math.random() * (4 - 1)) + 1;
  if (randNumber === 1) {
    computerChoice = "rock";
    computerChoiceImg.style.backgroundImage = 'url("img/rock.png")';
  } else if (randNumber === 2) {
    computerChoice = "paper";
    computerChoiceImg.style.backgroundImage = 'url("img/paper.png")';
  } else {
    computerChoice = "scissors";
    computerChoiceImg.style.backgroundImage = 'url("img/scissors.png")';
  }
}
function setPlayerRock() {
  playerChoice = "rock";
  playerChoiceImg.style.backgroundImage = 'url("img/rock.png")';
  generateComputerChoice();
  playGame();
  whoWins();
}
function setPlayerPaper() {
  playerChoice = "paper";
  playerChoiceImg.style.backgroundImage = 'url("img/paper.png")';
  generateComputerChoice();
  playGame();
  whoWins();
}
function setPlayerScissors() {
  playerChoice = "scissors";
  playerChoiceImg.style.backgroundImage = 'url("img/scissors.png")';
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
      whoWin.textContent = "Player win the game!!!";
    } else if (playerScore < computerScore) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("computer winnnnnnnnnnnnnnnnnnnnnnn");
      whoWin.textContent = "Computer win the game!!!";
    }
  } else if (currentRound < maximumRounds && playerScore != computerScore) {
    if (playerScore > computerScore && playerScore - computerScore === 3) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("player winnnnnnnnnnnnnnnnnnnnnnn");
      whoWin.textContent = "Player win the game!!!";
    } else if (
      playerScore < computerScore &&
      computerScore - playerScore === 3
    ) {
      console.log("computer score = " + computerScore);
      console.log("player score = " + playerScore);
      console.log("computer winnnnnnnnnnnnnnnnnnnnnnn");
      whoWin.textContent = "Computer win the game!!!";
    }
  } else if (currentRound === maximumRounds && playerScore === computerScore) {
    console.log(
      "=================== game ends its a tie ======================="
    );
    whoWin.textContent = "game ends with a tie";
  }
}
function logScores() {
  computerScoreLog.textContent = computerScore;
  playerScoreLog.textContent = playerScore;
  console.log("computer score = " + computerScore);
  console.log("player score = " + playerScore);
}
function updateLogMessage() {
  logMessage.textContent = `Player choice is ${playerChoice} Computer choice is ${computerChoice} `;
}
function updateRoundMessage() {
  if (currentRound === 1) {
    round.textContent = "Round One";
  } else if (currentRound === 2) {
    round.textContent = "Round Two";
  } else if (currentRound === 3) {
    round.textContent = "Round Three";
  } else if (currentRound === 4) {
    round.textContent = "Round Four";
  } else if (currentRound === 5) {
    round.textContent = "Round Five";
  }
}

function playGame() {
  currentRound++;
  updateRoundMessage();
  updateLogMessage();
  console.log(
    "================== Round " + currentRound + " =================="
  );
  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "paper") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "scissors") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
      whoWin.textContent = "Player wins!!!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "scissors") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "rock") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
      whoWin.textContent = "Player wins!!!";
    }
  } else {
    if (computerChoice === "scissors") {
      tieScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} it is a tie  `
      );
      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "rock") {
      computerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Computer wins!!!  `
      );
      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "paper") {
      playerScore++;
      console.log(
        `Player choice is ${playerChoice} Computer choice is ${computerChoice} Player wins!!!  `
      );
      whoWin.textContent = "Player wins!!!";
    }
  }
  logScores();
}

function test() {
  playerChoice = "rock";
  computerChoice = "rock";
}

function showButtonsAndLog() {
  console.log("show buttons and log");
  /*element.classList.add("mystyle")*/
  retryGame.style.display = "none";
  gameLog.style.display = "block";
  playerButtons.style.display = "block";
}
function showGameOverContainer() {}
