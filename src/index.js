//index.js
import './style.css';
import { gameboard } from './gameboard';

let Roshan = new gameboard(Roshan);
let Neivedya = new gameboard(Neivedya);

Roshan.placeShip( 1, [[ 1, 3],[ 4, 5]]);
Roshan.placeShip( 2, [[ 1, 3],[ 4, 5],[ 6, 7]]);
Roshan.placeShip( 3, [[ 1, 3],[ 4, 5],[ 6, 7]]);
Roshan.placeShip( 4, [[ 1, 3],[ 4, 5],[ 6, 7],[ 6, 7]]);
Roshan.placeShip( 5, [[ 1, 3],[ 4, 5],[ 6, 7],[ 6, 7],[ 6, 7]]);

let hit = Roshan.receiveAttack( 4, 6);

