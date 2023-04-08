let buttons = document.querySelectorAll('button');
buttons.forEach(button => addEventListener('click', playRound))

const results = document.createElement('div');
results.innerText = "Round Results: "
document.body.appendChild(results);

function getComputerChoice() {
let choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

//set up logic for a round
function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice()

    console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("Draw.");
        return "draw";
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return "win";
    }
    else if (
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beat ${computerSelection}.`); //to make the it grammatically correct
        return "win";
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return "lose";
    }
}


function getWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lost the game!");
    }
    else
        console.log("It's a draw!")
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let round = 1; round < 6; round++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(); //generate random choice for computer
        console.log(`Round ${round}, Player: ${playerSelection}, Computer ${computerSelection}`)
        let result = playRound(playerSelection, computerSelection);
        if (result === "win") {
            playerScore++;
        }
        else if (result === "lose") {
            computerScore++;
        }
        console.log(`Score: ${playerScore}-${computerScore}`)
    }
    getWinner(playerScore, computerScore);
};