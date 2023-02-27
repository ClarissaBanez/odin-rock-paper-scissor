//get input from user and make it case-insensitive
let playerSelection = (prompt("Rock, Paper or Scissors?")).toUpperCase();
let computerSelection = getComputerChoice();

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
        return "draw";
    } 
    else if (
        (playerSelection === "ROCK"  && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK")){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            return "win";
        }
    else if (
        (playerSelection === "SCISSORS" && computerSelection ==="PAPER")
    ){
        console.log(`You win! ${playerSelection} beat ${computerSelection}.`); //to make the it grammatically correct
        return "win";
    }
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return "lose";
}
console.log(playerSelection, computerSelection);
playRound(playerSelection,computerSelection);

//5 round-game mechanic
//make variables for playerScore and computerScore
//max round is 5
//if player reaches 3, winner.
