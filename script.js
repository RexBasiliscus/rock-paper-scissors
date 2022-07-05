let computerScore = 0;
let playerScore = 0;

function computerPlay () {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)]
}


function playRound (playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    return "It\'s a Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return `Congratz! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}!`;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") || 
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}!`;
  }

}




