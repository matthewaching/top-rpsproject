// Establishing main variables.

let computerSelection;
let playerSelection;
let playerAnswer;
let gameResult;
let playerScore = 0;
let computerScore = 0;

updateScore();

const buttons = document.querySelectorAll('.selection');
buttons.forEach(parseButton);

function updateScore() {
    document.querySelector('.player-scoreboard').textContent = `Player Score: ${playerScore}`;
    document.querySelector('.computer-scoreboard').textContent = `Computer Score: ${computerScore}`;
}

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

function playRound (playerSelection, computerSelection) {
    alert(`Computer chooses ${computerSelection}.`);
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

function parseButton(button) {
    button.addEventListener('click', () => {
        computerPlay();
        gameResult = playRound(button.id, computerSelection);
        if (gameResult === 'pwin') {
            playerScore++;
        } else if (gameResult === 'cwin') {
            computerScore++;
        }
        checkWin();
        updateScore();
    });
}

function checkWin() {
    if (playerScore === 5) {
        alert('Player wins the game! Congratulations!');
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert('Computer wins the game! Better luck next time!');
        playerScore = 0;
        computerScore = 0;
    }
}