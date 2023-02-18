// Constants ----------------------------------
// Variables ----------------------------------

let board: number[],
turn: number,
winner: boolean,
tie: boolean

// Cached Element References ------------------

const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message')

// Event Listeners ----------------------------
// Functions ----------------------------------

function init():void {
  board = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
  ],
  turn = 1,
  winner = false,
  tie = false
}

init()