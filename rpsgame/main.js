function getRandomInt(max){
    return Math.floor(Math.random() * max);
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

console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())

function getHumanChoice(){
    let choice = prompt("Enter a number: (1) rock, (2) paper, (3) scissors")
    if (choice > 3 || choice < 1){
        return "Incorrect selection. Try again."
    }
    if(choice == 1){
        return "rock"
    }
    if(choice == 2){
        return "paper"
    }
    if(choice == 3){
        return "scissors"
    }
}

console.log(getHumanChoice())
