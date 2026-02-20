function getComputerChoice (){
     //   RETURN randomly returns rock, paper or scissors using math.random
    let computerChoice = Math.floor(Math.random()*(3-1+1)) + 1;
    return computerChoice;
    }

function getHumanChoice(){
    let humanChoice = prompt("Please enter rock, paper or scissors to start a game", "");
    console.log(humanChoice);
    return humanChoice;
}

getHumanChoice();

function playGame (){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        //     console.log string value representing the winner
        //     INCREMENT winner SCORE
    }
}

 