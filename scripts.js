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
    //initialize variables needed outside of round
    let winCount = 0; 
    let lossCount = 0;
    let victoryCondition;
    let roundsPlayed = 0;

    //define a function that plays one round
    function playRound() {
        //get choice from player and computer
        playerChoice = prompt("Select your weapon: Rock, Paper, or Scissors?");
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
            alert(`You won! ${playerChoice} beats ${computerChoice}`);
        } else if (victoryCondition === 'Defeat :(') {
            alert(`Sorry! You Lost. ${computerChoice} beats ${playerChoice}`);
        } else if (victoryCondition === 'Tie') {
            alert(`This round was a tie!`);
        }
    }

    //for loop to play five rounds
    for(; roundsPlayed < 5; roundsPlayed++){
      playRound()
        if (victoryCondition === 'Victory!') {
            winCount++;
        } else if (victoryCondition === 'Defeat :(') {
            lossCount++;
        }
        //ends game loop if 'best of 5' conditions are met
        if(winCount == 3 || lossCount == 3) break;
    }

//Message to declare a winner of the full game
let gameWinner = (winCount > lossCount) ? 'You won' : (winCount == lossCount) ? "Tie" : "Computer won";
alert(`${gameWinner}! You won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds.`);

//Ask user to play again?
if(confirm("Would you like to play again?")) {
    location.reload();
}
}

game();