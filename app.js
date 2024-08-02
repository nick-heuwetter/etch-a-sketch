const gridContainer = document.querySelector('#grid-container');
const sizeBtn = document.querySelector('button')

function makeGrid(num){
    for(let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        
        for(let j = 0; j < num; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.height = `${360/num}`+'px'
            gridSquare.style.width = `${360/num}`+'px'
            row.appendChild(gridSquare);
            gridSquare.addEventListener('mouseenter', () => {
                gridSquare.style.backgroundColor = getRandomColor();
            })        
        }

    }
}

function changeSize(){
    let sizeInput = prompt('Pick a size from 1 - 100:');
    let sizeNumber = parseInt(sizeInput);
    if (sizeNumber > 100 || sizeNumber <= 0){
        alert('INVALID NUMBER');
    } else {
        gridContainer.innerHTML = '';
        makeGrid(sizeNumber);
    }   
}

function getRandomColor(){
    function getRandomNumber(){
        let randNum = Math.floor(Math.random()*255);
        return randNum;
    }
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

sizeBtn.addEventListener('click', changeSize);

makeGrid(64);