function getComputerChoice() {
    let modes = 3;
    let choice = Math.floor(Math.random() * modes);

    if (choice === 0) {
        return "Rock";
    }
    else if (choice === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?: ");
    return choice;
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(`Human choice: ${humanChoice}`);
console.log(`Computer choice: ${computerChoice}`);