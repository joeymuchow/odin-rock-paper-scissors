// Score variables
let humanScore = 0;
let computerScore = 0;

// Event listeners
const buttonList = document.querySelectorAll(".rps-btn");
buttonList.forEach((button) => {
    button.addEventListener("click", (e) => {
        const choice = e.target.textContent;
        playRound(choice, getComputerChoice());
    });
});

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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const roundResult = document.querySelector(".round-result");
    const humanScoreboard = document.querySelector(".human-score");
    const computerScoreboard = document.querySelector(".computer-score");

    if (humanChoice === computerChoice) {
        roundResult.textContent = "It's a tie! Play again.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        roundResult.textContent = "You lose! Paper beats Rock.";
        computerScore += 1;
        computerScoreboard.textContent = computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        roundResult.textContent = "You Win! Rock beats Scissors.";
        humanScore += 1;
        humanScoreboard.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        roundResult.textContent = "You win! Paper beats Rock.";
        humanScore += 1;
        humanScoreboard.textContent = humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        roundResult.textContent = "You lose! Scissors beats Paper.";
        computerScore += 1;
        computerScoreboard.textContent = computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        roundResult.textContent = "You lose! Rock beats Scissors.";
        computerScore += 1;
        computerScoreboard.textContent = computerScore;
    } else {
        roundResult.textContent = "You win! Scissors beats Paper.";
        humanScore += 1;
        humanScoreboard.textContent = humanScore;
    }

    if (humanScore === 5 || computerScore === 5) {
        roundResult.textContent = humanScore > computerScore ?
            `You won the game! ${humanScore} to ${computerScore}. Want to play again?` :
            `You lost the game! ${computerScore} to ${humanScore}. Want to play again?`;
        humanScore = 0;
        computerScore = 0;
        humanScoreboard.textContent = "0";
        computerScoreboard.textContent = "0";
    }
}