let playerScore = 0;
let computerScore = 0;
let round = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))

//set up logic for a round
function playRound(e) {
    round ++;
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice()
    // if (!playerSelection) return;
    result = getResult(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection, resultString);
    scoreUpdate(result);
    checkWinner(playerScore, computerScore);
}

function displayResults(playerSelection, computerSelection, resultString){
    playerChoice = document.getElementById('playerChoice');
    computerChoice = document.getElementById('computerChoice');
    roundResult = document.getElementById('roundResult');

    playerChoice.innerText = `Player chooses ${playerSelection}.`;
    computerChoice.innerText = `Computer chooses ${computerSelection}.`;
    roundResult.innerText += `Round ${round}: ${resultString}\n`;
}
function scoreUpdate(result){
    let playerScoreBoard = document.getElementById('playerScore');
    let computerScoreBoard = document.getElementById('computerScore');
    if (result === "win"){
        playerScore++;
        playerScoreBoard.innerText=`${playerScore}`;
    }
    else if (result ==="lose"){
        computerScore++;
        computerScoreBoard.innerText=`${computerScore}`;
    }
    return;
}
    
function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultString = "It's a draw!";
        return "draw";
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock")
        ){
        resultString = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`
        return "win";
    }
    else if (
        (playerSelection === "Scissors" && 
        computerSelection === "Paper")){
        resultString = `You win! ${playerSelection} beat ${computerSelection.toLowerCase()}.`
        return "win";
    }
    resultString = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`    
    return "lose";
}

function checkWinner(playerScore, computerScore) {
    if (playerScore < computerScore && computerScore === 5) {
        console.log("You lost the game!");
    }
    else if (playerScore > computerScore && playerScore === 5){
        console.log("You won the game")
    }
    return;
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

function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}