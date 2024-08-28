let internalBoard = ['','','','','','','','',''];

let gameBoard = document.querySelectorAll('.board-pixel');
let turnInfo = document.querySelector('.turn-info');

const player1 = 'X';
const player2 = 'O';
let gameEnd = false;

let activePlayer = player1;

function clearBoard() {
    internalBoard = ['','','','','','','','',''];
    for(let i = 0; i < 9; i++)
    {
        gameBoard[i].textContent = '';
    }
    gameEnd = false;
    turnInfo.textContent = 'X TURN';
}

let resetButton = document.querySelector('button')
resetButton.addEventListener('click', clearBoard)

for(let i=0; i<9; i++) {
    gameBoard[i].addEventListener('click', function gameLogic() {
        if(gameBoard[i].textContent == '' && gameEnd === false) {
            gameBoard[i].textContent = activePlayer;
            internalBoard[i] = gameBoard[i].textContent;
        }
        //change active player
        if (activePlayer == player1) {
            activePlayer = player2;
            turnInfo.textContent = 'O TURN';
        }
        else {
            activePlayer = player1;
            turnInfo.textContent = 'X TURN';
        }
        //winning check = X won
        if(gameBoard[0].textContent === 'X' && gameBoard[1].textContent === 'X' && gameBoard[2].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[3].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[5].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[6].textContent === 'X' && gameBoard[7].textContent === 'X' && gameBoard[8].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[3].textContent === 'X' && gameBoard[6].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[1].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[7].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[5].textContent === 'X' && gameBoard[8].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[8].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[6].textContent === 'X') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'X Won! Congrats!'
        }
        //winning check = O won
        if(gameBoard[0].textContent === 'O' && gameBoard[1].textContent === 'O' && gameBoard[2].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[3].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[5].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
       else if(gameBoard[6].textContent === 'O' && gameBoard[7].textContent === 'O' && gameBoard[8].textContent === 'O') {
        activePlayer = player1;
        gameEnd = true;
        turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[3].textContent === 'O' && gameBoard[6].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[1].textContent === 'O'&& gameBoard[4].textContent === 'O'&& gameBoard[7].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[5].textContent === 'O' && gameBoard[8].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[8].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[6].textContent === 'O') {
            activePlayer = player1;
            gameEnd = true;
            turnInfo.textContent = 'O Won! Congrats!'
        }
        //Draw Check
        if(internalBoard.includes('') == false) {
            gameEnd = true;
            turnInfo.textContent = "Draw! Press the 'RESET BOARD' to play again."
        }
    })
}