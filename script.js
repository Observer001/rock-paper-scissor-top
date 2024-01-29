let options = ["rock", "paper", "scissor"]

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSeletion) {
    playerSelection = playerSelection.toLowerCase();
    computerSeletion = computerSeletion.toLowerCase();

    if(playerSelection == "rock" && computerSeletion == "paper")
        return `You Lose! ${computerSeletion} beats ${playerSelection}`
    else if(playerSelection == "paper" && computerSeletion == "scissor")
        return `You Lose! ${computerSeletion} beats ${playerSelection}`
    else if(playerSelection == "scissor" && computerSeletion == "rock")
        return `You Lose! ${computerSeletion} beats ${playerSelection}`
    else if(playerSelection == computerSeletion)
        return `Tie! Both have chosen ${playerSelection}`
    else
        return `You win! ${playerSelection} beats ${computerSeletion}`

}

function playGame() {
    let count = 5;
    let wins = 0;
    let loss = 0;

    for(let i=0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ")
        let computerSeletion = getComputerChoice()
        console.log(playRound(playerSelection, computerSeletion))        
    }
}

playGame();

// const playerSelection = "rock"
// const computerSeletion = getComputerChoice();
// console.log(playRound(playerSelection, computerSeletion))