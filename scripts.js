//function to get choice from computer
function getComputerChoice() {
    //random number between 0 and 2
    let opt = Math.floor(Math.random() * 3);
    //get string from random number
    let choice = (opt === 0) ? 'rock' : (opt === 1) ? 'paper' : 'scissors';
    return choice;
}

//define a function that plays multiple rounds
function game() {

    //initialize variables needed in outside of round
    let winCount = 0; 
    let lossCount = 0;
    let victoryCondition;

    //define a function that plays one round
    function playRound(playerChoice, computerChoice) {

        //get choice from player and computer
        playerChoice = prompt("Select your weapon: Rock, Paper, or Scissors?");

        if (playerChoice === null) {
            alert('Pick something or you break it all :(');
            playRound();
        }

        playerChoice = playerChoice.toLowerCase();

        //game logic
        if (playerChoice === 'rock' || playerChoice ==='paper' || playerChoice === 'scissors') {
            computerChoice = getComputerChoice();
            if(playerChoice === computerChoice){
                victoryCondition = 'Tie';
            } else
            if(playerChoice === 'rock' && computerChoice === 'scissors') {
                victoryCondition = 'Victory!';
            } else
            if(playerChoice === 'paper' && computerChoice === 'scissors') {
                victoryCondition = 'Defeat :(';
            } else
            if(playerChoice === 'rock' && computerChoice === 'paper') {
                victoryCondition = 'Defeat :(';
            } else
            if(playerChoice === 'scissors' && computerChoice === 'paper') {
                victoryCondition = 'Victory!';
            }
            if(playerChoice === 'scissors' && computerChoice === 'rock') {
                victoryCondition = 'Defeat :(';
            } else
            if(playerChoice === 'paper' && computerChoice === 'rock') {
                victoryCondition = 'Victory!';
            }
        //condition for invalid input
        } else {
            alert("You have not entered a valid answer");
            return playRound();
        }
        
        //console log for dynamic string that fills in choices plus result
        if(victoryCondition === 'Victory!') {
            console.log(`You won! ${playerChoice} beats ${computerChoice}`);
        } else if (victoryCondition === 'Defeat :(') {
            console.log(`Sorry! You Lost. ${computerChoice} beats ${playerChoice}`);
        } else if (victoryCondition === 'Tie') {
            console.log(`This round was a tie!`);
        }
    }

    //for loop to play five rounds
    for(let i = 0; i < 5; i++){
      playRound()
        
        if (victoryCondition === 'Victory!') {
            winCount++;
        } else if (victoryCondition === 'Defeat :(') {
            lossCount++;
        }
    }

//Message to declare a winner of the full game
let gameWinner = (winCount > lossCount) ? 'You' : (winCount == lossCount) ? "Tie" : "Computer";
console.log(`${gameWinner} won! You won ${winCount} and lost ${lossCount} out of 5 rounds.`);

//Ask user to play again?
if(confirm("Would you like to play again?")) {
    game();
}
}

game()