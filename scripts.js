let savedNum = document.getElementById("save-num");
let currNum = document.getElementById("current-num");
let count = 0;

function add() {
    count += 1; 
    currNum.textContent = count;
}

function subtract() {
    count -= 1; 
    currNum.textContent = count; 
}

function save() {
    let countStr = count + " - ";
    savedNum.textContent += countStr;
}