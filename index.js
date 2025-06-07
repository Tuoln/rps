function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0)
        return "rock";
    else if (rand === 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    return prompt("What do you choose?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock"){
        if(computerChoice === "scissors")
            humanScore++;
        else if(computerChoice === "paper")
            computerScore++;
    }
    else if (humanChoice === "paper"){
        if(computerChoice === "rock")
            humanScore++;
        else if(computerChoice === "scissors")
            computerScore++;
    }
    else{
        if(computerChoice === "scissors")
            humanScore++;
        else if(computerChoice === "rock")
            computerScore++;
    }
}

let humanSelection;
let computerSelection;


function playGame() {
    for(let i=0;i<5;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(humanSelection)
        console.log(computerSelection)
        playRound(humanSelection, computerSelection);
        console.log(`Scoreboard:\nCoumputer:${computerScore}    Human:${humanScore}`)
    }
}

playGame()