//Get a random computer choice between rock, paper, or scissors
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice())

const playerChoice = prompt("Choose your weapon!\n", "rock, paper, or scissors");
const computerChoice = getComputerChoice()

//Play a round of rock paper scissors
function playGame(player, computer){

    if(player === computer){
        return playGame(prompt("Draw! Choose new weapon!\n", "rock, paper, or scissors"), getComputerChoice())
    }else if(player === 'rock' && computer === 'scissors'){
        return `You Win! ${player} beats ${computer}` 
    }else if(player === 'scissors' && computer === 'paper'){
        return `You Win! ${player} beats ${computer}`
    }else if(player === 'paper' && computerChoice === 'rock'){
        return `You Win! ${player} beats ${computer}`
    }else{
        return `You Lose! ${computer} beats ${player}`
    }
    
}

let computerScore = 0
let playerScore = 0
let scoreBoard = [];
let x = 0

function fiveGames(player, computer){
  
    if(x < 5){
        x++
        if(playGame(player, computer)===`You Lose! ${computer} beats ${player}`){
            computerScore++
            fiveGames(prompt("Choose your weapon!\n", "rock, paper, or scissors"),getComputerChoice())
        }else{
            playerScore++
            fiveGames(prompt("Choose your weapon!\n", "rock, paper, or scissors"),getComputerChoice())
        }
    }else if(computerScore < playerScore){ 
        return `You win!`
    }
    else{
        return `Computer Wins!`
    }
}

console.log(fiveGames(playerChoice, computerChoice)) 
