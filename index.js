let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let option = prompt("Rock, Paper or Scissors?");
    
    if (!option) return getHumanChoice(); // Si el usuario presiona "Cancelar", volver a preguntar

    option = option.toLowerCase();

    if (!["rock", "paper", "scissors"].includes(option)) {
        alert("El valor no es permitido. Debe ser Rock, Paper o Scissors.");
        return getHumanChoice();
    }

    return option;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Tú elegiste: ${humanChoice}`);
    console.log(`La computadora eligió: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Empate");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`Ganaste! ${humanChoice} vence a ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Perdiste! ${computerChoice} vence a ${humanChoice}`);
        computerScore++;
    }

    console.log(`Marcador: Humano ${humanScore} - Computadora ${computerScore}`);
}

function playGame() {
    // Reiniciar puntajes al inicio del juego
    humanScore = 0;
    computerScore = 0;

    // Jugar 5 rondas
    for (let round = 1; round <= 5; round++) {
        console.log(`\n--- Ronda ${round} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Declarar el ganador al final del juego
    if (humanScore > computerScore) {
        console.log("\n¡Felicidades! Ganaste el juego.");
    } else if (humanScore < computerScore) {
        console.log("\nLa computadora ganó el juego. Mejor suerte la próxima vez.");
    } else {
        console.log("\nEs un empate en el juego.");
    }
}

// Llamar a la función para jugar el juego completo
playGame();
