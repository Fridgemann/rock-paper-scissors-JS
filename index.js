//Creating a const array which I can use to reference for the getHumanChoice function as well
const moves = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

//Creating two variables for the human and computer score
let humanScore = 0;
let computerScore = 0;


//Create a function called getComputerChoice
function getComputerChoice() {
    //Using Math.random() * moves.length, select a random element from the array (Remember to floor the walue since it's a floating point number)
    let computerMove = moves[Math.floor(Math.random() * moves.length) ];
    //Return the value
    return computerMove;
}

//For testing out if the randomization works properly
//console.log(getComputerChoice());


rockBtn.addEventListener('click', playRound);

paperBtn.addEventListener('click', playRound);

scissorsBtn.addEventListener('click', playRound);


//Creating the function for round logic, two parameters which will be the human's and computer's moves
function playRound() {
    let move = this.id.split('B')[0];
    console.log(move);
    
}







// How can I register the type of button pressed in a compact manner?
// We simply need to feed the playRound with either a "rock", "paper" or "scissors"







