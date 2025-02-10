import { boardUi  } from './ui.js';
import { activePlayer, playGame, computerMove, gameOver} from './player';

let mySet = new Set();// Declared outside so data is persists.

export function setupEvent()
{
    document.addEventListener('click', (event) => {

        event.preventDefault();
        if(event.target.classList.contains('start'))
        {
            //Render the both the boards on the screen.
            boardUi();  
        }

        let str, row, column;
        // Only event on Computerboard are listened and when active player is human.
        const computerGrid = event.target.closest('.computerGrid');
        if(computerGrid)
        {
            // To only click on cells which are unique. 
            if(activePlayer.isHuman)
            {
                // To know which row and column player clicked on grid. 
                // dataset row and column values ( co-ordinates );
                // set while initializing are received here.
                row = parseInt(event.target.dataset.row); 
                column = parseInt(event.target.dataset.column);
                str = `${row},${column}`;

                // if cell is used before return before further execution.
                if(mySet.has(str))
                {
                    return;
                }
                mySet.add(str);
            }

            //player move.
            playGame(row, column);

            if(!gameOver)
            {
                // After player move computer move function is run.
                setTimeout( computerMove , 500);
            }
        }
    });              
}

