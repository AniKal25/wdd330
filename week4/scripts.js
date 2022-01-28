const divBoard = document.querySelector('.divBoard');
const player1 = 'X';
const player2 = 'O';
let player = player1;

function addMark(event) {
    
    event.target.innerHTML = player;
    if (player === player1) player = player2;
    else player = player1;
}

divBoard.addEventListener('click', addMark);