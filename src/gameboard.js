// gameboard.js
import { Ship } from './ship';
import { hitUi, missedUi } from './ui';

export default class Gameboard{

    constructor(){
    //Gameboard array.
    this.gameboard = [];
    //To store the actual ships objects in array.
    this.ships= [];
    //To shore the position array of each ship.
    this.shipPos = [];
    //To remember the missed attacks.
    this.missedAttack = [];

// Create gameboard array with 100 capacity i 10 rows and j 10 columns with 0.
    for(let i = 0; i < 10; i++)
    {
        this.gameboard[i] = [];

        for(let j = 0; j < 10; j++)
        {
            this.gameboard[i][j] = -1;
        }   
    }

    // Creating the ships here and then pushed on the ships array to be stored.
    this.ships.push(new Ship(2));
    this.ships.push(new Ship(3));
    this.ships.push(new Ship(3));
    this.ships.push(new Ship(4));
    this.ships.push(new Ship(5));
}

// posArray has position for that ship will be stored in shipPos array.
// ship is the reference to that ship like index of that ship in ships. 
    placeShip(ship, posArray){
        this.shipPos.push(posArray);

        posArray.forEach(pos => {
            this.gameboard[pos[0]][pos[1]] = ship;
        });
    }

//gameBoard[i][j] has the all the initial values stored.
// -1 for empty and ship index for their ship placement.
// If attack is correct then that ship hitCount++ or else pushed to missedAttack.
    receiveAttack( i, j )
    {
        if( this.gameboard[ i ][ j ] == -1)
        {
            this.missedAttack.push([ i, j]); 
            missedUi( i, j);
        }
        else{
            let ship = this.gameboard[ i ][ j ] ;
            if(this.ships[ship].isSunk())
            {
                return;
            }
            this.ships[ship].hit();
            hitUi( i, j);
        }
    }

// To check if every ships.isSunk() is true.
    gameOver(){

        return this.ships.every(ship => {
            return ship.isSunk()
        })
    }
}
