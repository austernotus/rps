
const rpsChoices = ['rock','paper','scissors']

function getComputerChoice(){
    choice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    return choice;
}

console.log(getComputerChoice())