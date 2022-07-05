const choices = ["Rock", "Paper", "Scissors"];

function computerPlay (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];
  
  return item; 
}

const computerResult = computerPlay(choices);
console.log(computerResult);