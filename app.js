const gridContainer = document.querySelector('#grid-container');
const blackBtn = document.querySelector('#blackBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');

function makeGridRainbow(num){
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

function makeGridBlack(num){
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
                gridSquare.style.backgroundColor = 'black';
            })        
        }

    }
}

function changeSizeBlack(){
    let sizeInput = prompt('Pick a pen size from 1 - 100:');
    let sizeNumber = parseInt(sizeInput);
    if (sizeNumber > 100 || sizeNumber <= 0){
        alert('INVALID NUMBER');
    } else {
        gridContainer.innerHTML = '';
        makeGridBlack(sizeNumber);
    }   
}

function changeSizeRainbow(){
    let sizeInput = prompt('Pick a pen size from 1 - 100:');
    let sizeNumber = parseInt(sizeInput);
    if (sizeNumber > 100 || sizeNumber <= 0){
        alert('INVALID NUMBER');
    } else {
        gridContainer.innerHTML = '';
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

blackBtn.addEventListener('click', changeSizeBlack);
rainbowBtn.addEventListener('click', changeSizeRainbow);

makeGridBlack(64);
