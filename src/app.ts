// Constants ----------------------------------

const winningCombos: number[] = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
  0, 3, 6,
  1, 4, 7,
  2, 5, 8,
  0, 4, 8,
  2, 4, 6,
]

// Variables ----------------------------------

let board: number[],
turn: number,
winner: boolean,
tie: boolean

// Cached Element References ------------------

const squareEls = document.querySelectorAll<HTMLDivElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message')!

// Event Listeners ----------------------------

squareEls.forEach(sqEl => {
  sqEl.addEventListener('click', handleClick)
})

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

  render()
}

init()

function render():void {
  updateBoard()
  updateMessage()
}

function updateBoard():void {
  board.forEach((val, idx) => {
    val === 1
    ?
    squareEls[idx].textContent = 'X'
    :
    val === -1
    ?
    squareEls[idx].textContent = 'O'
    :
    squareEls[idx].textContent = ''
  })
}

function updateMessage():void {
  !winner && !tie
  ?
  messageEl.textContent = `It is player ${turn === 1 ? 1 : 2}'s turn`
  :
  !winner && tie
  ?
  messageEl.textContent = `It's a tie!`
  :
  messageEl.textContent = `Congratulations Player ${turn === 1 ? 1 : 2}, you won!`
}

function handleClick(evt: MouseEvent):void {
  const sqIdx:number = parseInt((evt.target as HTMLButtonElement).id.replace('sq', ''))

  if (board[sqIdx] || winner) return
  placePiece(sqIdx)
  checkForTie()
  render()
}

function placePiece(sqIdx: number):void {
  board[sqIdx] = turn
}

function checkForTie():void {
  if (board.includes(0)) return
  tie = true
}