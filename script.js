//================== INITIAL CACHING =====================//

let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;
let startButton = true;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
let gameMessage_div = document.getElementById("game-message");
const choices_div = document.getElementById("choices");
const startButton_div = document.getElementById("start");
const gameBox_div = document.getElementById("game-box");

//================== START BUTTON =====================//

startButton_div.addEventListener('click', toggleStartBtn); 

function toggleStartBtn() {  
  if(startButton) {
    gameBox_div.style.visibility = 'visible';
    startButton_div.style.display = 'none';
    startButton = false;
  } else {
    gameBox_div.style.visibility = 'hidden';
    startButton_div.style.display = '';
    startButton = true;
  }
}

//================== RPS BTNS =====================//

rock_div.addEventListener('click', () => userPlay("rock"));
paper_div.addEventListener('click', () => userPlay("paper"));
scissors_div.addEventListener('click', () => userPlay("scissors"));

function userPlay(choice) {
    playerSelection = choice;
    playRound(playerSelection);
}

//================== COMPUTER CHOICE =====================//

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//================== PLAY A ROUND & SCORE =====================//

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

//========= SCORE THRESHOLD FOR WIN DECLARATION =======//
  if (playerScore === 5 || computerScore === 5) {
    choices_div.style.display = 'none';
    endGame();
  }
};

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

//================== END GAME =====================//

function endGame() {
  if (playerScore > 4) {
    gameMessage_div.textContent = `Congratz! You have Won the game!`;
  } else if (computerScore > 4) {
    gameMessage_div.textContent = `You have lost the game :(`
  }

  const restartMsg = document.createElement("p");
  restartMsg.textContent = "Do you want to restart?"
  gameMessage_div.appendChild(restartMsg);

  const endGameBtn = document.createElement("button");
  endGameBtn.textContent = "Restart";
  gameMessage_div.appendChild(endGameBtn);
  
  endGameBtn.addEventListener('click', () => {
    computerScore = 0;
    computerScore_span.textContent = 0;
    playerScore = 0;
    userScore_span.textContent = 0;
    gameMessage_div.removeChild(restartMsg);
    gameMessage_div.removeChild(endGameBtn);
    gameMessage_div.textContent = '';
    choices_div.style.display = '';
    toggleStartBtn();
  })
}




