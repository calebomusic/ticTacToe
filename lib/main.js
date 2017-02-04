const { Board } = require('./board.js');
const { Display } = require('./display.js');
const { Game } = require('./game.js');

document.addEventListener('DOMContentLoaded', () => {
  let board = new Board(),
      display = new Display(board),
      game = new Game(board, display);
})

window.board = Board;
