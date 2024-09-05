//Creating a const array which I can use to reference for the getHumanChoice function as well
const moves = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const displays = document.querySelector('#displays');
let humanScore = 0;
let computerScore = 0;
const humanScoreDisplay = document.createElement('p');
const computerScoreDisplay = document.createElement('p');
const resultDisplay = document.createElement('p');



humanScoreDisplay.textContent = `Player score: ${humanScore}`;
computerScoreDisplay.textContent = `PC Score: ${computerScore}`;


displays.appendChild(humanScoreDisplay);
displays.appendChild(computerScoreDisplay);
displays.appendChild(resultDisplay);

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
        "rock": {"rock": "Tie!", "paper": "Round lost!", "scissors": "Round won!"},
        "paper": {"rock": "Round won!", "paper": "Tie!", "scissors": "Round lost!"},
        "scissors": {"rock": "Round lost!", "paper": "Round won!", "scissors": "Tie!"}
    };
    let result = outcomes[humanMove][computerMove];
    resultDisplay.textContent = result;
    switch(result) {
        case "Tie!":
            break;
        case "Round lost!":
            computerScore += 1;
            computerScoreDisplay.textContent = `PC Score: ${computerScore}`;
            break;
        case "Round won!":
            humanScore += 1;
            humanScoreDisplay.textContent = `Player Score: ${humanScore}`;
            break;
    }


}














