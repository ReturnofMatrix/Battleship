const body = document.querySelector('body');

export function nameUi(){
    const label1 = document.createElement('label');
    label1.textContent = 'Player1 : '
    label1.setAttribute('for', 'player1')
    const input1 = document.createElement('input');
    input1.setAttribute('id', 'player1')

    // const label2 = document.createElement('label');
    // label2.textContent = 'Player2 : '
    // label2.setAttribute('for', 'player2')
    // const input2 = document.createElement('input');
    // input2.setAttribute('id', 'player2');

    const button = document.createElement('button');
    button.textContent = 'submit'
    button.classList.add('name');

    const legend = document.createElement('legend');
    legend.textContent = 'Player Names.'

    const fieldset = document.createElement('fieldset');
    fieldset.appendChild(legend);
    fieldset.appendChild(label1);
    fieldset.appendChild(input1);
    fieldset.appendChild(button);
    // fieldset.appendChild(label2);
    // fieldset.appendChild(input2);
    const form = document.createElement('form');
    form.classList.add('form');
    form.appendChild(fieldset);
    body.appendChild(form);
}

export function playerBoardUi(){
    body.textContent = '';

    //Board grid container div
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    body.appendChild(gridDiv);

    for(let i = 0; i < 10; i++)
    {
        for(let j = 0; j < 10; j++)
        {
            const div = document.createElement('button');
            div.classList.add('cell');
            div.dataset.row = i;
            div.dataset.column = j;
            gridDiv.appendChild(div);
        }
    }
}