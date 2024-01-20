let computerScore = 0;
let playerScore = 0;

const gameResult = document.querySelector('.gameResult');
const playerPoints = document.querySelector('#playerPoints');
const computerPoints = document.querySelector('#computerPoints');

const rockButton = document.querySelector('.rockButton');
const paperButton = document.querySelector('.paperButton');
const scissorsButton = document.querySelector('.scissorsButton');

const intro = document.querySelector('#intro');
const winner = document.querySelector('.winner');

intro.textContent = "Welcome to rock, paper, scissors!" +
                         " Please choose from the buttons below: \n" + 
                         "\n Rock will beat scissors." +
                         "\n Paper will beat rock." +
                         "\n Scissors will beat paper."

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
function playRound (playerChoice) {
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = getComputerChoice();
    
    if (computerScore != 5 && playerScore != 5){
        if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
                playerScore += 1
                gameResult.textContent = 'You win! ' + 
                `${playererSelection.charAt(0).toUpperCase() +
                 playerSelection.slice(1)}` + ' beats ' + 
                 `${computerSelection}.`
                 computerPoints.textContent = 'Computer Points: ' + `${computerScore}`
                 playerPoints.textContent = 'Player Points: ' + `${playerScore}`
                 if (computerScore >= 5) {
                    winner.textContent = "You lose, the computer has 5 points."
                }
                else if (playerScore >= 5) {
                    winner.textContent = "You win! You scored 5 points against the computer."
                }
            }
        else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
                (playerSelection === 'scissors' && computerSelection === 'rock') ||
                (playerSelection === 'paper' && computerSelection === 'scissors')) {
                    computerScore += 1
                    gameResult.textContent = 'You lose! ' + 
                                    `${computerSelection.charAt(0).toUpperCase() +
                                     computerSelection.slice(1)}` + ' beats ' + 
                                     `${playerSelection}.`
                    computerPoints.textContent = 'Computer Points: ' + `${computerScore}`
                    playerPoints.textContent = 'Player Points: ' + `${playerScore}`
                    if (computerScore >= 5) {
                        winner.textContent = "You lose, the computer has 5 points."
                    }
                    else if (playerScore >= 5) {
                        winner.textContent = "You win! You scored 5 points against the computer."
                    }
        }
        else {
            gameResult.textContent = 'Tie game! You both chose ' + `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`;
            if (computerScore >= 5) {
                winner.textContent = "You lose, the computer has 5 points."
            }
            else if (playerScore >= 5) {
                winner.textContent = "You win! You scored 5 points against the computer."
            }
        }
    }

}


rockButton.addEventListener('click', function(){playRound(rockButton.value)});
paperButton.addEventListener('click', function(){playRound(paperButton.value)});
scissorsButton.addEventListener('click', function(){playRound(scissorsButton.value)});

