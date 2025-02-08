//index.js
import './style.css';
import gameBoard from './gameboard';
import { nameUi } from './ui';
import { setupEvent, getPlayerBoard } from './event';

nameUi();

setupEvent();

let playerName = getPlayerBoard();

// if(playerName)
// {
//     playerName.placeShip( 1, [[ 1, 3],[ 4, 5]]);
//     playerName.placeShip( 2, [[ 1, 3],[ 4, 5],[ 6, 7]]);
//     playerName.placeShip( 3, [[ 1, 3],[ 4, 5],[ 6, 7]]);
//     playerName.placeShip( 4, [[ 1, 3],[ 4, 5],[ 6, 7],[ 6, 7]]);
//     playerName.placeShip( 5, [[ 1, 3],[ 4, 5],[ 6, 7],[ 6, 7],[ 6, 7]]);
// }

// let hit = Roshan.receiveAttack( 4, 6);



