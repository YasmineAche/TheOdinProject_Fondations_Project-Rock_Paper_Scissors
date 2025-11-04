function getComputerChoice(max) {
  const random = parseInt(Math.random() * max);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return window.prompt("Rock, Paper, Scissors?");
}

function playRound(humanChoice, computerChoice) {
  let humanScore = 0,
    computerScore = 0;
  humanChoice = humanChoice.toLowerCase();

  console.log(
    `\tHuman Selection: ${humanChoice} \n\tComputer Selection: ${computerChoice}`
  );

  if (humanChoice === computerChoice) console.log("Draw");
  else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose, paper covers rock");
      computerScore++;
    } else {
      console.log("You win, rock smashes scissors");
      humanScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      console.log("You lose, scissors cuts paper");
      computerScore++;
    } else {
      console.log("You win, paper covers rock");
      humanScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You lose, rock smashes scissors");
      computerScore++;
    } else {
      console.log("You win, scissors cuts paper");
      humanScore++;
    }
  }
  return [humanScore, computerScore];
}

function playGame() {
  let humanGameScore = 0,
    computerGameScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1} : `);
    const [humanRoundScore, computerRoundScore] = playRound(
      getHumanChoice(),
      getComputerChoice(3)
    );
    humanGameScore += humanRoundScore;
    computerGameScore += computerRoundScore;
  }
  console.log(`Human Game Score: ${humanGameScore}`);
  console.log(`Computer Game Score: ${computerGameScore}`);

  if (humanGameScore > computerGameScore) console.log("\nYou win the game");
  else if (humanGameScore < computerGameScore)
    console.log("\nYou lose the game");
  else console.log("\nIt's a Draw");
}

playGame();
