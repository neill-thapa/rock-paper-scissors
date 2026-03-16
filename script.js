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
        console.log("Draw...");
        return 1;
    }
    else if (formattedHumanChoice === "Rock" && computerChoice === "Scissors" ||
                formattedHumanChoice === "Scissors" && computerChoice === "Paper" ||
                    formattedHumanChoice === "Paper" && computerChoice === "Rock") {
                        console.log(`You won the round! ${formattedHumanChoice} beats ${computerChoice}...`);
                        return 2;
                    }
    else {
        console.log(`You lost the round! ${computerChoice} beats ${formattedHumanChoice}...`);
        return 3;
    }
}

function playGame() {
    const numberOfRounds = parseInt(prompt("How many rounds do you want to play?: "));

    let humanScore = 0, computerScore = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}`);
        let status = playRound(humanChoice, computerChoice);

        if (status === 2) {
            humanScore++;
        }
        else if (status === 3) {
            computerScore++;
        }

        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`); // print the scores to the console
        console.log("\n");
    }

    // declare the winner
    if (humanScore === computerScore) {
        console.log("The game is a draw...");
    }
    else if (humanScore > computerScore) {
        console.log("Congratulations! You won the game...");
    }
    else {
        console.log("You lost the game! Better luck next time...");
    }
}

const button = document.querySelector("#playBtn");
button.addEventListener("click", playGame);