//Vars 
let boardArray 
let bankArray //this might not be needed
let player 
let current 

//Cached Element Refs
let board = document.querySelectorAll('.el')
let bank = document.querySelectorAll('.piece')
let message = document.getElementById('msg')
let temp = document.getElementById('temp')

//Event Listeners
bank.forEach(piece => {piece.addEventListener('click', select) })
board.forEach(el => {el.addEventListener('click', place) })
temp.addEventListener('click', remove)

function remove(e){
  console.log('remove temp clicked')
  console.log(e.target)
  temp.removeChild(temp.firstChild)
}

//On load 
init()

function init(){
  player = true
  boardArray = new Array(16).fill(null)
  bankArray = new Array(16).fill(1)
  message.textContent = 'Player 1 select a piece for Player 2' 
}

//Functions
function select(e){
  console.log(e.target)
  temp.appendChild(e.target.cloneNode(true))
  e.target.style.visibility = 'hidden'
  console.log(current)
}

function place(){
  console.log('board clicked')
  //boardArray[]
  //board.appendChild()
  
  //on board click ->places piece on board 
  //stores piece in board array
  //displays piece on board
  //calls checkwinner()
}

function checkWinner(){
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
}
function checkBoard(){
// for these combos
//  loop horizontal elements of board 
//  loop vertical elements of board 
//  check diagonals
// ->check if pieces stored there belong to the same class
// (height, top, shape, color) 
//  if true, return winner is true, else winner is false
}