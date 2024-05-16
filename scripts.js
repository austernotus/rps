
const rpsChoices = ['rock','paper','scissors']
let humanScore = 0
let computerScore = 0
let rounds = 0
let resetButton = document.getElementById("resetButton")

const rockButton = document.getElementById("Rock")
const paperButton = document.getElementById("Paper")
const scissorsButton = document.getElementById("Scissors")
const roundWinnerText = document.getElementById("roundWinner")
const humanScoreText = document.getElementById("humanScore")
const computerScoreText = document.getElementById("computerScore")
const divOne = document.querySelector("div")

rockButton.addEventListener("click", () => playRound("rock"))
paperButton.addEventListener("click", () => playRound("paper"))
scissorsButton.addEventListener("click", () => playRound("scissors"))

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
        roundWinnerText.textContent = "You win! Rock beats scissors."
        humanScore++;
        humanScoreText.textContent = "Your Score: " + humanScore;
    } else if ( player == "paper" && computer == "rock"){
        roundWinnerText.textContent = "You win! Paper beats rock."
        humanScore++;
        humanScoreText.textContent = "Your Score: " + humanScore;
    } else if (player == "scissors" && computer == "paper"){
        roundWinnerText.textContent = "You win! Scissors beats paper."
        humanScore++;
        humanScoreText.textContent = "Your Score: " + humanScore;
    } else{
        roundWinnerText.textContent ="You lose! " + computer.charAt(0).toUpperCase() + computer.slice(1) + " beats " + player + "."
        computerScore++;
        computerScoreText.textContent = "Computer Score: " + computerScore;
    }
    checkGameOver();
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();
    if (computerChoice == humanChoice) {
        roundWinnerText.textContent = "Draw! You both chose " + humanChoice + ".";
    }
    else {
        checkWinner(humanChoice, computerChoice);
    }
}

function checkGameOver(){
    rounds++;
    if (rounds === 5){
        if (humanScore > computerScore){
            alert("Game Over! You won! With " + humanScore + " wins vs their " + computerScore + " wins.")
            humanScoreText.textContent = "👑 " + humanScoreText.textContent 
        }
        else if (computerScore > humanScore){
            alert("Game Over! You lost! With " + humanScore + " wins vs their " + computerScore + " wins.")
            computerScoreText.textContent = "👑 " + computerScoreText.textContent 
        }
        else{
            alert("It's a draw! You both won " + computerScore + " times.")
        }
        
        if (resetButton === null){
            resetButton = document.createElement("button")
            resetButton.textContent = "Reset"
            resetButton.addEventListener("click", () => resetGame())
            divOne.append(resetButton);
        }
        else{
        }
        rockButton.style.display = "none";
        paperButton.style.display = "none";
        scissorsButton.style.display = "none";
    }
}



function resetGame(){
    humanScore = 0
    computerScore = 0
    rounds = 0

    rockButton.style.display = "inline-block";
    paperButton.style.display = "inline-block";
    scissorsButton.style.display = "inline-block";

    humanScoreText.textContent = "Your Score: 0"
    computerScoreText.textContent = "Your Score: 0"


}
