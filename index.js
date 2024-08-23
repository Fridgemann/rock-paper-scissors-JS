//Moves array, now in global scope so i can use it in getHumanChoice function as well
const moves = ["rock", "paper", "scissors"];
//Initalizing the scores
let humanScore = 0;
let computerScore = 0;


//Create a function getComputerChoice
function getComputerChoice() {
    //This function will return one of the string values: "rock", "paper" or "scissors" RANDOMLY
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    return randomMove;
}

console.log(getComputerChoice());

//Create a function for taking the human choice
function getHumanChoice() {
    //ask the user for their move
    let humanMove = prompt("Make your move:").toLowerCase() //convert it to lowercase for ease of use
    //if user has entered an unexpected value, warn the user then ask for their input again
    if(!(humanMove in moves)) {
        alert("Enter rock, paper or scissors please.");
        humanMove = prompt("Make your move:").toLowerCase()
    }
    //return their answer
    return humanMove;
}

console.log(getHumanChoice());