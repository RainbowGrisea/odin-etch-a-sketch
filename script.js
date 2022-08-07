const container = document.querySelector('.container');
const block = [];
const colorButton = document.querySelector('.randomColor');

// Create a 16 div (rows), in each 16 div (block) 
for (let i = 0; i < 9; i++) {
    block[i] = document.createElement('div');
    container.appendChild(block[i]);
    block[i].classList.add('column');

    for (let y = 0; y < 9; y++) {
        block[i][y] = document.createElement('div');
        block[i].appendChild(block[i][y]);
        block[i][y].classList.add('block');
        // block[i][y].addEventListener('mouseover', () => {
        //     block[i][y].style.backgroundColor = 'black';
        // });
        block[i][y].addEventListener('mouseover', fill
        );
    };
};

// Create a new grid with given 
const createNewGrid = document.querySelector('.new');
createNewGrid.addEventListener('click', () => {
    container.replaceChildren();
    let x = prompt('How large grid would you like to have?');
    while (x > 99 || x < 1 || !x) {
        x = prompt('Grid is too large! Please choose a number between 0 and 100!');
    };
    for (let i = 0; i < x; i++) {
        block[i] = document.createElement('div');
        container.appendChild(block[i]);
        block[i].classList.add('column');
        block[i].textContent = '';

        for (let y = 0; y < x; y++) {
            block[i][y] = document.createElement('div');
            block[i].appendChild(block[i][y]);
            block[i][y].classList.add('block');
            // block[i][y].addEventListener('mouseover', () => {
            //     block[i][y].style.backgroundColor = randomizeColor();
            // });
            block[i][y].addEventListener('mouseover', fill
            );
        };
    };
});

// Fill the background
function fill() {
    if (colorButton.textContent === 'Rainbow color: ON') {
        this.style.backgroundColor = ('rgb(' + Math.floor(Math.random() * 255 + 1) + ',' + + Math.floor(Math.random() * 255 + 1) + ',' + Math.floor(Math.random() * 255 + 1) + ')');
    };
    if (colorButton.textContent === 'Rainbow color: OFF') {
        this.style.backgroundColor = 'black';
    };
};


colorButton.addEventListener('click', function colorSwitch() {
    if (this.textContent === 'Rainbow color: OFF') {
        this.textContent = 'Rainbow color: ON';
    } else if (this.textContent === 'Rainbow color: ON') {
        this.textContent = 'Rainbow color: OFF';
    };
});