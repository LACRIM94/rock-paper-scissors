function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "paper";
    } else {
        return "scissors";
    } 
}


let humanScore = 0;
let computerScore = 0;



    const rockBtn = document.querySelector("#rockButton");
    rockBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
        
        if (computerSelection === "rock") {
        console.log("It's a draw");
        return
    } else if (computerSelection === "paper") {
        console.log("You lose. Paper beats Rock");
        return computerScore++;
    } else if (computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors");
        return humanScore++; 
    }
    })

 const paperBtn = document.querySelector("#paperButton");
    paperBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
        
        if (computerSelection === "paper") {
        console.log("It's a draw");
        return
    } else if (computerSelection === "scissors") {
        console.log("You lose. Scissors beats Paper");
        return computerScore++;
    } else if (computerSelection === "rock") {
        console.log("You win! Paper beats rock");
        return humanScore++; 
    }
    })

 const scissorsBtn = document.querySelector("#scissorsButton");
    scissorsBtn.addEventListener("click", function() {
        const computerSelection = getComputerChoice();

        if (computerSelection === "scissors") {
        console.log("It's a draw");
        return
    } else if (computerSelection === "rock") {
        console.log("You lose. Rock beats Scissors");
        return computerScore++;
    } else if (computerSelection === "paper") {
        console.log("You win! Scissors beats Paper");
        return computerScore++;
    }
    })

