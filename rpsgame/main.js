let humanScore = 0;
let computerScore = 0;
let round = 1;

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
        return "It's a tie!";
    }
    if (humanChoice == A && computerChoice == C) {
        return "You win! Rock beats Scissors";
    }
    if (humanChoice == A && computerChoice == B) {
        return "You lose! Paper beats Rock";
    }
    if (humanChoice == B && computerChoice == A) {
        return "You win! Paper beats Rock";
    }
    if (humanChoice == B && computerChoice == C) {
        return "You lose! Scissors beats Paper";
    }
    if (humanChoice == C && computerChoice == A) {
        return "You lose! Rock beats Scissors";
    }
    if (humanChoice == C && computerChoice == B) {
        return "You win! Scissors beats Paper";
    }
};

function winnerCheck(result){
    if(result.substring(0, 8) == "You win!"){
        return humanScore++;
    }
    if(result.substring(0, 9) == "You lose!"){
        return computerScore++;
    }
}

function gameLoop(humanScore, computerScore) {
    if (humanScore >= 5 || computerScore >= 5) {
        buttonContainer.querySelectorAll('button').forEach(button => button.disabled = true);
        if (humanScore > computerScore) {
            const msg1 = document.createElement('h3');
            msg1.textContent = '****Game over! You won the game!****';
            document.body.appendChild(msg1);
        }
        if (humanScore < computerScore) {
            const msg2 = document.createElement('h3');
            msg2.textContent = '****Game over! You lost the game!****';
            document.body.appendChild(msg2);
        }
    }
}

// Score Display Board
const scoreBoard = document.createElement('div');
scoreBoard.style.display = 'flex';
scoreBoard.style.justifyContent = 'center';
scoreBoard.style.gap = '140px';
scoreBoard.style.backgroundColor = 'pink';
scoreBoard.style.borderRadius = '7px'

// Create score elements
const human = document.createElement('h2');
human.textContent = `You: ${humanScore}`;
const computer = document.createElement('h2');
computer.textContent = `Computer: ${computerScore}`;

document.body.appendChild(scoreBoard);
scoreBoard.appendChild(human);
scoreBoard.appendChild(computer);

//Round and Player Selection Display Board
function createRoundBoard(round, humanChoice, computerChoice, result){
    const roundBoard = document.createElement('div');
    roundBoard.style.display = 'flex';
    roundBoard.style.gap = '40px';
    const roundTitle = document.createElement('h3');
    roundTitle.style.color = 'gray';
    const score1 = document.createElement('h3');
    const score2 = document.createElement('h3');
    const detail = document.createElement('h3');

    roundTitle.textContent = `Round: ${round}`;
    score1.textContent= `Your choice: ${humanChoice}`;
    score2.textContent= `Computer choice: ${computerChoice}`;
    detail.textContent= result;

    document.body.appendChild(roundBoard);
    roundBoard.appendChild(roundTitle);
    roundBoard.appendChild(score1)
    roundBoard.appendChild(score2);
    roundBoard.appendChild(detail);
}

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.gap = '15px';
buttonContainer.style.margin = '10px';

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

buttonContainer.addEventListener('click', (event) => {
    let humanChoice = event.target.textContent;
    let computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    winnerCheck(result); // updates scores
    human.textContent = `You: ${humanScore}`;
    computer.textContent = `Computer: ${computerScore}`;
    createRoundBoard(round, humanChoice, computerChoice, result);
    round++;
    gameLoop(humanScore, computerScore);
});
