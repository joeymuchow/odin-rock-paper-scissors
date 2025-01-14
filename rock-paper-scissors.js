// Computer choice logic
// Create a function named getComputerChoice
// Create a variable named choice
// Create a variable named randomNumber
// Initialize randomNumber with a random number
// IF randomNumber is 0
// Set choice to Rock
// ELSE IF randomNumber is 1
// Set choice to Paper
// ELSE
// Set choice to Scissors
// ENDIF
// Return choice

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


// Human choice
// Create function getHumanChoice
// Create variable to store choice
// Create prompt to gather user's choice
// Store user's response in choice variable
// Return choice

function getHumanChoice() {
    let choice = prompt("rock, paper, or scissors?");
    return choice;
}


// Play game
// Create function playGame
// Move score variables and playRound into function
// Call play round 5 times with loop
// Declare winner

function playGame() {
    // Score Variables
    let humanScore = 0;
    let computerScore = 0;

    // Play round
    // Create playRound function
    // The function takes two parameters, humanChoice and computerChoice
    // Create variable that sets humanChoice to all lowercase
    // IF humanChoice equals computerChoice
    // Call playRound again
    // ELSE IF humanChoice is rock and computerChoice is paper
    // Log message paper beats rock, you lose
    // Increment computerScore by one
    // ELSE IF humanChoice is rock and computerChoice is scissors
    // Log message rock beats scissors, you win
    // Increment humanScore by one
    // ELSE IF humanChoice is paper and computerChoice is rock
    // Log message paper beats rock, you win
    // Increment humanScore by one
    // ELSE IF humanChoice is paper and computerChoice is scissors
    // Log message scissors beats paper, you lose
    // Increment computerScore by one
    // ELSE IF humanChoice is scissors and computerChoice is rock
    // Log message rock beats scissors, you lose
    // Increment computerScore by one
    // ELSE
    // Log message scissors beats paper, you win
    // Increment humanScore by one
    // ENDIF

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

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(humanScore > computerScore ? `You won the game! ${humanScore} to ${computerScore}` : `You lost the game! ${computerScore} to ${humanScore}`);
}

playGame();