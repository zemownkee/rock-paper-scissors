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
startButton.addEventListener('touchstart', gameTime);
targets.forEach((target) => target.addEventListener('touchstart', () => {
    playerChoice = target.id;
    playRound();
}));
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
    let choice = (opt === 0) ? 'Rock' : (opt === 1) ? 'Paper' : 'Scissors';
    return choice;
}

//declare end of game
function endGame() {
    let gameWinner = (winCount > lossCount) ? 'You won' : (winCount == lossCount) ? "tie" : "Computer won";
    results.innerHTML = `${gameWinner}! <br>You won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds.`;
    resetGame();
}

//show results at end offor each round
function showResults (playerChoice, computerChoice) {
        if(victoryCondition === 'victory') {
            results.innerHTML = `You won! <br>${playerChoice} beats ${computerChoice} 
            <br> You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } else if (victoryCondition === 'defeat') {
            results.innerHTML = `Oof. You Lost.<br> ${computerChoice} beats ${playerChoice}
            <br> You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } else if (victoryCondition === 'tie') {
            results.innerHTML = `This round was a tie! 
            <br> You have won ${winCount} and lost ${lossCount} out of ${roundsPlayed} rounds played. `;
        } 
}    

//function that plays one round
function playRound() {
    let computerChoice = getComputerChoice();
    if(playerChoice === computerChoice){
        victoryCondition = 'tie';
    } else
    if(playerChoice === 'Rock' && computerChoice === 'Scissors') {
        victoryCondition = 'victory';
    } else
    if(playerChoice === 'Paper' && computerChoice === 'Scissors') {
        victoryCondition = 'defeat';
    } else
    if(playerChoice === 'Rock' && computerChoice === 'Paper') {
        victoryCondition = 'defeat';
    } else
    if(playerChoice === 'Scissors' && computerChoice === 'Paper') {
        victoryCondition = 'victory';
    }
    if(playerChoice === 'Scissors' && computerChoice === 'Rock') {
        victoryCondition = 'defeat';
    } else
    if(playerChoice === 'Paper' && computerChoice === 'Rock') {
        victoryCondition = 'victory';
    }

    //increment counters
    if (victoryCondition === 'victory') {
        winCount++;
    } else if (victoryCondition === 'defeat') {
        lossCount++;
    }
    roundsPlayed++;
    
    showResults(playerChoice, computerChoice);

    //check if game is over at end of round
    if(winCount == 3 || lossCount == 3 || roundsPlayed == 5) {
        endGame();
    }
}