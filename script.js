const options = ["rock", "paper", "scissor"]

const input = document.querySelector('input');
const button = document.querySelector('#total');

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSeletion) {
    playerSelection = playerSelection.toLowerCase();
    computerSeletion = computerSeletion.toLowerCase();

    if(playerSelection === computerSeletion)
        return 'Tie!'
    else if(
        (playerSelection === "rock" && computerSeletion === "paper") ||
        (playerSelection === "paper" && computerSeletion === "scissor") ||
        (playerSelection === "scissor" && computerSeletion === "rock")
    )   {
        return 'computer'
    }
    else
        return 'player'
}

function playGame() {
    let totalPoints = +input.value;
    let player = 0;
    let comp = 0;

    button.addEventListener('click', () => {        
        input.value = '';        
    
        const playerChoice = document.querySelector('#player-choice');
        const compChoice = document.querySelector('#comp-choice');
        const playerPoint = document.querySelector('#player-point');
        const compPoint = document.querySelector('#comp-point');

        playerChoice.innerText = 'blank';
        compChoice.innerText = 'blank';
        playerPoint.innerText = '0';
        compPoint.innerText = '0';    

        const btns = document.querySelectorAll('.card');
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                let playerSelection = btn.innerText;
                let computerSelection = getComputerChoice();

                playerChoice.innerText = playerSelection;
                compChoice.innerText = computerSelection;

                let roundWinner = playRound(playerSelection, computerSelection);
                if(roundWinner === 'player') playerPoint.innerText = ++player;
                if(roundWinner === 'computer') compPoint.innerText = ++comp;
                
                if(player === totalPoints) alert('Player wins!');
                else if(comp === totalPoints) alert('Computer wins!');

            });
        });        
    });

}


playGame();