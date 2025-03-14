function getComputerChoice(value) {
    Math.floor(Math.random() * value);
    if (value === 0) {
        console.log("rock");
    } else if (value === 1) {
        console.log("paper");
    } else {
        console.log("scissors")
    } 
}

console.log(getComputerChoice(3));