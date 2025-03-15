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

//console.log(getComputerChoice());

function getHumanChoice() {
    let sign = window.prompt("rock, paper or scissors");

    if (sign.toLowerCase() === "rock") {
        return "rock";
    } else if (sign.toLowerCase() === "paper") {
        return "paper";
    } else if (sign.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return "Not a valid input";
    }

} //console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a draw");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++; console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++; console.log("You won! Rock beats Scissors");

    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a draw");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++; console.log("You lose! Scissors beats Paper");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++; console.log("You won! Paper beats rock");

    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a draw");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++; console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++; console.log("You won! Scissors beats Paper");

    } else {
        console.log("Not a valid input");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 
console.log(humanScore);
console.log(computerScore);