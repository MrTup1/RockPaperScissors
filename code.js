let playerSelection = "rock"

const rock = document.querySelector(`#rock`)
rock.addEventListener('click', ()=> {playerSelection = "rock"})

const paper = document.querySelector(`#paper`)
paper.addEventListener('click', ()=> {playerSelection = "paper"})

const scissors = document.querySelector(`#scissors`)
scissors.addEventListener('click', ()=> {playerSelection = "scissors"})

const buttons = document.querySelectorAll(`button`)
buttons.forEach((button) => {button.addEventListener(`click`, () => {game()})})

var values = ["rock", "paper", "scissors"]

function getComputerChoice() {
    valueToUse = values[Math.floor(Math.random() * values.length)];
    return valueToUse
}

const playerlb = document.querySelector(`#player`)
const computerlb = document.querySelector(`#computer`)
const text = document.querySelector(`#game`)



function round(computerSelection, playerSelection) {
    if (computerSelection == playerSelection) {
        text.textContent = `The round is a draw! Both players drew ${computerSelection}`
        return 0
    } 
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper") ) {
        text.textContent = `You have won the round! ${playerSelection} beats ${computerSelection}`
        
        return 1
    } else {
        text.textContent = `You have lost the round! ${computerSelection} beats ${playerSelection}`
        
        return 2
    }
}



var playerScore = 0
var computerScore = 0  

function game() {


    let j = round(getComputerChoice(), playerSelection)
    if (j == 1) {
        playerScore += 1
        playerlb.textContent = `PlayerScore: ${playerScore}`
    } else if (j == 2){
        computerScore += 1
        computerlb.textContent = `ComputerScore: ${computerScore}`

    }
}
