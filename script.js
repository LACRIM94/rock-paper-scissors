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

    if (sign === "rock") {
        return "rock";
    } else if (sign === "paper") {
        return "paper";
    } else if (sign === "scissors") {
        return "scissor";
    } else {
        return "Not a valid input";
    }

} //console.log(getHumanChoice());