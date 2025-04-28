'use strict'

let humanScore = 0;
let computerScore = 0;
let round = 0;
let handleOptionClick = null;

function getComputerChoice() {
    const computerImage = document.querySelector('#computer-choice img');
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            computerImage.src = 'images/rock.jpg';
            return 'rock';
        case 1:
            computerImage.src = 'images/paper.jpg';
            return 'paper';
        case 2:
            computerImage.src = 'images/scissor.jpg';
            return 'scissor';
    }
}

function getHumanChoice(callback) {
    const humanOptions = document.querySelector('#human-options');
    handleOptionClick = (event) => {
        let target = event.target;

        switch (target.id) {
            case 'rock':
            case 'paper':
            case 'scissor':
                callback(target.id);
                break;
            default:
                break;
        }
    }
    humanOptions.addEventListener('click', handleOptionClick);
}

function removeHumanChoice(){
    const humanOptions = document.querySelector('#human-options');
    humanOptions.removeEventListener('click', handleOptionClick);
    handleOptionClick = null;
}

function handleHumanChoice(humanChoice) {
    playRound(humanChoice);
}

function playRound(humanChoice){
    let computerChoice = getComputerChoice();

    if (humanChoice == 'rock' && computerChoice == 'paper' ||
        humanChoice == 'paper' && computerChoice == 'scissor' ||
        humanChoice == 'scissor' && computerChoice == 'rock') {computerScore++}
    
    else if (computerChoice == 'rock' && humanChoice == 'paper' ||
        computerChoice == 'paper' && humanChoice == 'scissor' ||
        computerChoice == 'scissor' && humanChoice == 'rock') {humanScore++}

    round++;

    displayValues(humanScore, computerScore, round);
    if (round == 5) removeHumanChoice();

}

function displayValues(humanScore, computerScore, round) {
    const roundDisplay = document.querySelector('#round h2');
    const humanScoreDisplay = document.querySelector('#human-score #value');
    const computerScoreDisplay = document.querySelector('#computer-score #value');

    roundDisplay.textContent = round;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}


getHumanChoice(handleHumanChoice);