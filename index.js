const optionBtn = document.querySelectorAll('section.optionBtn button');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector("#computerScore"); 
const roundResult = document.querySelector("#roundResult"); 
const resetPlay = document.querySelector("#reset")



let humanScore = 0;
let computerScore = 0;

resetPlay.addEventListener('click',() => location.reload())
optionBtn.forEach(button => button.addEventListener('click', getHumanChoice));

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice(event) {
    const humanSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection); 
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = "The game is a Tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; 
        playerPoints.textContent = humanScore; 
        roundResult.textContent = "You Win the game!!!!";
    } else {
        computerScore++; 
        computerPoints.textContent = computerScore; 
        roundResult.textContent = "You Lost the game to a computer!";
    }

    console.log(`Marcador: Humano ${humanScore} - Computadora ${computerScore}`);
    checkWinner()
}


function disableButtons() {
    optionBtn.forEach(button => button.removeEventListener('click', getHumanChoice));
}

// Verificar si alguien ha llegado a 5 puntos
function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === computerScore) {
            updateWinner('tie');
        } else {
            let winner = (humanScore > computerScore) ? 'player' : 'computer';
            updateWinner(winner);
        }
        disableButtons();  
    }
}

// Muestra el ganador final
function updateWinner(winner) {
    if (winner === 'tie') {
        roundResult.textContent = "It's a tie game!";
    } else if (winner === 'player') {
        roundResult.textContent = "🎉 Congratulations! You won the game!";
    } else {
        roundResult.textContent = "💻 The computer won the game. Better luck next time!";
    }
}









