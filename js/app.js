let message = document.getElementById('msg')
message.textContent = 'Player 1 select a piece for Player 2'

class Game {
  constructor(){
    this.unusedPieces = this.constructPiecesArray()
    this.board = this.constructBoard()
  }

  constructPiecesArray(){
    //TODO 
    let bank = document.getElementById('bank')
    for(let i=0; i<16; i++){
      let piece = new Piece(pieceInfoArray[i])
      piece.addClassName
      bank.appendChild(piece.div)
    }
    console.log(bank)
    return bank
  }
  constructBoard(){
    let grid = document.getElementById('grid')
    let boardArray = []
    for(let i=0; i<16; i++){
      let cell = new Cell()
      grid.appendChild(cell.div)
      boardArray.push(cell.div)
    }
    console.log(boardArray)
    return boardArray
  }
  checkWin(){
    //TODO
    console.log('we are checking win')
    console.log(this.board)
    //const critArray = ['color', 'height', 'top', 'shape']
    console.log(`the board at index 0 is `)
    console.log(this.board[0].pieceInfo)
    foursArray.forEach(array =>{
     // critArray.forEach(crit =>{
       console.log(this.board[array[0]].pieceInfo.color)
       console.log(this.board[array[0]].pieceInfo.color)
        if(this.board[array[0]].pieceInfo.color === this.board[array[1]].pieceInfo.color){
           message = 'you win'
        }
     // })
    })
  }

  setActivePiece(pieceInfo){
    this.activePiece = pieceInfo
    console.log(this.activePiece)
  }

}

class Piece {
  constructor(pieceInfo){
    this.div = document.createElement('div')
    this.div.pieceInfo = pieceInfo
    this.div.addEventListener('click', this.select)
    this.div.className = 'piece'
    console.log(`piece constructed! ${this.div.pieceInfo.color}`)
  }
  select(){
    console.log(this)
    console.log(`piece selected! ${this.pieceInfo}`)
    game.setActivePiece(this.pieceInfo)
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

class Cell {
  constructor(){ //'this' refers to cell
    this.div = document.createElement('div')
    this.div.addEventListener('click', this.place)
    this.div.className = 'cell'
  }
  place(){ //'this' refers to cell.div
    this.pieceInfo = game.activePiece
    console.log(`piece placed! ${this.pieceInfo}`)
   //TODO remove piece from unusedPieces
   //TODO spot is not already full
    game.checkWin()
  }
}

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
