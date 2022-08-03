let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let computerSelection = '';

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let gameMessage_div = document.getElementById("game-message");


rock_div.addEventListener('click', () => userPlay("rock"));
paper_div.addEventListener('click', () => userPlay("paper"));
scissors_div.addEventListener('click', () => userPlay("scissors"));

function userPlay(choice) {
    playerSelection = choice;
    playRound(playerSelection);
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
  userScore_span.innerText = playerScore;
  gameMessage_div.innerText = `Congratz! Your ${playerSelection.toUpperCase()} beats Computer's ${computerSelection.toUpperCase()}!`;
}

function lose() {
  computerScore++;
  computerScore_span.innerText = computerScore;
  gameMessage_div.innerText = `You Lose! Computer's ${computerSelection.toUpperCase()} beats Your ${playerSelection.toUpperCase()}!`
}

function tie() {
  gameMessage_div.innerText = "It\'s a Tie!"
}
