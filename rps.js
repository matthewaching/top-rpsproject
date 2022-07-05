let computerChoice;

function computerPlay() {
    const choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        computerChoice = "rock";
    } else if (choiceNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    };
    return computerChoice;
}

alert(computerPlay());