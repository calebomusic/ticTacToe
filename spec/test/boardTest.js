const { Board } = require('../../lib/board');

describe('new Board has the right properties', () => {
  let board = new Board();

  it('is actually an instance of the board class', () => {
    expect(board instanceof Board).toBe(true);
  })

  it('has a state property which is an array', () => {
    expect(Array.isArray(board.state)).toBe(true);
  })
});

describe('move function', () => {
  let board = new Board();

  it('makes valid moves', () => {
    let preMove = board.state[0][0];
    expect(preMove).toBeNull();
    let validMove = board.move('X', [0, 0]),
        postMove = board.state[0][0];
    expect(postMove).toBe('X');
    expect(validMove).toBeDefined();
  })

  it("Doesn't make invalid moves", () => {
    board.move('X', [0, 7]);
    expect(board.state[0][7]).toBeUndefined();
    expect(board.state[0].length).toBe(3);
    let invalidMove = board.move('X', [5, 23]);
    expect(invalidMove).toBeUndefined();
  })
});

describe('Win function', () => {
  it('identifies wins', () => {
    let board = new Board();
    board.state = [
                    ['x', 'x', 'x'],
                    ['o', null, 'o'],
                    [null, 'o', 'o']
                  ];
    expect(board.win()).toBe('x');
    board.state = [
                    ['o', 'x', 'x'],
                    ['x', 'x', 'o'],
                    [null, 'x', 'o']
                  ];
    expect(board.win()).toBe('x');
    board.state = [
                      ['o', 'x', 'x'],
                      ['o', 'o', 'x'],
                      [null, null, 'o']
                    ];
    expect(board.win()).toBe('o');
  });

  it('identifies when there is no winner', () => {
    let board = new Board();
    expect(board.win()).toBe(false);
    board.state = [
                    ['o', 'x', 'x'],
                    ['o', null, 'o'],
                    [null, 'o', 'o']
                  ];
    expect(board.win()).toBe(false);
  });
});
