let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let gameMessage_div = document.getElementById("game-message");
const wrapper_div = document.querySelector("wrapper");
const choices_div = document.querySelector("choices");
const instructionBox_div = document.querySelector("instruction-box");
const startButton_div = document.getElementById("start");

rock_div.addEventListener('click', () => userPlay("rock"));
paper_div.addEventListener('click', () => userPlay("paper"));
scissors_div.addEventListener('click', () => userPlay("scissors"));

function userPlay(choice) {
    playerSelection = choice;
    game();
}

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection) {

  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    tie();
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    win();   
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") || 
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    lose();
  }
}

function win() {
  playerScore++;
  userScore_span.textContent = playerScore;
  gameMessage_div.textContent = `Congratz! Your ${playerSelection.toUpperCase()} beats Computer's ${computerSelection.toUpperCase()}!`;
  document.getElementById(playerSelection).classList.add('green-bckgr');
  setTimeout(() => document.getElementById(playerSelection).classList.remove('green-bckgr'), 300);
}

function lose() {
  computerScore++;
  computerScore_span.textContent = computerScore;
  gameMessage_div.textContent = `You Lose! Computer's ${computerSelection.toUpperCase()} beats Your ${playerSelection.toUpperCase()}!`
  document.getElementById(playerSelection).classList.add('red-bckgr');
  setTimeout(() => document.getElementById(playerSelection).classList.remove('red-bckgr'), 300);
}

function tie() {
  gameMessage_div.textContent = "It\'s a Tie!"
  document.getElementById(playerSelection).classList.add('gray-bckgr');
  setTimeout(() => document.getElementById(playerSelection).classList.remove('gray-bckgr'), 300);
}

function game() {
  if (!(playerScore > 4 || computerScore > 4)) {
    playRound(playerSelection);
  } else {
    endGame();
  }
};

// function to end the game, declare winner, append the restart btn
function endGame() {
  if (playerScore > 4) {
    gameMessage_div.textContent = `Congratz! You have Won the game!`;
  } else if (computerScore > 4) {
    gameMessage_div.textContent = `You have lost the game :(`
  }
  const restartMsg = document.createElement("p");
  restartMsg.textContent = "Do you want to restart?"
  gameMessage_div.appendChild(restartMsg);
}


