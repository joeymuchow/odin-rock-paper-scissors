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
        choice = "Rock";
    } else if (randomNumber === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}


