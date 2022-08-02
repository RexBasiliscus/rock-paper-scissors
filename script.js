let computerScore = 0;
let playerScore = 0;
const choices = ["rock", "paper", "scissors"];

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

rock_div.addEventListener('click', () => playRound("rock"));
paper_div.addEventListener('click', () => playRound("paper"));
scissors_div.addEventListener('click', () => playRound("scissors"));

function playRound (playerSelection) {
  
  // Outputs a randomized choice for the computer
  function computerPlay () {
    return choices[Math.floor(Math.random() * choices.length)]
  }
  let computerSelection = computerPlay();

  // Compares the player vs. computer selections and outputs a specific text and increments score
  if (playerSelection === computerSelection) {
    alert("It\'s a Tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    alert(`Congratz! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`);
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") || 
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    alert(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`);
  }
  // outputs the score
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
}



