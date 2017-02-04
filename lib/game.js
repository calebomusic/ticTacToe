const { HumanPlayer, AIPlayer } = require('./player');

function Game(board, display) {
  this.board = board;
  this.display = display;
  this.player1 = new HumanPlayer();
  this.player2 = new AIPlayer(board);
  this.currentPlayer = this.player1;
  const game = this;

  window.setTimeout( () => {
    let squares = document.getElementsByTagName('li');
    for(let square of squares) {
      square.addEventListener('click', function(e) {
        let target = e.target,
            coord = target.id.slice(7).split('').map( el => parseInt(el));

        if (this.currentPlayer === this.player1) {
          game.move('x', coord);
          let victor = game.over();
          if (victor) {
            game.display.celebrateVictor(victor);
            return
          }
          game.player2.move();
        }
      });
    }
  }, 100);
}

Game.prototype.move = function(mark, coord) {
  let move = this.board.move(mark, coord);
  if (move) {
    this.display.markSquare(mark, coord);
  }
}

Game.prototype.over = function () {
  let winner = this.board.win();

  if (winner) {
    return winner;
  }

  if (this.board.full()) {
    return 'stalemate';
  }
};

module.exports = { Game };
