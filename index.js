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
    let humanMove = this.id.split('B')[0];
    let computerMove = getComputerChoice();
    let outcomes = {
        "rock": {"rock": "Tie!", "paper": "You lose!", "scissors": "You win!"},
        "paper": {"rock": "You win!", "paper": "Tie!", "scissors": "You lose!"},
        "scissors": {"rock": "You lose!", "paper": "You win!", "scissors": "Tie!"}
    };
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);
    console.log(outcomes[humanMove][computerMove]);
}














