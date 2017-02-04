function Display(board) {
  this.board = board;
  this.setup();
}

Display.prototype.setup = function() {
  let display = document.createElement('div');
  display.setAttribute('class', 'board')

  for (let i = 0; i < 3; i ++) {
    let rowEl = document.createElement('ul');
    rowEl.setAttribute('id', 'row-' + i);
    for(let j = 0; j < 3; j ++) {
      let li = document.createElement('li');
      li.setAttribute('id', 'square-' + i + j);
      rowEl.appendChild(li);
    }

    display.appendChild(rowEl);
  }

  document.getElementsByTagName('body')[0].appendChild(display);
  return true;
}

Display.prototype.markSquare = function(mark, coord) {
  let [row, col] = coord,
      square = document.getElementById(`square-${row}${col}`),
      p = document.createElement('p');
  p.textContent = mark;
  square.appendChild(p);
}

Display.prototype.celebrateVictor = function(victor) {
  let message = document.createElement('div');

  message.setAttribute('class', 'victory-message')
  message.textContent = `${victor} wins!`;

  document.getElementsByTagName('body')[0].appendChild(message);
}

module.exports = { Display };
