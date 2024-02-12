//Counter App

let bigNumber = 0; 


// Reset Button

function reset() {
    bigNumber = 0;
    document.getElementById('bigNumber').innerText = bigNumber;
}

document.getElementById('resetButton').onclick = reset;

// Increase Button

function increase() {
    bigNumber++;
    document.getElementById('bigNumber').innerText = bigNumber;
}

document.getElementById('increaseButton').onclick = increase;

// Decrease Button

function decrease() {
    bigNumber--;
    document.getElementById('bigNumber').innerText = bigNumber;
}

document.getElementById('decreaseButton').onclick = decrease;