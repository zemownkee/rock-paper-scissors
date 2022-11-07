//declare global variables for tracking plays
let winCount = 0; 
let lossCount = 0;
let victoryCondition;
let roundsPlayed = 0;
let currentSelection;
let playerChoice;

//set document references
const results = document.querySelector('.feedback');
const startButton = document.querySelector('.start-button');
const targets = document.querySelectorAll('.choice');
const targetArray = [...targets];
startButton.addEventListener('click', gameTime);
targets.forEach((target) => target.addEventListener('click', () => {
    playerChoice = target.id;
    playRound();
}));

//format document for in game content
function gameTime() {
    //set page to "game mode"
    startButton.classList.toggle("hidden");
    results.classList.remove("hidden");
    // targets.classList.toggle('hidden');
    targetArray.forEach(item => item.classList.toggle('hidden'));
    results.textContent = 'Choose Your Weapon!';
}

//reset all counters and game variables
function resetGame() {
    winCount = 0; 
    lossCount = 0;
    victoryCondition = undefined;
    roundsPlayed = 0;
    currentSelection = undefined;
    playerChoice = undefined;
    startButton.classList.toggle("hidden")
    targetArray.forEach(item => item.classList.toggle('hidden'));
}

//function to get choice from computer
function getComputerChoice() {
    //random number between 0 and 2
    let opt = Math.floor(Math.random() * 3);
    //get string from random number
    let choice = (opt === 0) ? 'rock' : (opt === 1) ? 'paper' : 'scissors';
    return choice;
}

//declare end of game
function endGame() {
    let gameWinner = (winCount > lossCount) ? 'You won' : (winCount == lossCount) ? "Tie" : "Computer won";
    results.textContent = `${gameWinner}! You won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds.`;
    resetGame();
}

//show results at end offor each round
function showResults (playerChoice, computerChoice) {
        if(victoryCondition === 'Victory!') {
            results.textContent = `You won! ${playerChoice} beats ${computerChoice} 
            \b You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } else if (victoryCondition === 'Defeat :(') {
            results.textContent = `Sorry! You Lost. ${computerChoice} beats ${playerChoice}
            \b You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } else if (victoryCondition === 'Tie') {
            results.textContent = `This round was a tie! 
            \b You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } 
}    


//function that plays one round
function playRound() {
    let computerChoice = getComputerChoice();
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

    //increment counters
    if (victoryCondition === 'Victory!') {
        winCount++;
    } else if (victoryCondition === 'Defeat :(') {
        lossCount++;
    }
    roundsPlayed++;
    
    showResults(playerChoice, computerChoice);

    //check if game is over at end of round
    if(winCount == 3 || lossCount == 3 || roundsPlayed == 5) {
        endGame();
    }
}