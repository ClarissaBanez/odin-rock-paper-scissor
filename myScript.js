//To-Dos: Add clicking animations to buttons.

let playerScore = 0;
let computerScore = 0;
let round = 0;
const playerInput = document.querySelectorAll('.playerInput');
playerInput.forEach(button => button.addEventListener('click', playRound))

function playRound(e) {
    round ++;
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice()
    let result = getResult(playerSelection, computerSelection);
    scoreUpdate(result);
    displayResults(playerSelection, computerSelection, resultString);
    checkWinner(playerScore, computerScore);
}

function displayResults(playerSelection, computerSelection, resultString){
    let playerChoice = document.getElementById('playerChoice');
    let computerChoice = document.getElementById('computerChoice');
    let roundResult = document.getElementById('roundResult');

    playerChoice.innerText = `Player chooses ${playerSelection}.`;
    computerChoice.innerText = `Computer chooses ${computerSelection}.`;
    roundResult.innerText += `Round ${round}: ${resultString}\n`;
}
function scoreUpdate(result){
    let playerScoreBoard = document.getElementById('playerScore');
    let computerScoreBoard = document.getElementById('computerScore');
    if (result === "win"){
        playerScore++;
    }
    else if (result ==="lose"){
        computerScore++;
    }
    computerScoreBoard.innerText=`${computerScore}`;
    playerScoreBoard.innerText=`${playerScore}`;
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
        gameOver("You lost the game!")
    }
    else if (playerScore > computerScore && playerScore === 5){
        gameOver("You won the game!");
    }
    return;
}

function gameOver(gameOverMessage){
    let gameResult = document.getElementById('gameResult');
    let resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', gameReset)
    resetButton.style.display = "block";
    gameResult.innerText = gameOverMessage;
    playerChoice.innerText = "";
    computerChoice.innerText = "";
    playerInput.forEach(button => button.style.display="none");//removes the play input buttons
}
function gameReset(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    scoreUpdate();
    playerChoice.innerText = "";
    computerChoice.innerText = "";
    roundResult.innerText= "";
    gameResult.innerText = "";
    resetButton.style.display = "none";
    playerInput.forEach(button => button.style.display="block");
}
function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}