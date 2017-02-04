function Board() {
  this.state = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
}

Board.prototype.move = function(mark, coord) {
  let [row, col] = coord;
  if(this.validMove(row, col)) {
    return this.state[row][col] = mark;
  }
};

Board.prototype.validMove = function(row, col) {
  if (this.inBounds(row, col) && this.state[row][col] === null ) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.inBounds = function(row, col) {
  return row >= 0 && row < 3 && col >= 0 && col < 3;
};

Board.prototype.win = function() {
  let pos = this.state.concat(this.gatherCols())
                      .concat(this.gatherDiags());
                      
  for(let row of pos) {
    let curr = row[0];
    for(let i = 1; i < 3; i ++) {
      if (curr !== row[i]) {
        curr = false;
      }
    }

    if(curr) {
      return curr;
    }
  }

  return false;
};

Board.prototype.gatherCols = function() {
  let cols = [[], [], []];
  for(let i = 0; i < 3; i ++) {
    for(let j = 0; j < 3; j++) {
      cols[i][j] = this.state[j][i];
    }
  }

  return cols;
};

Board.prototype.gatherDiags = function() {
  return [
    [this.state[0][0], this.state[1][1], this.state[2][2]],
    [this.state[0][2], this.state[1][1], this.state[2][0]]
  ];
}

Board.prototype.full = function() {
  for(let row of this.state) {
    for(let square of row) {
      if(square === null) {
        return false;
      }
    }
  }
  return true;
};

module.exports = { Board };
