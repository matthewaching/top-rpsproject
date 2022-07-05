let computerSelection;

let playerSelection;

let playerAnswer = prompt('Choose your weapon of choice! Rock, paper, or scissors?');

playerSelection = rejectAnswer(playerAnswer);
console.log(computerPlay());
console.log(playRound(playerSelection, computerSelection));

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
