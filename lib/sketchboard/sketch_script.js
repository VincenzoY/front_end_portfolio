let numOfRows = 16;
let numOfCols = 16;

function makeBox(numOfRows, numOfCols) {
const sketchbox = document.querySelector('.sketchbox');
sketchbox.style.gridTemplateColumns = `repeat(${numOfCols}, 1fr)`;
sketchbox.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
let boxNumber = numOfRows*numOfCols;
for (let row = 1; row <= numOfRows; row++) {
    for (let col = 1; col <= numOfCols; col++) {
        const box = document.createElement('div');
        box.classList.add(`${boxNumber}`, 'box');
        box.style.gridColumn = `${col}`;
        box.style.gridRow = `${row}`;
        sketchbox.appendChild(box);
        boxNumber--;
    } 
}
}

const container = document.querySelector('container');

container.addEventListener('mouseover', select);

function select() {
    event.target.classList.add('selected');
}

function resetGrid() {
    makeBox(numOfRows, numOfCols);
    makeBox(numOfRows, numOfCols); //Second run of function removes "ghost" borders of previously coloured blocks
}

function resizeGrid() {
    numOfRows = prompt('How many rows would you like?');
    numOfCols = prompt('How many columns would you like?');
    makeBox(numOfRows, numOfCols);
    makeBox(numOfRows, numOfCols); //Second run of function removes "ghost" borders of previously coloured blocks
}

makeBox(numOfRows, numOfCols);