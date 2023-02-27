let playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();
let computerSelection = getComputerChoice();


function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random()*3);
    return choice[i];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw";
    } 
    else if (
        (playerSelection === "rock"  && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection ==="paper")
        ){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));