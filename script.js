function getComputerChoice() {
  const random = parseInt(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let computerSelection = getComputerChoice();
console.log(computerSelection);
