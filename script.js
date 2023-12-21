function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice())

function playGame(){
    let playerChoice = 'paper';
    let computerChoice = getComputerChoice()

    if(playerChoice === computerChoice){
        return 'Draw' 
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return `You Win! ${playerChoice} beats ${computerChoice}` 
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }else
        return `You Lose ${computerChoice} beats ${playerChoice}`
    
};