let computerScore = 0;
let playerScore = 0;

const gameResult = document.querySelector('.gameResult');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');

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
            gameResult.textContent = 'You Lose! Scissors beats Paper';
            computerScore += 1
            computerPoints.textContent = `${computerScore}`;
        }
        else {
            gameResult.textContent = 'You Win! Paper beats Rock';
            playerScore += 1
            playerPoints.textContent = `${playerScore}`;
        }
    }
    else if (player == 'rock'){
        if (computerSelection == 'paper'){
            gameResult.textContent = 'You Lose! Paper beats Rock';
            computerScore += 1
            computerPoints.textContent = `${computerScore}`;
        }
        else {
            gameResult.textContent = 'You Win! Rock beats Scissors';
            playerScore += 1
            playerPoints.textContent = `${playerScore}`;
        }
    }
    else if (player == 'scissors'){
        if (computerSelection == 'rock'){
            gameResult.textContent = 'You Lose! Rock beats Scissors';
            computerScore += 1
            computerPoints.textContent = `${computerScore}`;
        }
        else {
            gameResult.textContent = 'You Win! Scissors beats Paper';
            playerScore += 1
            playerPoints.textContent = `${playerScore}`;
        }
    }

}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', clickPlay('rock'));
paperButton.addEventListener('click', clickPlay('paper'));
scissorsButton.addEventListener('click', clickPlay('scissors'));

function clickPlay (player) {
    computer = getComputerChoice;
    playRound(player, computer);
}