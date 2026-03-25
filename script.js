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
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let formattedHumanChoice = humanChoice.at(0).toUpperCase() + humanChoice.slice(1).toLowerCase(); // make user input case insensitive

    let roundResult = "";
    if (formattedHumanChoice === computerChoice) {
        roundResult = "Draw!";
    }
    else if (formattedHumanChoice === "Rock" && computerChoice === "Scissors" ||
                formattedHumanChoice === "Scissors" && computerChoice === "Paper" ||
                    formattedHumanChoice === "Paper" && computerChoice === "Rock") {
                        humanScore++;
                        roundResult = "You won the round!";
                    }
    else {
        computerScore++;
        roundResult = "You lost the round!"
    }

    // update the DOM
    resultDiv.textContent = 
    `Your Choice: ${humanChoice}, Computer's Choice: ${computerChoice} || ${roundResult}`;

    scoreDiv.textContent = `Your Score: ${humanScore} || Computer Score: ${computerScore}`;

    // check if someone reached 10
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Congratulations! You won the game..." : "You lost the game! Better luck next time...";
        resultDiv.textContent = winner;

        // disable the buttons
        document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    }
}

const buttonRock = document.querySelector("#rock");
buttonRock.addEventListener("click", () => {
    playRound("Rock");
});

const buttonPaper = document.querySelector("#paper");
buttonPaper.addEventListener("click", () => {
    playRound("Paper");
});

const buttonScissors = document.querySelector("#scissors");
buttonScissors.addEventListener("click", () => {
    playRound("Scissors");
});

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#scores p");
