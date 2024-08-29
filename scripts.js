let internalBoard = ['','','','','','','','',''];

let gameBoard = document.querySelectorAll('.board-pixel');
//create dynamic info log
let turnInfo = document.querySelector('.turn-info');
//create dynamic score board
let scoreX = document.querySelector('.score-x');
let scoreY = document.querySelector('.score-y');

let players = [];
let activePlayer = '';

//initial game start
const hideBoard = document.querySelector('.hide-board');
const playerForm = document.querySelector('form');
playerForm.addEventListener('submit', gameStarted, false);

function gameStarted(event) {
    hideBoard.style.display = 'block';
    playerForm.style.display = 'none';

    //pick player name
    let player1 = createPlayer(document.querySelector('#player-1-name').value);
    let player2 = createPlayer(document.querySelector('#player-2-name').value);
    players = [player1, player2];
    players[0].pawnName = 'X';
    players[1].pawnName = 'O';
    turnInfo.textContent = `${players[0].playerName}'s turn`
    scoreX.textContent = `${players[0].playerName} (X) Score: ${players[0].getScore()}`;
    scoreY.textContent = `${players[1].playerName} (Y) Score: ${players[1].getScore()}`;
    activePlayer = players[0].pawnName;    
    event.preventDefault();
}

function createPlayer(name) {
    const playerName = name;
    let score = 0;
    const getScore = function() {return score} //same like const getScore = () => score
    const giveScore = () => score++;
    const resetScore = function() {return score = 0};
    return {playerName, getScore, giveScore, resetScore};
}

const player2 = 'O';
let gameEnd = false;

function clearBoard() {
    internalBoard = ['','','','','','','','',''];
    for(let i = 0; i < 9; i++)
    {
        gameBoard[i].textContent = '';
    }
    gameEnd = false;
    activePlayer = players[0].pawnName;
    turnInfo.textContent = `${players[0].playerName}'s turn (X)`;
}

let resetButton = document.querySelector('.reset-btn')
resetButton.addEventListener('click', clearBoard)

for(let i=0; i<9; i++) {
    gameBoard[i].addEventListener('click', function gameLogic() {
        if(gameBoard[i].textContent == '' && gameEnd === false) {
            gameBoard[i].textContent = activePlayer;
            internalBoard[i] = gameBoard[i].textContent;
            //change active player
            if (activePlayer == players[0].pawnName) {
                activePlayer = players[1].pawnName;
                turnInfo.textContent = `${players[1].playerName}'s turn (O)`;
            }
            else if (activePlayer == players[1].pawnName) {
                activePlayer = players[0].pawnName;
                turnInfo.textContent = `${players[0].playerName}'s turn (X)`;
            }
        }

        //winning check = X won
        if((gameBoard[0].textContent === 'X' && gameBoard[1].textContent === 'X' && gameBoard[2].textContent === 'X') ||
           (gameBoard[3].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[5].textContent === 'X') ||
           (gameBoard[6].textContent === 'X' && gameBoard[7].textContent === 'X' && gameBoard[8].textContent === 'X') ||
           (gameBoard[0].textContent === 'X' && gameBoard[3].textContent === 'X' && gameBoard[6].textContent === 'X') ||
           (gameBoard[1].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[7].textContent === 'X') ||
           (gameBoard[2].textContent === 'X' && gameBoard[5].textContent === 'X' && gameBoard[8].textContent === 'X') ||
           (gameBoard[0].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[8].textContent === 'X') ||
           (gameBoard[2].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[6].textContent === 'X')) {
            activePlayer = players[0].pawnName;
            gameEnd = true;
            turnInfo.textContent = `${players[0].playerName} Won! Congrats!`
            players[0].giveScore();
            scoreX.textContent = `${players[0].playerName} (X) Score: ${players[0].getScore()}`;
        }
        //winning check = O won
        else if((gameBoard[0].textContent === 'O' && gameBoard[1].textContent === 'O' && gameBoard[2].textContent === 'O') ||
                (gameBoard[3].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[5].textContent === 'O') ||
                (gameBoard[6].textContent === 'O' && gameBoard[7].textContent === 'O' && gameBoard[8].textContent === 'O') ||
                (gameBoard[0].textContent === 'O' && gameBoard[3].textContent === 'O' && gameBoard[6].textContent === 'O') ||
                (gameBoard[1].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[7].textContent === 'O') ||
                (gameBoard[2].textContent === 'O' && gameBoard[5].textContent === 'O' && gameBoard[8].textContent === 'O') ||
                (gameBoard[0].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[8].textContent === 'O') ||
                (gameBoard[2].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[6].textContent === 'O')) {
            activePlayer = players[0].pawnName;
            gameEnd = true;
            turnInfo.textContent = `${players[1].playerName} Won! Congrats!`
            players[1].giveScore();
            scoreY.textContent = `${players[1].playerName} (Y) Score: ${players[1].getScore()}`;
        }

        //Draw Check
        else if(internalBoard.includes('') === false) {
            gameEnd = true;
            turnInfo.textContent = "Draw! Press the 'RESET BOARD' to play again."
        }
    })
}