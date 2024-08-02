const gridContainer = document.querySelector('#grid-container');

function makeGrid(num){
    for(let i = 0; i <= num; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        
        for(let j = 0; j <= num; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.height = `${320/num}`+'px'
            gridSquare.style.width = `${320/num}`+'px'
            row.appendChild(gridSquare);        
        }

    }
}

makeGrid(16);