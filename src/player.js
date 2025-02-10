import Gameboard from './gameboard';
import { gameOverUi, turnUi } from './ui';

// Variables declation to track players in the game. which will keep changing after every move.
export let activePlayer;
export let opponent;
export let gameOver = false;

let player = {
    isHuman : true,
    board : new Gameboard(),
};

let computer = {
    isHuman : false,
    board : new Gameboard(),
};

export function initializePlayers()
{
    // Player board manual placement.
    player.board.placeShip( 0, [[ 0, 0],[ 0, 1]]);
    player.board.placeShip( 1, [[ 1, 0],[ 1, 1],[ 1, 2]]);
    player.board.placeShip( 2, [[ 2, 0],[ 2, 1],[ 2, 2]]);
    player.board.placeShip( 3, [[ 3, 0],[3, 1],[ 3, 2],[3, 3]]);
    player.board.placeShip( 4, [[ 4, 0],[ 4, 1],[ 4, 2],[ 4, 3],[ 4, 4]]);

    // Computer ships are also placed manually on computerBoard.
    computer.board.placeShip( 0, [[ 9, 0],[ 9, 1]]);
    computer.board.placeShip( 1, [[ 8, 0],[ 8, 1],[ 8, 2]]);
    computer.board.placeShip( 2, [[ 7, 0],[ 7, 1],[ 7, 2]]);
    computer.board.placeShip( 3, [[ 6, 0],[ 6, 1],[ 6, 2],[ 6, 3]]);
    computer.board.placeShip( 4, [[ 5, 0],[ 5, 1],[ 5, 2],[ 5, 3],[ 5, 4]]);

    // initial set of the players.
    activePlayer = player;
    opponent = computer;
}

export function playGame(row, column)
{
    // Based on the activePlayer opponent's board is chosen so that 
    // activePlayer can play his move on opponent's board.
    //Here only attack is passed and if it hit the ship or missed is receiveAttack() work;
    opponent.board.receiveAttack(row, column);

    //gameOver function is checked after every click but
    // ui is rendered only if it returns true;
    if(opponent.board.gameOver()){
        gameOverUi();
        gameOver = true;
        return;
    }

    // After each move to switch player turns.
    switchPlayer();
}

export function computerMove()
{
    // mySet only stores the unique values.
    let mySet = new Set();
    let str, row, column;

    do{
        // Math.random will return values from 0 to 1 multiplied by 10 and
        //  Math.floor will return values from 0 to 9
        row = Math.floor(Math.random() * 10);
        column =  Math.floor(Math.random() * 10);
        str = JSON.stringify(row).concat(JSON.stringify(column));
        // row and column are converted to string to check if they are already present in set.
        // if they are not present they condition becomes false and it is added to the set.
        // if it is present then loop will run till it produces a unique row, column combination.
    }
    while(mySet.has(str));

    mySet.add(str);

    playGame(row, column);
}

function switchPlayer()
{
    // after each move if activePlayer is human then activePlayer will be computer. 
    // on same lines opponent is changed.
    activePlayer = (activePlayer.isHuman) ? computer : player;
    opponent = (opponent.isHuman) ? computer: player;

    // to display the who's turn it is 
    turnUi();
}