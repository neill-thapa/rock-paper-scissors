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

function playRound(humanChoice, computerChoice) {
    let formattedHumanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase(); // make user input case insensitive
    console.log(`Your choice: ${formattedHumanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    if (formattedHumanChoice === computerChoice) {
        console.log("The game is a draw...");
    }
    else if (formattedHumanChoice === "Rock" && computerChoice === "Scissors" ||
                formattedHumanChoice === "Scissors" && computerChoice === "Paper" ||
                    formattedHumanChoice === "Paper" && computerChoice === "Rock") {
                        console.log(`You won! ${formattedHumanChoice} beats ${computerChoice}...`);
                    }
    else {
        console.log(`You lost! ${computerChoice} beats ${formattedHumanChoice}...`);
    }
}

function playGame() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
}

const button = document.querySelector("#playBtn");
button.addEventListener("click", playGame);