//Get a random computerChoice choice between rock, paper, or scissors
function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    let randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}
//Play a game of rock paper scissors
function playGame(playerChoice, computerChoice){

    if(playerChoice === computerChoice){
        return playGame(prompt("Draw! Choose again!").toLowerCase(), getComputerChoice()) 
    }else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return `You Win! ${playerChoice} beats ${computerChoice}!`;
    }else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return `You Win! ${playerChoice} beats ${computerChoice}!`;
    }else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return `You Win! ${playerChoice} beats ${computerChoice}!`;
    }else{
        return `You Lose! ${computerChoice} beats ${playerChoice}!`;
    }    
}

//Global Variables for playFiveGames function
let numberOfGames = 0;
let computerScore = 0;
let playerScore = 0;

//Determine the winner and display message
function showVictor(){
    if(playerScore > computerScore){
        message = `You Win!\nYou: ${playerScore} | Computer: ${computerScore}`;
        return message;
    }else{
        message = `Computer Wins!\nComputer: ${computerScore} | You: ${playerScore}`;
        return message;
    }
}

//Play rock, paper, scissors five times
function playFiveGames(){

    numberOfGames++;
    const playerChoice = prompt("Choose your weapon!", "rock, paper, or scissors").toLowerCase();
    const computerChoice = getComputerChoice();
    const round = playGame(playerChoice, computerChoice);
    
    if(round === `You Lose! ${computerChoice} beats ${playerChoice}!`){
        computerScore++;
    }else{
        playerScore++;
    }

    if(numberOfGames < 5){
        return playFiveGames();
    }
    return showVictor();
}

console.log(playFiveGames());

