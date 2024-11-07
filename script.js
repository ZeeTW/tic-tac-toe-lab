/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let board = ['', '', '', '', '', '', '', '', '']
let turn = 'x'
let winner = false
let tie = false
/*------------------------ Cached Element References ------------------------*/
const squareElements = document.querySelectorAll('.sqr')
const messageElement = document.querySelector('#message')

/*-------------------------------- Functions --------------------------------*/
const init = () => {
  render()
}

/*----------------------------- Event Listeners -----------------------------*/
