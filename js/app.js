
//Functions 
// init()

// function init(){
//   createGrid()
// }

// function createGrid(){
//   console.log('create grid!')
//   let grid = document.getElementById('grid')
//   let boardArray = new Array(16)
//   for(let c=0; c<boardArray.length; c++){
//     let cell = document.createElement('div')
//     cell.className = 'cell'
//     grid.appendChild(cell)
//   }
//   let board = document.querySelectorAll('.cell')
//   console.log(board)
//   board.forEach(cell => {cell.addEventListener('click', place)} )
// }

// function place(){
//   console.log('board clicked!')
// }


class Game {
  constructor(){
    this.unusedPieces = this.constructPiecesArray()
    this.board = this.constructBoard()
  }

  constructPiecesArray(){
    //TODO 
    let pieceInfo = new PieceInfo('red', 'tall', 'flat', 'circle')
    this.piece = new Piece(this, pieceInfo)
  }
  constructBoard(){
    //TODO
    let grid = document.getElementById('grid')
    this.cell = new Cell(this)
    this.cell.className = 'cell'
    grid.appendChild(this.cell.div)
  }
  checkWin(){
    //TODO
  }

  setActivePiece(pieceInfo){
    this.activePiece = pieceInfo
  }

}

class Piece {
  constructor(game, pieceInfo){
    this.game = game
    this.pieceInfo = pieceInfo
    this.div = document.createElement('div')
    this.div.addEventListener('click', this.select)
  }
  select(){
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
  constructor(game){
    this.game = game
    this.pieceInfo = null 
    this.div = document.createElement('div')
    this.div.addEventListener('click', this.place)
  }
  place(){
   this.pieceInfo = game.activePiece
   //TODO remove piece from unusedPieces
   //TODO spot is not already full
  }
}

const game = new Game()
