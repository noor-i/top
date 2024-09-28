let humanScore = 0
let computerScore = 0
let round = 1

function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    let choice = getRandomInt(3)
    if(choice == 0){
        return "rock"
    }
    if(choice == 1){
        return "paper"
    }
    if(choice == 2){
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Pick one: rock, paper, scissors")

    if(choice.toLowerCase() == "scissors"){
        return "scissors"
    }
    if(choice.toLowerCase() == "rock"){
        return "rock"
    }
    if(choice.toLowerCase() == "paper"){
        return "paper"
    }
    else{
        return "Incorrect selection. Try again."
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice){
        return "it's a tie!"
    }
    if(humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        return "You win! Rock beats Scissors"
    }
    if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return "You lose! Paper beats Rock"
    }
    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        return "You win! Paper beats Rock"
    }
    if(humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        return "You lose! Scissors beats Paper"
    }
    if(humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        return "You lose! Rock beats Scissors"
    }
    if(humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        return "You win! Scissors beats Paper"
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

console.log("Your choice: " + humanSelection)
console.log("Their choice: " + computerSelection)
console.log(playRound(humanSelection, computerSelection))