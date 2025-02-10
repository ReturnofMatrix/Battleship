import { boardUi  } from './ui.js';
import { activePlayer , opponent, playGame, computerMove} from './player';

export function setupEvent()
{
        document.addEventListener('click', (event) => {

            event.preventDefault();
            if(event.target.classList.contains('start'))
            {
                //Render the both the boards on the screen.
                boardUi();  
            }

            // Only event on Computerboard are listened and when active player is human.
            let row, column;
            const computerGrid = event.target.closest('.computerGrid');
            if(computerGrid)
            {
                if(activePlayer.isHuman)
                {
                    // To know which row and column player clicked on grid. 
                    // dataset row and column values ( co-ordinates );
                    // set while initializing are received here.
                    row = parseInt(event.target.dataset.row); 
                    column = parseInt(event.target.dataset.column);
                }

                //player move.
                playGame(row, column);

                // After player move computer move function is run.
                setTimeout( computerMove , 1000);
            }
        });              
}

