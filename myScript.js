const buttons = document.querySelectorAll('button');
const results = document.createElement('div');
buttons.forEach(button => addEventListener('click', playRound))

document.body.appendChild(results);

function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}

//set up logic for a round
function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice()
    if (e.target.id === '') return;
    results.innerText = ""

    console.log(`Player: ${playerSelection} Computer: ${computerSelection}`);
    if (playerSelection === computerSelection) {
        results.innerText = "It's a draw!"
        return "draw";
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock")) {
        // console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        results.innerText = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`
        return "win";
    }
    else if (
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        // console.log(`You win! ${playerSelection} beat ${computerSelection}.`); //to make the it grammatically correct
        results.innerText = `You win! ${playerSelection} beat ${computerSelection.toLowerCase()}.`
        return "win";
    }
    else {
        // console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        results.innerText = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`
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