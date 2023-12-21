//Get a random computer choice between rock, paper, or scissors
function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice())

let playerChoice = prompt("Choose your weapon", "rock, paper, or scissors");
let computerChoice = getComputerChoice()

//Play a round of rock paper scissors
function playGame(player, computer){

    if(player === computer){
        return playGame() 
    }else if(player === 'rock' && computer === 'scissors'){
        return `You Win! ${player} beats ${computer}` 
    }else if(player === 'scissors' && computer === 'paper'){
        return `You Win! ${player} beats ${computer}`
    }else if(player === 'paper' && computerChoice === 'rock'){
        return `You Win! ${player} beats ${computer}`
    }else{
        return `You Lose! ${computer} beats ${player}`
    }
    
};

