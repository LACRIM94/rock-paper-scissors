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
        let rockDraw = document.querySelector("div");
        rockDraw.textContent = "It's a draw. Score: " + humanScore + "-" + computerScore;
        //console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "paper") {
        computerScore++;
        let rockLose = document.querySelector("div");
        rockLose.textContent = "You lose, paper beats rock. Score: " + humanScore + "-" + computerScore;
        //console.log("You lose, paper beats rock. Score: " + humanScore + "-" + computerScore);
        
    } else if (computerSelection === "scissors") {
        humanScore++;
        let rockWin = document.querySelector("div");
        rockWin.textContent = "You win! Rock beats scissors. Score: " + humanScore + "-" + computerScore;
        //console.log("You win! Rock beats scissors. Score: " + humanScore + "-" + computerScore);
    }
    })

 const paperBtn = document.querySelector("#paperButton");
    paperBtn.addEventListener("click", function() {
    const computerSelection = getComputerChoice();
        
        if (computerSelection === "paper") {
        let paperDraw = document.querySelector("div");
        paperDraw.textContent = "It's a draw. Score: " + humanScore + "-" + computerScore;
        //console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "scissors") {
        computerScore++;
        let paperlose = document.querySelector("div");
        paperlose.textContent = "You lose, scissors beats paper. Score: " + humanScore + "-" + computerScore;
        //console.log("You lose, scissors beats paper. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "rock") {
        humanScore++;
        let paperWin = document.querySelector("div");
        paperWin.textContent = "You win! Paper beats rock. Score: " + humanScore + "-" + computerScore;
        //console.log("You win! Paper beats rock. Score: " + humanScore + "-" + computerScore);    
        }
    })

 const scissorsBtn = document.querySelector("#scissorsButton");
    scissorsBtn.addEventListener("click", function() {
        const computerSelection = getComputerChoice();

        if (computerSelection === "scissors") {
        let scissorsDraw = document.querySelector("div");
        scissorsDraw.textContent = "It's a draw. Score: " + humanScore + "-" + computerScore; 
        //console.log("It's a draw. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "rock") {
        computerScore++;
        let scissorsLose = document.querySelector("div");
        scissorsLose.textContent = "You lose, rock beats scissors. Score: " + humanScore + "-" + computerScore;
        //console.log("You lose, rock beats scissors. Score: " + humanScore + "-" + computerScore);
    } else if (computerSelection === "paper") {
        humanScore++;
        let scissorsWin = document.querySelector("div");
        scissorsWin.textContent = "You win! Scissors beats paper. Score: " + humanScore + "-" + computerScore;
        //console.log("You win! Scissors beats paper. Score: " + humanScore + "-" + computerScore);
    }
    })

