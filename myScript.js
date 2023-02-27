let playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();
let computerSelection = getComputerChoice();


function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random()*3);
    return choice[i];
}
console.log(playerSelection);
console.log(computerSelection);