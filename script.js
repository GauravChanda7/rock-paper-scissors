'use strict'

let computerScore = 0;
let humanScore = 0;
let rounds = 1;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (randomNum) {
        case 0:
            computerChoice = 'rock';
            break;
        
        case 1:
            computerChoice = 'paper';
            break;

        case 2:
            computerChoice = 'scissor'
            break;

        default:
            computerChoice = '';
            break;
    }

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt('Enter: Rock, Paper or Scissor', '');
    humanChoice = humanChoice.toLowerCase().trim();

    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissor'){
        return humanChoice;
    } else {
        alert('Enter choice correctly');
        return '';
    }
}

function title(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function resultMessage(firstChoice, secondChoice){
    return `${title(firstChoice)} beats ${title(secondChoice)}`;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    while (humanChoice === ''){
        humanChoice = getHumanChoice();
    }

    if (computerChoice === 'rock' && humanChoice === 'scissor'){
        computerScore++;
        console.log(`You loose! ${resultMessage(computerChoice, humanChoice)}`);
    } else if (computerChoice === 'scissor' && humanChoice === 'paper'){
        computerScore++;
        console.log(`You loose! ${resultMessage(computerChoice, humanChoice)}`);
    } else if (computerChoice === 'paper' && humanChoice === 'rock'){
        computerScore++;
        console.log(`You loose! ${resultMessage(computerChoice, humanChoice)}`);
    } else{
        humanScore++;
        console.log(`You win! ${resultMessage(computerChoice, humanChoice)}`);
    }
}


function playGame(rounds){
    while (rounds <= 5){
        console.log(`Round: ${rounds}`)
        playRound();
        console.log(`You: ${humanScore} | Computer: ${computerScore}`);
        rounds++;
    }
}

playGame(rounds);