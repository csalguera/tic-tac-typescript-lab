"use strict";
// Constants ----------------------------------
// Variables ----------------------------------
let board, turn, winner, tie;
// Cached Element References ------------------
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
// Event Listeners ----------------------------
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
