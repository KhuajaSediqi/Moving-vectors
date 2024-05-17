let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function playerMove(index) {
    if (!gameEnded && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerText = `Player ${currentPlayer} wins!`;
            gameEnded = true;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = "It's a draw!";
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });
}

function reset() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameEnded = false;
    document.getElementById('message').innerText = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
