let playerScore = 0
let computerScore = 0

const choice = document.querySelectorAll('#rps');
const result = document.querySelector('.result');
const restart = document.querySelector('#restart');
const score = document.querySelector('.score');
gameStart()
scoreUpdate()

function computerPlay() {
    let choice = Math.floor(Math.random() * (3) + 1)
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function rps(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = `You Lost! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
        scoreUpdate();
    } else if (playerSelection === computerSelection) {
        result.textContent = 'Its a draw!';
    } else {
        result.textContent = `You won! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
        scoreUpdate();
    }
}

function gameStart() {
    playerScore = 0;
    computerScore = 0;
    choice.forEach(choice => {
        choice.disabled = false;
    });
    restart.style.visibility = 'hidden';
    restart.disabled = true;
    result.textContent = "";
    score.textContent = `${playerScore} - ${computerScore}`;
}

function gameEnd() {
    choice.forEach(choice => {
        choice.disabled = true;
    });
    restart.style.visibility = 'visible';
    restart.disabled = false;
}

function scoreUpdate() {
    if (playerScore == 5) {
        score.textContent = "Wanna play again?";
        gameEnd();
    } else if (computerScore == 5) {
        score.textContent = "Wanna play again?";
        gameEnd();
    } else {
        score.textContent = `${playerScore} - ${computerScore}`;
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    rps(playerSelection, computerSelection)
}

choice.forEach(choice => {
    choice.addEventListener('click', () => {
        playRound(choice.textContent);
    })
});

restart.addEventListener('click', gameStart);