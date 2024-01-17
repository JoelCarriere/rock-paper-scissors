

//Create a function that will randomly return rock, paper, or scissors
//Choose randomly with a number, based on the number value choose a string to go along with it
function getComputerChoice() {
    let choice = Math.random()
    let computerSelection
    if (choice <= 0.333) {
        computerSelection = 'rock';
    }
    else if (choice <= 0.666) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

//Create a function that plays a round of the game and outputs the win/loss outcome
//This will take in the user input and computer input
function playRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    if (computerSelection === player){
        return ('Tie game! You both chose ' + playerSelection.toUpperCase(0));
    }
    else if (player == 'paper'){
        if (computerSelection == 'scissors'){
            return 'You Lose! Scissors beats Paper';
            computerScore++
        }
        else {
            return 'You Win! Paper beats Rock';
            playerScore++
        }
    }
    else if (player == 'rock'){
        if (computerSelection == 'paper'){
            return 'You Lose! Paper beats Rock';
            computerScore++
        }
        else {
            return 'You Win! Rock beats Scissors';
            playerScore++
        }
    }
    else if (player == 'scissors'){
        if (computerSelection == 'rock'){
            return 'You Lose! Rock beats Scissors';
            computerScore++
        }
        else {
            return 'You Win! Scissors beats Paper';
            playerScore++
        }
    }

}

let computerScore = 0;
let playerScore = 0;
//Create a game function to determine a best of 5 winner for the game after 5 rounds
function game () {

    for (let step = 1; step <= 5; step++){
        let playerSelection = prompt('Please choose rock, paper, or scissors and enter in the field below:');
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

    if (playerScore > computerScore) {
        return "Player wins!"
    }
    else {
        return "Computer wins!"
    }
}

//Create a function that accepts users choice of rock, paper, or scissors
//function playerSelection() {

