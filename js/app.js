
let boardArray = []

//Classes _________________________________

class Game {
  constructor(){
    this.init()
    this.unusedPieces = this.constructPiecesArray()
    this.board = this.constructBoard()
  }

  init(){
    this.message = document.getElementById('msg')
    this.message.textContent = 'Player 1 select a piece for Player 2'
  }

  constructPiecesArray(){
    let bank = document.getElementById('bank')
    for(let i=0; i<16; i++){
      let piece = new Piece(pieceInfoArray[i])
      this.stylePieces(piece)
      console.log(piece.div)
      bank.appendChild(piece.div)
    }
    return bank
  }

  stylePieces(piece){
    for(let i=0; i<critArray.length; i++){
      if(i===0){ 
        piece.div.pieceInfo.color === 'dark' ? piece.div.classList.add('dark') : piece.div.classList.add('light')
      }if(i===1){
        piece.div.pieceInfo.height === 'tall' ? piece.div.classList.add('tall') : piece.div.classList.add('short')
      }if(i===2){
        piece.div.pieceInfo.top === 'flat' ? piece.div.classList.add('flat') : piece.div.classList.add('indent')
      }if(i===3){
        piece.div.pieceInfo.shape === 'circle' ? piece.div.classList.add('circle') : piece.div.classList.add('square')
      }
    }
  }

  constructBoard(){
    let grid = document.getElementById('grid')
    for(let i=0; i<16; i++){
      let cell = new Cell(new PieceInfo('none', 'none', 'none', 'none'),)
      grid.appendChild(cell.div)
      boardArray.push(cell.div)
    }
    console.log(boardArray)
    return boardArray
  }
  setActivePiece(activePiece){
    this.activePiece = activePiece
    console.log(this.activePiece)
  }

  checkWin(){
    foursArray.forEach(array =>{
      critArray.forEach(crit =>{
        if(this.board[array[0]].pieceInfo[crit] === this.board[array[1]].pieceInfo[crit]){
          console.log
           this.message.textContent = 'you win'
        }
      })
    })
  }
}

class Piece {
  constructor(pieceInfo){ //'this' refers to piece
    this.div = document.createElement('div')
    this.div.pieceInfo = pieceInfo
    this.div.addEventListener('click', this.select)
  }
  select(){ //'this' refers to piece.div
    game.setActivePiece(this)
    this.classList.add('active')
    console.log(this)
  }
}

class Cell {
  constructor(pieceInfo){ //'this' refers to cell
    this.div = document.createElement('div')
    this.div.className = 'cell'
    this.div.pieceInfo = pieceInfo
    this.div.addEventListener('click', this.place)
  }
  place(){ //'this' refers to cell.div
    //TODO remove piece from unusedPieces
    //TODO spot is not already full
    console.log(game.activePiece)
    this.className = game.activePiece.classList
    //this = game.activePiece.cloneNode(true)
    game.checkWin()
  }
}

class PieceInfo {
  constructor(color, height, top, shape){
    this.color = color
    this.height = height 
    this.top = top 
    this.shape = shape
  }
}

//Consts_________________________________ 
const critArray = ['color', 'height', 'top', 'shape']

const pieceInfoArray = [
  new PieceInfo('dark', 'tall', 'flat', 'circle'),
  new PieceInfo('dark', 'tall', 'flat', 'square'),
  new PieceInfo('dark', 'tall', 'indent', 'circle'),
  new PieceInfo('dark', 'tall', 'indent', 'square'),
  new PieceInfo('dark', 'short', 'flat', 'circle'),
  new PieceInfo('dark', 'short', 'flat', 'square'),
  new PieceInfo('dark', 'short', 'indent', 'circle'),
  new PieceInfo('dark', 'short', 'indent', 'square'),
  new PieceInfo('light', 'tall', 'flat', 'circle'),
  new PieceInfo('light', 'tall', 'flat', 'square'),
  new PieceInfo('light', 'tall', 'indent', 'circle'),
  new PieceInfo('light', 'tall', 'indent', 'square'),
  new PieceInfo('light', 'short', 'flat', 'circle'),
  new PieceInfo('light', 'short', 'flat', 'square'),
  new PieceInfo('light', 'short', 'indent', 'circle'),
  new PieceInfo('light', 'short', 'indent', 'square'),
]

const foursArray = [
  [0, 1, 2, 3],  //horizontals
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12], //verticals
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],  //diagonals
  [3, 6, 9, 12],
]

const game = new Game()
