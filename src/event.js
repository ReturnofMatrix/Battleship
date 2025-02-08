import Gameboard  from './gameboard.js';
import { playerBoardUi } from './ui.js';

let playerBoard;

export function setupEvent()
{
    document.addEventListener('submit', (event) => {
        if(event.target.classList.contains('form'))
        {
            event.preventDefault();
            let input = document.querySelector('#player1');
            playerBoard = input.value;
            //New gameBoard is initialized on the player name.
            playerBoard = new Gameboard();
            input.value = '';
            console.log(playerBoard);
            console.log('print');
            // Ships are placed on the board manually.
            playerBoard.placeShip( 0, [[ 0, 0],[ 0, 1]]);
            playerBoard.placeShip( 1, [[ 1, 0],[ 1, 1],[ 1, 2]]);
            playerBoard.placeShip( 2, [[ 2, 0],[ 2, 1],[ 2, 2]]);
            playerBoard.placeShip( 3, [[ 3, 0],[3, 1],[ 3, 2],[3, 3]]);
            playerBoard.placeShip( 4, [[ 4, 0],[ 4, 1],[ 4, 2],[ 4, 3],[ 4, 4]]);

            //Render the playerBoard on the screen.
            playerBoardUi();
        }
    });

        document.addEventListener('click', (event) => {
            // To know which row and column player clicked on grid. dataset row and column values 
            // set which initializing are received here.
            if(event.target.classList.contains('cell'))
            {
                event.preventDefault();
                console.log(playerBoard.ships);
               
                let row = parseInt(event.target.dataset.row); 
                let column = parseInt(event.target.dataset.column);
                let clickedCell = [ row, column];
            
// shipPos is [[ship1Array],[ship2Array],...] first loop to select each ship.
// Second loop to select each coordinate of the ship.
// Array cant be compared directly so convert them to string.
                playerBoard.shipPos.forEach((ship,index) => {
                ship.forEach((cell) => {

                    if( JSON.stringify(cell) == JSON.stringify(clickedCell))
                    {
                        // Hit or miss will be decided in receiveAttack().
                        playerBoard.receiveAttack(row, column);
                    }
                    });
                });

                console.log(playerBoard.gameOver());
            }
        });           
    
}

export function getPlayerBoard(){
    return playerBoard;
}

