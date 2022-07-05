let computerSelection;
let playerSelection;

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

let playerAnswer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');

function rejectAnswer() {
    if (!(playerAnswer.toLowerCase() === 'rock' || playerAnswer.toLowerCase() === 'paper' || playerAnswer.toLowerCase() === 'scissors')) {
        alert('That\'s not one of your options! Please enter a valid choice.')
        playerAnswer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');
        rejectAnswer();
    }
}

rejectAnswer();