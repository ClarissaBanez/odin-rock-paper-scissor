//get input from user and make it case-insensitive
let playerSelection = (prompt("Rock, Paper or Scissors?")).toUpperCase();
let computerSelection = getComputerChoice();
let result = ""
let playerScore = 0
let computerScore = 0
//generate randow choice for computer
function getComputerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let i = Math.floor(Math.random()*3);
    return choice[i];
}

//set up logic for a round
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        console.log("Draw.");
        return result = "draw";
    } 
    else if (
        (playerSelection === "ROCK"  && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK")){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return result = "win";
        }
    else if (
        (playerSelection === "SCISSORS" && computerSelection ==="PAPER")
    ){
        console.log(`You win! ${playerSelection} beat ${computerSelection}.`); //to make the it grammatically correct
        return result = "win";
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return result = "lose";
}

//5 round-game mechanic
//make variables for playerScore and computerScore
//max round is 5
//if player reaches 3, winner.
function game(){
    for (let round = 1; round < 6; round++){

        if  (result === "win") {
            playerScore++;             
        }
        else if (result === "lose") {
            computerScore++;
        }
        console.log(`Round ${round}, Player: ${playerScore}, Computer ${computerScore}`)
    }
}
