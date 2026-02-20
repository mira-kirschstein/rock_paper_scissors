function getComputerChoice (){
     //   RETURN randomly returns rock, paper or scissors using math.random
    let localComputerChoice = Math.floor(Math.random()*3);
    switch (localComputerChoice){
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

/* Test for getComputerChoicce
let testResult = getComputerChoice();
console.log(testResult); */

function getHumanChoice(){
    let localHumanChoice = prompt("Please enter rock, paper or scissors to start a game", "");
    // also possible: localHumanChoice = localHumanChoice.toLowerCase();
    return localHumanChoice.toLowerCase();
}


function playGame (){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){

        if (humanChoice === computerChoice){
                console.log("Draw, play again");
                return;}
        if (humanChoice === "rock" && computerChoice === "paper"){
                console.log("You lose! Paper beats Rock.");
                return computerScore++;
            } else if (humanChoice === "rock" && computerChoice === "scissors"){
                console.log("You win! Rock beats Scissors.");
                return humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "rock"){
                console.log("You win! Paper beats Rock.");
                return humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "scissors"){
                console.log("You lose! Scissors beats Paper.");
                return computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "paper"){
                console.log("You win! Scissors beats Paper.");
                return humanScore++;
            } else if(humanChoice === "scissors" && computerChoice === "rock"){
                console.log("You lose! Rock beats Scissors.");
                return computerScore++;
            }
    }
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
}

playGame();
playGame();
playGame();
playGame();
playGame();


 