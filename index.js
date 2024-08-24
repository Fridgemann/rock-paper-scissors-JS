//Creating a const array which I can use to reference for the getHumanChoice function as well
const moves = ["rock", "paper", "scissors"];

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


//Create a function called getHumanChoice
function getHumanChoice() {
    isMove = false;
    //WHILE NOT a move
    while(!(isMove)) {
        //GET User's choice with a prompt
        let userMove = prompt("Make your move:");
        //CONVERT userMove to all lowerCase so there is no variances simply because of case sensitivity
        let userMoveLowerCased = userMove.toLowerCase();
        //IF 'moves' INCLUDES userMoveLowerCased, that's our humanChoice; flip the isMove to true and end the loop
        if(moves.includes(userMoveLowerCased)) {
            isMove = true;
            return userMoveLowerCased;
        }
        //IF the user does not enter a valid move type, put up an alert
        else {
            alert("Please enter an appropriate move type.");
        }
    }

    
}

//console.log(getHumanChoice());

//Creating the function for round logic, two parameters which will be the human's and computer's moves
function playRound(humanMove, computerMove) {
    console.log(`You chose: ${humanMove}`);
    console.log(`Computer chose: ${computerMove}`);
    //Second index is for computer's move so set the outcome accordingly
    //First index represents the user's choice, second index represents the correct result for the computer's move
    let outcomes = {
        "rock": {"rock": "Tie!", "paper": "You lose!", "scissors": "You win!"},
        "paper": {"rock": "You win!", "paper": "Tie!", "scissors":"You lose!"},
        "scissors": {"rock": "You lose!", "paper": "You win!", "scissors": "Tie!"}
    }
    //SWITCH statement to decide which score to increment
    switch(outcomes[humanMove][computerMove]) {
        case "You win!":
            humanScore += 1;
        case "You lose!":
            computerScore += 1;
    }
    console.log(`computer score: ` ,computerScore);
    console.log(`human score: ` ,humanScore);
    return outcomes[humanMove][computerMove];
}

console.log(playRound(humanMove=getHumanChoice(), computerMove=getComputerChoice()))







