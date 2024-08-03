const gridContainer = document.querySelector('#grid-container');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');
const clearBtn = document.querySelector('#clearBtn');
const eraserBtn = document.querySelector('#eraserBtn');

let isEraserActive = false;

function makeGrid(num, colorFunction){
    gridContainer.innerHTML = '';
    
    for(let i = 0; i < num; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
        
        for(let j = 0; j < num; j++){
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('grid-square');
            gridSquare.style.height = `${720/num}`+'px'
            gridSquare.style.width = `${720/num}`+'px'
            row.appendChild(gridSquare);
            gridSquare.addEventListener('mouseenter', () => {
                if(isEraserActive) {
                    gridSquare.style.backgroundColor = 'white';
                } else{
                gridSquare.style.backgroundColor = colorFunction();
                }
            });        
        }

    }
}

function makeGridBlack(num) {
    makeGrid(num, () => 'black');
}

function makeGridRainbow(num) {
    makeGrid(num, getRandomColor);
}

function changeSizeBlack(){
    let sizeInput = prompt('Pick a pen size from 1 - 100:');
    let sizeNumber = parseInt(sizeInput);
    if (sizeNumber > 100 || sizeNumber <= 0){
        alert('INVALID NUMBER');
    } else if(sizeInput === ''){
        alert('INVALID NUMBER')
    } else {
        makeGridBlack(sizeNumber);
    }   
}

function changeSizeRainbow(){
    let sizeInput = prompt('Pick a pen size from 1 - 100:');
    let sizeNumber = parseInt(sizeInput);
    if (sizeNumber > 100 || sizeNumber <= 0){
        alert('INVALID NUMBER');
    } else if(sizeInput === ''){
        alert('INVALID NUMBER')
    } else {
        makeGridRainbow(sizeNumber);
    }   
}

function getRandomColor(){
    function getRandomNumber(){
        let randNum = Math.floor(Math.random()*255);
        return randNum;
    }
    return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}

function clear(){
    document.querySelectorAll('.grid-square').forEach((square) => {
        square.style.backgroundColor = 'white';
    });
}

function toggleEraser() {
    isEraserActive = !isEraserActive;
    eraserBtn.classList.toggle('active', isEraserActive);
}

blackBtn.addEventListener('click', changeSizeBlack);
rainbowBtn.addEventListener('click', changeSizeRainbow);
clearBtn.addEventListener('click', clear);
eraserBtn.addEventListener('click', toggleEraser);

makeGridBlack(64);
