//Creating a const array which I can use to reference for the getHumanChoice function as well
const moves = ["rock", "paper", "scissors"];

//Create a function called getComputerChoice
function getComputerChoice() {
    //Using Math.random() * moves.length, select a random element from the array (Remember to floor the walue since it's a floating point number)
    let computerMove = moves[Math.floor(Math.random() * moves.length) ];
    //Return the value
    return computerMove;
}

//For testing out if the randomization works properly
console.log(getComputerChoice());


//Create a function called getHumanChoice
function getHumanChoice() {
    //Get the user's choice through a prompt
    let humanChoice = prompt("Make your move: ");
    console.log(humanChoice);
}

getHumanChoice();