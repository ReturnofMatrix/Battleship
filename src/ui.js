import { activePlayer, opponent } from "./player";

const body = document.querySelector('body');

export function nameUi(){

    const button = document.createElement('button');
    button.textContent = 'Start The game.'
    button.classList.add('start');

    body.appendChild(button);
}

export function boardUi(){
    body.textContent = '';

    //Title of the game at the top.
    const title = document.createElement('div');
    title.textContent = 'Battleship.';
    title.classList.add('title');
    body.appendChild(title);

    // div to display who's turn it is.
    const turn = document.createElement('div');
    turn.classList.add('turn');
    body.appendChild(turn);
    turnUi();// for initial turn display.
    
    //gridDiv has body playerboard grid and computerBoard grid.
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    body.appendChild(gridDiv);

    // Player div with player grid (10 * 10) 
    const playerGridDiv = document.createElement('div');
    playerGridDiv.classList.add('playerGridDiv');
    const playerGrid = document.createElement('div');
    playerGrid.classList.add('grid');
    playerGrid.classList.add('playerGrid');
    playerGridDiv.appendChild(playerGrid);
    gridDiv.appendChild(playerGridDiv);

    const p1 = document.createElement('p');
    p1.textContent = 'Player board.'
    playerGridDiv.appendChild(p1);

    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            const div = document.createElement('button');
            div.classList.add('cell');
            div.dataset.row = i;
            div.dataset.column = j;
            playerGrid.appendChild(div);
        }
    }

    // computer (10 * 10) grid. 
    const computerGridDiv = document.createElement('div');
    computerGridDiv.classList.add('computerGridDiv');
    const computerGrid = document.createElement('div');
    computerGrid.classList.add('grid');
    computerGrid.classList.add('computerGrid');
    computerGridDiv.appendChild(computerGrid);
    gridDiv.appendChild(computerGridDiv);

    const p2 = document.createElement('div');
    p2.textContent = 'Computer board.'
    computerGridDiv.appendChild(p2);

    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            const div = document.createElement('button');
            div.classList.add('cell');
            div.dataset.row = i;
            div.dataset.column = j;
            computerGrid.appendChild(div);
        }
    }
}

//Only the cell which is hit or missed is rendered by functions.
// active player determines the which board is selected and ui of that board is rendered.
export function hitUi( i, j)
{
    let selectedBoard;
    if(activePlayer.isHuman)
    {
        selectedBoard = document.querySelector('.computerGridDiv');
    }
    else
    {
        selectedBoard = document.querySelector('.playerGridDiv');
    }
    
    const hitDiv = selectedBoard.querySelector(`[data-row='${i}'][data-column='${j}']`);
    hitDiv.style.backgroundColor = 'red';
    hitDiv.textContent = 'X';
}

export function missedUi( i, j)
{
    let selectedBoard;
    if(activePlayer.isHuman)
    {
        selectedBoard = document.querySelector('.computerGridDiv');
    }
    else
    {
        selectedBoard = document.querySelector('.playerGridDiv');
    }
    const missDiv = selectedBoard.querySelector(`[data-row='${i}'][data-column='${j}']`);
    missDiv.style.backgroundColor = 'grey';
    missDiv.textContent = 'o';
}

export function gameOverUi(){
    body.textContent = ''
    const div = document.createElement('div');
    body.appendChild(div);
    if(activePlayer.isHuman){
        div.textContent = 'Player won, Computer lost.';
    }else{
        div.textContent = 'Computer won, Player lost.';
    }
}

export function turnUi()
{
    const div = document.querySelector('.turn');
    if(activePlayer.isHuman)
    {
        div.textContent = `Player turn.`;
    }
    else
    {
        div.textContent = `Computer turn.`;
    }
}