// Establishing main variables.

let computerSelection;
let playerSelection;
let playerAnswer;
let gameResult;
let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playerAnswer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');
    playerSelection = rejectAnswer(playerAnswer);
    computerPlay();
    gameResult = playRound(playerSelection, computerSelection);
    if (gameResult === 'pwin') {
        playerScore++;
    } else if (gameResult === 'cwin') {
        computerScore++;
    }
    console.log(computerSelection);
}

// Final results. Plan to add victor declaration.

alert('Final results: You scored ' + playerScore + '. Computer scored ' + computerScore + '.');

function computerPlay() {
    const choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        computerSelection = 'rock';
    } else if (choiceNumber === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    };
    return computerSelection;
}

function rejectAnswer(answer) {
    if (!(answer.toLowerCase() === 'rock' || answer.toLowerCase() === 'paper' || answer.toLowerCase() === 'scissors')) {
        alert('That\'s not one of your options! Please enter a valid choice.');
        answer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');
        answer = rejectAnswer(answer);
        return answer.toLowerCase();
    } else {
    return answer.toLowerCase();
    }
}

// Plan to add computerSelection into alerts so that player is aware. 

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('Player and computer tie!');
        return 'tie';
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            alert('Computer wins!');
            return 'cwin';
        } else {
            alert('Player wins!');
            return 'pwin';
        }
    } else if (playerSelection ==='paper') {
        if (computerSelection === 'scissors') {
            alert('Computer wins!');
            return 'cwin';
        } else {
            alert('Player wins!');
            return 'pwin';
        }
    } else {
        if (computerSelection === 'rock') {
            alert('Computer wins!');
            return 'cwin';
        } else {
            alert('Player wins!');
            return 'pwin';
        }
    }
}