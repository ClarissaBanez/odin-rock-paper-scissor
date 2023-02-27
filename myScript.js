function getComputerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let i = Math.floor(Math.random()*3);
    return choice[i];
}

function getPlayerChoice(){
    return prompt("Rock, Paper or Scissors?").toUpperCase(); //get input from user and make it case-insensitive
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
        else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            return  "lose";}
}

function getWinner(playerScore, computerScore){
    if (playerScore > computerScore){
        console.log("You won the game!");
    }
    else if (playerScore < computerScore){
        console.log("You lost the game!");
    }
    else
        console.log("It's a draw!")
}

function game(){
    let playerScore = 0
    let computerScore = 0
    for (let round = 1; round < 6; round++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice(); //generate random choice for computer
        console.log(`Round ${round}, Player: ${playerSelection}, Computer ${computerSelection}`)
        let result = playRound(playerSelection,computerSelection);
            if  (result=== "win") {
                playerScore++;             
            }
            else if (result === "lose") {
                computerScore++;
            }
        console.log(`Score: ${playerScore}-${computerScore}`)
    }
    getWinner(playerScore, computerScore);
}
game();