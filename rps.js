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

function rejectAnswer(answer) {
    if (!(answer.toLowerCase() === 'rock' || answer.toLowerCase() === 'paper' || answer.toLowerCase() === 'scissors')) {
        alert('That\'s not one of your options! Please enter a valid choice.');
        answer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');
        answer = rejectAnswer(answer);
        return answer;
    } else {
    return answer;
    }
}

// playerAnswer = rejectAnswer(playerAnswer);

// function playRound (playerSelection, computerSelection) {

// }