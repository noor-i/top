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
        console.log("Try again.")
        return getHumanChoice()
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    let round = 1

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
    while(round < 6){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        
        let intro = `Round: ${round}`
        console.log(intro)
        console.log("Your choice: " + humanSelection)
        console.log("Their choice: " + computerSelection)
        console.log(playRound(humanSelection, computerSelection))
        round++
    }

    if(humanScore > computerScore){
        console.log("****You won the game!****")
    }
    if(humanScore < computerScore){
        console.log("****You lost the game!****")
    }
    else{
        console.log("****The game is a tie.****")
    }
    let result = `Game over! Your score: ${humanScore}, Computer score: ${computerScore}`
    console.log(result) 
}

playGame()