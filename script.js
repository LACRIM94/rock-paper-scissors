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
        console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
        return
    } else if (computerSelection === "paper") {
        computerScore++;
        console.log("You lose, paper beats rock. Score: " + humanScore + "-" + computerScore);
        
    } else if (computerSelection === "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors. Score: " + humanScore + "-" + computerScore);
    }
    })

 const paperBtn = document.querySelector("#paperButton");
    paperBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
        
        if (computerSelection === "paper") {
        console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "scissors") {
        computerScore++;
        console.log("You lose, scissors beats paper. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "rock") {
        humanScore++;
        console.log("You win! Paper beats rock. Score: " + humanScore + "-" + computerScore);    }
    })

 const scissorsBtn = document.querySelector("#scissorsButton");
    scissorsBtn.addEventListener("click", function() {
        const computerSelection = getComputerChoice();

        if (computerSelection === "scissors") {
        console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
        return
    } else if (computerSelection === "rock") {
        computerScore++;
        console.log("You lose, rock beats scissors. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "paper") {
        humanScore++;
        console.log("You win! Scissors beats paper. Score: " + humanScore + "-" + computerScore);
    }
    })

