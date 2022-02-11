//Vars 
let boardArray 
let bankArray 
let player 
let piece 

//Cached Element Refs
let board = document.querySelectorAll('.circle')
let bank = document.querySelectorAll('.piece')

//Event Listeners
bank.addEventListener('click', select())
board.addEventListener('click', place())

//On load 
function init() {
  boardArray = new Array(16).fill(null)
  // clears board display 
  // fills piece bank array 
  // fills piece bank display
  // prompt = P1 select for P2
}
//Functions
// select()
// on bank click->selects piece to play 
//        removes selected piece from bank array 
//        removes selected piece from bank display
//        displays piece in queue area

// place()
//  on board click ->places piece on board 
//          stores piece in board array
//          displays piece on board
//  calls checkwinner()

// checkWinner()
//   winner = checkBoard()

//   if no winner-> 
//          switch turn 
//          prompt = Px select for Px
 
//   if winner
//          prompt = winner message 
//          add replay  

//   if no winner & bank = empty
//          prompt = tie message 
//          add replay 

// checkBoard
// for these combos
//  loop horizontal elements of board 
//  loop vertical elements of board 
//  check diagonals
// ->check if pieces stored there belong to the same class
// (height, top, shape, color) 
//  if true, return winner is true, else winner is false