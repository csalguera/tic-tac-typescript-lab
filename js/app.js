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
}
init();
