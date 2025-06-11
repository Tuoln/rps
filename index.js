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
const score = document.querySelector("div")


function playGame(humanSelection) {
    if(humanScore < 5 && computerScore < 5){
        computerSelection = getComputerChoice();
        score.innerText(`Human: ${humanScore}   Computer: ${computerScore}`)
        console.log("human choice: " + humanSelection)
        console.log("computer choice: " + computerSelection)
        playRound(humanSelection, computerSelection);
        console.log(`Scoreboard:\nCoumputer:${computerScore}    Human:${humanScore}`)
    }
}


const btns = document.querySelectorAll("button")

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.className == 'r')
            humanSelection = "rock"
        else if(e.target.className == 'p')
            humanSelection = "paper"
        else
            humanSelection = "scissors"
        playGame(humanSelection)
    })
})




// playGame()