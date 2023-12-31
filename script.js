//Get a random computerChoice choice between rock, paper, or scissors
function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
//Play a round of rock paper scissors
function playGame(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return playGame(prompt("Draw! Choose again!"), getComputerChoice()) 
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return `You Win! ${playerChoice} beats ${computerChoice}!` 
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return `You Win! ${playerChoice} beats ${computerChoice}!`
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return `You Win! ${playerChoice} beats ${computerChoice}!`
    }else{
        return `You Lose! ${computerChoice} beats ${playerChoice}!`
    }    
};

//Global Variables for bestFive functions
let roundCounter = 0
let computerScore = 0
let playerScore = 0

//Play rock, paper, scissors five times
function bestFive(){

    roundCounter++
    const playerChoice = prompt("Choose your weapon!", "rock, paper, or scissors");
    const computerChoice = getComputerChoice()
    const round = playGame(playerChoice, computerChoice)
    
    if(round === `You Lose! ${computerChoice} beats ${playerChoice}!`){
        computerScore++
    }else{
        playerScore++
    }

    if(roundCounter < 5){
        return bestFive()
    }

    if(playerScore > computerScore){
        message = `You Win!\n
        You: ${playerScore} | Computer: ${computerScore}`

        return message
    }else{
        message = `Computer Wins!\n
        Computer: ${computerScore} | You: ${playerScore}`

        return message
    }

}

console.log(bestFive())

