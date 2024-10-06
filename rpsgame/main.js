function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    let choice = getRandomInt(3)
    if (choice == 0) {
        return "Rock"
    }
    if (choice == 1) {
        return "Paper"
    }
    if (choice == 2) {
        return "Scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    const A = "Rock";
    const B = "Paper";
    const C = "Scissors";

    if (humanChoice == computerChoice) {
        return "it's a tie!";
    }
    if (humanChoice == A && computerChoice == C) {
        //humanScore++
        return "You win! Rock beats Scissors";
    }
    if (humanChoice == A && computerChoice == B) {
        //computerScore++
        return "You lose! Paper beats Rock";
    }
    if (humanChoice == B && computerChoice == A) {
        //humanScore++
        return "You win! Paper beats Rock";
    }
    if (humanChoice == B && computerChoice == C) {
        //computerScore++
        return "You lose! Scissors beats Paper";
    }
    if (humanChoice == C && computerChoice == A) {
        //computerScore++
        return "You lose! Rock beats Scissors";
    }
    if (humanChoice == C && computerChoice == B) {
        //humanScore++
        return "You win! Scissors beats Paper";
    }
};

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '10px';
buttonContainer.style.marginBottom = '10px';

const rockButton = document.createElement('button');
rockButton.textContent = "Rock";
const paperButton = document.createElement('button');
paperButton.textContent = "Paper";
const scissorsButton = document.createElement('button');
scissorsButton.textContent = "Scissors";

buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);
document.body.appendChild(buttonContainer);

const scoreBoard = document.createElement('div');
scoreBoard.style.display = 'flex';
scoreBoard.style.justifyContent = 'center';
scoreBoard.style.gap = '140px';
scoreBoard.style.backgroundColor = 'gray';
document.body.appendChild(scoreBoard);

// Create score elements
const humanScore = document.createElement('h2');
humanScore.textContent = `You: ${humanScore}`;
scoreBoard.appendChild(humanScore);

const computerScore = document.createElement('h2');
computerScore.textContent = `Computer: ${computerScore}`;
scoreBoard.appendChild(computerScore);

buttonContainer.addEventListener('click', (event) => {
    let round = 1;
    
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();

    console.log(`Round: ${round}`);
    console.log("Your choice: " + humanChoice);
    console.log("Their choice: " + computerChoice);
    console.log(playRound(humanChoice, computerChoice));
});

/*
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
*/