let computerScore = 0;
let playerScore = 0;
let round = 0;
let choices = ["rock", "paper", "scissors"];


// Starts the game, then displays a prompt box, where you input your choice; if the choice is not valid, it returns to start
function game() {
  let playerChoice = prompt('Choose either Rock, Paper, or Scissors');
  let playerSelection = playerChoice.toLowerCase();
  if (choices.includes(playerSelection)) {
    playRound(playerSelection);
  } else {
    alert('Please enter one of the options');
    game();
  }
}
      
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
  round++;
  // outputs the score
  console.log(`Player: ${playerScore}`);
  console.log(`Computer: ${computerScore}`);
  console.log(`Round #${round}`);
}

// looping through the game to play 5 rounds
for (let round = 1; round < 6; round++) {
  game();
}

// after 5 rounds, declare a winner
if (round === 5 && playerScore > computerScore) {
  alert("You\'re Victorious!");
} else if (round === 5 && computerScore > playerScore) {
  alert("Oh no! The computer has won!")
} else if (round === 5 && computerScore === playerScore) {
  alert("No one wins, it\'s a Tie!")
}



