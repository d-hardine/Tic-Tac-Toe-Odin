let internalBoard = ['','','','','','','','',''];

let gameBoard = document.querySelectorAll('.board-pixel');

const player1 = 'X';
const player2 = 'O';

let activePlayer = player1;

function clearBoard() {
    internalBoard = ['','','','','','','','',''];
    for(let i = 0; i < 9; i++)
    {
        gameBoard[i].textContent = '';
    }
}

function changePlayer() {
//change active player
if (activePlayer == player1) {
    activePlayer = player2;
}
else {
    activePlayer = player1;
}
}

for(let i=0; i<9; i++) {
    gameBoard[i].addEventListener('click', function() {
        gameBoard[i].textContent = activePlayer;
        internalBoard[i] = gameBoard[i].textContent;
        console.log(internalBoard);
        //change active player
        if (activePlayer == player1) {
            activePlayer = player2;
        }
        else {
            activePlayer = player1;
        }
        console.log(activePlayer);
        //winning check = X won
        if(gameBoard[0].textContent === 'X' && gameBoard[1].textContent === 'X' && gameBoard[2].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[3].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[5].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[6].textContent === 'X' && gameBoard[7].textContent === 'X' && gameBoard[8].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[3].textContent === 'X' && gameBoard[6].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[1].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[7].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[5].textContent === 'X' && gameBoard[8].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[0].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[8].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[2].textContent === 'X' && gameBoard[4].textContent === 'X' && gameBoard[6].textContent === 'X') {
            alert(`X won`);
            activePlayer = player1;
            clearBoard();
        }
        //winning check = O won
        if(gameBoard[0].textContent === 'O' && gameBoard[1].textContent === 'O' && gameBoard[2].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[3].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[5].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[6].textContent === 'O' && gameBoard[7].textContent === 'O' && gameBoard[8].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[3].textContent === 'O' && gameBoard[6].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[1].textContent === 'O'&& gameBoard[4].textContent === 'O'&& gameBoard[7].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[5].textContent === 'O' && gameBoard[8].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[0].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[8].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
        else if(gameBoard[2].textContent === 'O' && gameBoard[4].textContent === 'O' && gameBoard[6].textContent === 'O') {
            alert(`O won`);
            activePlayer = player1;
            clearBoard();
        }
    })
}