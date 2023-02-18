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