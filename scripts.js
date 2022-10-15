//Ask user to play game?

//get choice from computer
function getComputerChoice() {
    //random number between 0 and 2
    let opt = Math.floor(Math.random() * 3);
    //get string from random number
    let choice = (opt === 0) ? 'rock' : (opt === 1) ? 'paper' : 'scissors';
    return choice;
}

//define a function that plays one round
function playRound() {
    //get choice from player and computer
    let playerChoice = prompt("Select your weapon: Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice ==='paper' || playerChoice === 'scissors') {
        let computerChoice = getComputerChoice();
        if(playerChoice === computerChoice){
            return 'Tie';
        } else
        if(playerChoice === 'rock' && computerChoice === 'scissors') {
            return 'Victory!';
        } else
        if(playerChoice === 'paper' && computerChoice === 'scissors') {
            return 'Defeat :(';
        } else
        if(playerChoice === 'rock' && computerChoice === 'paper') {
            return 'Defeat :(';
        } else
        if(playerChoice === 'scissors' && computerChoice === 'paper') {
            return 'Victory!';
        }
        if(playerChoice === 'scissors' && computerChoice === 'rock') {
            return 'Defeat :(';
        } else
        if(playerChoice === 'paper' && computerChoice === 'rock') {
            return 'Victory!';
        }
    } else {
        console.log("You have not entered a valid answer");
    }
    //console log for dynamic string that fills in choices plus result
}
//define a function that plays multiple rounds

function game() {

    //define variable for win count
    //for loop    
    for(let i = 0; i < 5; i++){
       console.log(playRound());
    }

}

//Ask user to play again?

