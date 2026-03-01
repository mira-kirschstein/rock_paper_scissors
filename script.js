function getComputerChoice (){
    let localComputerChoice = Math.floor(Math.random()*3); // returns numbers from 0-2
    switch (localComputerChoice){ // switch to link numbers to rock/paper/scissors
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

/* Test for getComputerChoicce
let testResult = getComputerChoice();
console.log(testResult); */

/* function getHumanChoice(){
    let localHumanChoice = prompt("Please enter rock, paper or scissors to start a game", ""); // Prompt windows so user can chose 
    // also possible: localHumanChoice = localHumanChoice.toLowerCase();
    return localHumanChoice.toLowerCase(); // converts input into lower case so if in playRound function works (otherwise you would have to compare all different spellings)
    } */


function playGame (){
    //New Scores in each game, not round
    let humanScore = 0;
    let computerScore = 0; 

    // getting html elements
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");
    const userPickDiv = document.getElementById("userPick");
    const result = document.getElementById("result");
    const score = document.getElementById("score");

    //function to show userPick in a div
    function updatePick(choice){
        humanChoice = choice;
        userPickDiv.textContent = `You picked: ${humanChoice[0].toUpperCase()+humanChoice.slice(1)}`;
    }

    // humanChoice Buttons
    rockBtn.addEventListener("click", () => {
        updatePick("rock");
        playRound("rock", getComputerChoice());
        score.textContent = `Final Score: Human ${humanScore} - Computer ${computerScore}`;}
        );
    paperBtn.addEventListener("click", () => {
        updatePick("paper");
        playRound("paper", getComputerChoice());
        score.textContent = `Final Score: Human ${humanScore} - Computer ${computerScore}`;}
        );
    scissorsBtn.addEventListener("click", () => {
        updatePick("scissors");
        playRound("scissors", getComputerChoice());
        score.textContent = `Final Score: Human ${humanScore} - Computer ${computerScore}`;}
        );

    // for -> so each game has 5 rounds
    /*for(let round = 1; round<=5; round++){
        console.log(`Round ${round}`);
        let humanChoice = getHumanChoice(); // has do be done new in each round to not just give the same variable to each "playRound"
        let computerChoice = getComputerChoice(); // has do be done new in each round to not just give the same variable to each "playRound"
        playRound(humanChoice, computerChoice);
    } */

    result.textContent += `Final Score: Human ${humanScore} - Computer ${computerScore}`; // Output to let the user know the scores
    
    function playRound(humanChoice, computerChoice){

        if (humanChoice === computerChoice){
            result.textContent = "Draw, play again";  // for when human and computer chose the same thing
                return;}
        if (humanChoice === "rock" && computerChoice === "paper"){
                result.textContent = "You lose! Paper beats Rock.";
                console.log("You lose! Paper beats Rock.");
                return computerScore++;
            } else if (humanChoice === "rock" && computerChoice === "scissors"){
                result.textContent = "You win! Rock beats Scissors.";
                return humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "rock"){
                result.textContent = "You win! Paper beats Rock.";
                return humanScore++;
            } else if (humanChoice === "paper" && computerChoice === "scissors"){
                result.textContent = "You lose! Scissors beats Paper.";
                return computerScore++;
            } else if (humanChoice === "scissors" && computerChoice === "paper"){
                result.textContent = "You win! Scissors beats Paper.";
                return humanScore++;
            } else if(humanChoice === "scissors" && computerChoice === "rock"){
                result.textContent = "You lose! Rock beats Scissors.";
                return computerScore++;
            }
    }

}

playGame(); //calls the function so the game is played



 