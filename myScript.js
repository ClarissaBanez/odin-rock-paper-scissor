//get input from user and make it case-insensitive

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
            return  "lose";
        }
// let playerSelection = (prompt("Rock, Paper or Scissors?")).toUpperCase();
// let computerSelection = getComputerChoice();//generate randow choice for computer
function getPlayerChoice(){
    prompt("Rock, Paper or Scissors?").toUpperCase();
}

function getComputerChoice(){
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let i = Math.floor(Math.random()*3);
            return choice[i];
}
        
        //5 round-game mechanic
        //make variables for playerScore and computerScore
        //max round is 5
        //if player reaches 3, winner.
        //         function game(){
            //             let playerScore = 0
            //             let computerScore = 0
            //             for (let round = 1; round < 6; round++){
                //                 playRound()
                //                 if  (playRound === "win") {
                    //             playerScore++;             
                    //         }
                    //         else if (playRound === "lose") {
                        //             computerScore++;
                        //         }
                        //         console.log(`Round ${round}, Player: ${playerScore}, Computer ${computerScore}`)
                        //     }
                        // }
                        