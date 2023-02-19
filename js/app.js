"use strict";
// Constants ----------------------------------
const winningCombos = [
    0, 1, 2,
    3, 4, 5,
    6, 7, 8,
    0, 3, 6,
    1, 4, 7,
    2, 5, 8,
    0, 4, 8,
    2, 4, 6,
];
// Variables ----------------------------------
let board, turn, winner, tie;
// Cached Element References ------------------
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
// Event Listeners ----------------------------
squareEls.forEach(sqEl => {
    sqEl.addEventListener('click', handleClick);
});
// Functions ----------------------------------
function init() {
    board = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
    ],
        turn = 1,
        winner = false,
        tie = false;
    render();
}
init();
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((val, idx) => {
        val === 1
            ?
                squareEls[idx].textContent = 'X'
            :
                val === -1
                    ?
                        squareEls[idx].textContent = 'O'
                    :
                        squareEls[idx].textContent = '';
    });
}
function updateMessage() {
    !winner && !tie
        ?
            messageEl.textContent = `It is player ${turn === 1 ? 1 : 2}'s turn`
        :
            !winner && tie
                ?
                    messageEl.textContent = `It's a tie!`
                :
                    messageEl.textContent = `Congratulations Player ${turn === 1 ? 1 : 2}, you won!`;
}
function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.replace('sq', ''));
    if (board[sqIdx] || winner)
        return;
    placePiece(sqIdx);
    render();
}
function placePiece(sqIdx) {
    board[sqIdx] = turn;
}
