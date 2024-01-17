

//Create a function that will randomly return rock, paper, or scissors
//Choose randomly with a number, based on the number value choose a string to go along with it
function getComputerChoice() {
    let computerChoice = Math.random()
    let choice
    if (computerChoice <= 0.333) {
        return choice = "Rock";
    }
    else if (computerChoice <= 0.666) {
        return choice = "Paper";
    }
    else {
        return choice = "Scissors";
    }
}