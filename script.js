//Get a random computer choice between rock, paper, or scissors
function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
console.log(getComputerChoice())


//Play a round of rock paper scissors
function playGame(){
    let playerChoice = prompt("Choose your weapon", "rock, paper, or scissors");
    let computerChoice = getComputerChoice()

    if(playerChoice === computerChoice){
        return playGame() 
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return `You Win! ${playerChoice} beats ${computerChoice}` 
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return `You Win! ${playerChoice} beats ${computerChoice}`
    }else
        return `You Lose! ${computerChoice} beats ${playerChoice}`
    
};

