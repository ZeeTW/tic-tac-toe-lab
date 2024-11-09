/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'x'
let winner = false
let tie = false
/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll('.sqr')
const messageElement = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
  board.forEach((square, i) => {
    const currentSquare = squareElements[i]
    if (square === 'x' || square === 'o') {
      currentSquare.textContent = square
    } else {
      currentSquare.textContent = ''
    }
  })
}

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageElement.textContent = `${turn}'s turn`
  } else if (winner === false && tie === true) {
    messageElement.textContent = "It's a tie!"
  } else {
    messageElement.textContent = `${turn} won!`
  }
}

const render = () => {
  updateBoard()
  updateMessage()
}

const init = () => {
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
