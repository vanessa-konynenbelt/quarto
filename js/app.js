
quarto = {

  createGrid: function(){
    let grid = document.getElementById('grid')
    let boardArray = new Array(16)
    for(let c=0; c<boardArray.length; c++){
      let cell = document.createElement('div')
      cell.className = 'cell'
      grid.appendChild(cell)
    }
  }
}

quarto.createGrid()