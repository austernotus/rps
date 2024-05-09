
const rpsChoices = ['rock','paper','scissors']
let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    choice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return choice;
}

function getHumanChoice(){
    let playerChoice = ""
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        console.log("Please choose Rock, Paper or Scissors.")
        playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    }
        return playerChoice;
}

function checkWinner(player,computer){
    if (player == "rock" && computer == "scissors"){
        console.log("You win! Rock beats scissors.")
        humanScore++;
    } else if ( player == "paper" && computer == "rock"){
        console.log("You win! Paper beats rock.")
        humanScore++;
    } else if (player == "scissors" && computer == "paper"){
        console.log("You win! Scissors beats paper.")
        humanScore++;
    } else{
        console.log("You lose! " + computer.charAt(0).toUpperCase() + computer.slice(1) + " beats " + player + "." )
        computerScore++;
    }
}

function playRound(humanChoice,computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    if (computerChoice == humanChoice) {
        console.log("Draw! You both chose " + humanChoice + ".");
    }
    else {
        checkWinner(humanChoice, computerChoice);
    }
}

function playGame(){
    let rounds = 0
    while (rounds <5){
        playRound();
        console.log("Your Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
        rounds++;
    }
    console.log("Game Over! You won " + humanScore + " times out of 5!")

}

playGame()
