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
const resetButtonElement = document.querySelector('#reset')

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
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'x'
  winner = false
  tie = false
  render()
}

const checkForWinner = () => {
  winningCombos.forEach((combo) => {
    const [a, b, c] = combo
    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      winner = true
    }
  })
}

const checkForTie = () => {
  if (winner === true) {
    return
  } else if (board.includes('')) {
    tie = false
  } else {
    tie = true
  }
}

// const handleClick = (event) => {
//   checkForWinner()
//   checkForTie()
// }
const handleClick = (event) => {
  const index = Array.from(squareElements).indexOf(event.target)
  if (board[index] !== '' || winner || tie) {
    return
  }
  board[index] = turn
  checkForWinner()
  checkForTie()
  switchPlayerTurn()
  render()
}

const switchPlayerTurn = () => {
  if (winner === false) {
    if (turn === 'x') {
      turn = 'o'
    } else {
      turn = 'x'
    }
  }
}

/*----------------------------- Event Listeners -----------------------------*/
squareElements.forEach((square) => {
  square.addEventListener('click', handleClick)
})

resetButtonElement.addEventListener('click', init)

render()
