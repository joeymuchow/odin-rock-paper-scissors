function getComputerChoice() {
    let choice;
    // Randomly generate a 0, 1, or 2
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        choice = "rock";
    } else if (randomNumber === 1) {
        choice = "paper";
    } else {
        choice = "scissors";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}

function playGame() {
    // Score Variables
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie! Play again.");
            playRound(getHumanChoice(), getComputerChoice());
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore += 1;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You Win! Rock beats Scissors.");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1;
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }
    }

    // for (let i = 0; i < 5; i++) {
    //     playRound(getHumanChoice(), getComputerChoice());
    // }

    console.log(humanScore > computerScore ? `You won the game! ${humanScore} to ${computerScore}` : `You lost the game! ${computerScore} to ${humanScore}`);
}

// playGame();