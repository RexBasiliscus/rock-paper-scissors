let computerScore = 0;
let playerScore = 0;
let round;
let choices = ["rock", "paper", "scissors"];


// Displays a prompt box, where you input your choice
let playerChoice = prompt('Choose either Rock, Paper, or Scissors');
let playerSelection = playerChoice.toLowerCase();
if (choices.includes(playerSelection)) {
  playRound(playerSelection);
} else {
  alert('Please enter one of the options');
}

      
    function playRound () {
      
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
    }



