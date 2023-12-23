//Get a random computer choice between rock, paper, or scissors
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice())

//Play a round of rock paper scissors
function playGame(player, computer){

    if(player === computer){
        return playGame(prompt("Choose your weapon", "rock, paper, or scissors"), getcomputerChoice())
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

const playerChoice = prompt("Choose your weapon", "rock, paper, or scissors");
const computerChoice = getComputerChoice()

console.log(playGame(playerChoice,computerChoice))
