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
    result = getResult(playerSelection, computerSelection);
    scoreUpdate(result);
    displayResults(playerSelection, computerSelection, resultString);
    checkWinner(playerScore, computerScore);

    // if checkwinner 
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
    playerScoreBoard = document.getElementById('playerScore');
    computerScoreBoard = document.getElementById('computerScore');
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
    gameResult = document.getElementById('gameResult');
    if (playerScore < computerScore && computerScore === 5) {
        gameResult.innerText = "You lost the game!";
        console.log("You lost the game!");
        gameReset();
    }
    else if (playerScore > computerScore && playerScore === 5){
        gameResult.innerText = "You won the game!"
        console.log("You won the game");
        gameReset();
    }
    return false;
}

function gameReset(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    // playerScoreBoard.innerText=`${playerScore}`;
    // computerScoreBoard.innerText=`${computerScore}`;
    roundResult.innerText=""
}
function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}