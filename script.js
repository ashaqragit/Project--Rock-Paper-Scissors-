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
const playerButtons = document.querySelector(".buttons");
const gameLog = document.querySelector(".log");
const retryGame = document.querySelector(".retry-game");
const retryMsg = document.querySelector(".retry-message");

function showGameOverContainer() {
  retryGame.style.display = "flex";
  gameLog.style.display = "none";
  playerButtons.style.display = "none";
}

function refreshPage() {
  window.location.reload();
}
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
      showGameOverContainer();
      retryMsg.textContent = "Player win the game!!!";
    } else if (playerScore < computerScore) {
      showGameOverContainer();
      retryMsg.textContent = "Computer win the game!!!";
    }
  } else if (currentRound < maximumRounds && playerScore != computerScore) {
    if (playerScore > computerScore && playerScore - computerScore === 3) {
      showGameOverContainer();
      retryMsg.textContent = "Player win the game!!!";
    } else if (
      playerScore < computerScore &&
      computerScore - playerScore === 3
    ) {
      showGameOverContainer();
      retryMsg.textContent = "Computer win the game!!!";
    }
  } else if (currentRound === maximumRounds && playerScore === computerScore) {
    showGameOverContainer();
    retryMsg.textContent = "Game ends its a tie!!!";
  }
}
function logScores() {
  computerScoreLog.textContent = computerScore;
  playerScoreLog.textContent = playerScore;
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

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      tieScore++;

      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "paper") {
      computerScore++;

      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "scissors") {
      playerScore++;

      whoWin.textContent = "Player wins!!!";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "paper") {
      tieScore++;

      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "scissors") {
      computerScore++;

      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "rock") {
      playerScore++;

      whoWin.textContent = "Player wins!!!";
    }
  } else {
    if (computerChoice === "scissors") {
      tieScore++;

      whoWin.textContent = "It is a tie";
    } else if (computerChoice === "rock") {
      computerScore++;

      whoWin.textContent = "Computer wins!!!";
    } else if (computerChoice === "paper") {
      playerScore++;

      whoWin.textContent = "Player wins!!!";
    }
  }
  logScores();
}
