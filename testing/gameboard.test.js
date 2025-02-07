const Gameboard = require('../src/gameboard.js');

let roshanBoard = new Gameboard();

test('Roshan board correctly initialized.', () => {
    
    expect(roshanBoard.gameboard.length).toBe(10);
    expect(roshanBoard.gameboard[0].length).toBe(10);
})

test.skip('Place ship is working properly.', () => {
    roshanBoard.placeShip(5, [[0,0],[0,1],[0,2],[0,3],[0,4]]);
    roshanBoard.placeShip(4, [[0,0],[0,1],[0,2],[0,3]]);
    expect(roshanBoard.shipPos).toEqual([[[0,0],[0,1],[0,2],[0,3],[0,4]], [[0,0],[0,1],[0,2],[0,3]]]);
});

test.skip('Attack is correctly received.', () => {
    roshanBoard.placeShip(4, [[0,0],[0,1],[0,2],[0,3],[0,4]]);
    roshanBoard.receiveAttack( 0, 0);
    roshanBoard.receiveAttack( 0, 2);
    expect(roshanBoard.receiveAttack( 0, 4)).not.toBe(2);
})

test('Ship is sunken.', () => {
    roshanBoard.placeShip(4, [[0,0],[0,1],[0,2],[0,3],[0,4]]);
    roshanBoard.receiveAttack( 0, 0);
    roshanBoard.receiveAttack( 0, 1);
    roshanBoard.receiveAttack( 0, 2);
    roshanBoard.receiveAttack( 0, 3);
    expect(roshanBoard.receiveAttack( 0, 4)).toBeTruthy();
})


