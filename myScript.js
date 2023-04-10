let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => addEventListener('click', playRound))

//set up logic for a round
function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice()
    if (playerSelection === '') return;
    result = getResult(playerSelection, computerSelection)
    scoreUpdate(result);

    console.log(`${result.toUpperCase()}. Player chooses ${playerSelection}. Computer chooses ${computerSelection}.`);

}

function scoreUpdate(result){
    let playerScoreBoard = document.getElementById('playerScore');
    let computerScoreBoard = document.getElementById('computerScore');
    if (result === "win"){
        playerScore++;
        console.log(playerScore, computerScore);
        playerScoreBoard.innerText=`${playerScore}`;
    }
    else if (result ==="lose"){
        computerScore++;
        console.log(playerScore, computerScore)
        computerScoreBoard.innerText=`${computerScore}`;
    }
    return;
}
    
function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    }
    else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock")){
        return "win";
    }
    else if (
        (playerSelection === "Scissors" && 
        computerSelection === "Paper")){
        return "win";
    }
        return "lose";
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

function getComputerChoice() {
let choice = ["Rock", "Paper", "Scissors"];
    let i = Math.floor(Math.random() * 3);
    return choice[i];
}