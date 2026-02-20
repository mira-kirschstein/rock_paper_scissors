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
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice, computerChoice);
/*
    function playRound(humanChoice, computerChoice){

        switch (humanChoice, computerChoice)
            case (humanChoice === computerChoice):
                console.log("Draw, play again");
                break;
            case (humanChoice === "rock" && computerChoice === "paper"):
                console.log("You lose! Paper beats Rock.");
                computerScore++;
                break;
            case (humanChoice === "rock" && computerChoice === "scissors"):
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                break;
            case (humanChoice === "paper" && computerChoice === "rock"):
                console.log("You win! Paper beats Rock.");
                humanScore++;
                break;
            case (humanChoice === "paper" && computerChoice === "scissors"):
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
                break;
            case (humanChoice === "scissors" && computerChoice === "paper"):
                console.log("You win! Scissors beats Paper.");
                humanScore++;
                break;
            case (humanChoice === "scissors" && computerChoice === "rock"):
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                break;

        //     console.log string value representing the winner
        //     INCREMENT winner SCORE
    }*/
}


 