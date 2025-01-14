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
