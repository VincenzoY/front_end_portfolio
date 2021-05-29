function add(a, b) {
    return (Number(a)+Number(b)).toString();
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return 'NaN';
    return a / b;
}

function operate(a, b, operator) {
    if (operator == 'add') return add(a, b);
    if (operator == 'subtract') return subtract(a, b);
    if (operator == 'multiply') return multiply(a, b);
    if (operator == 'divide') return divide(a, b);
}

let numbers = Array.from(document.querySelectorAll('.square'));
let operations = Array.from(document.querySelectorAll('.rect'));
let display = document.querySelector('.displayed');
let previous = document.querySelector('.previous');
let solve = document.querySelector('#equals');
let clear = document.querySelector('#clear');

let temp = '';
let memory = [];
let z = '';
let order = [];
let addSubtract = [];
let multiplyDivide = [];
let digits = ''


function values() {
    if (this.textContent == '=') return;
    if (temp.length > 7) return;
    temp += this.textContent;
    display.textContent = temp;
    
}

function sign() {
    if (this.textContent === 'C') return;
    if (temp === '') return
    memory.push(temp);
    temp = '';
    display.textContent = temp;
    memory.push(this.textContent);
    previous.textContent = memory.join(' ');
}


function x(element) {
    return element == 'x';
}

function d(element) {
    return element == '÷';
}

function a(element) {
    return element == '+';
}

function s(element) {
    return element == '-';
}

function doMultiply() {
    z = multiply(memory[(memory.findIndex(x)-1)], memory[memory.findIndex(x)+1])
    memory.splice((memory.findIndex(x)-1), 3, `${z}`)
}

function doDivide() {
    z = divide(memory[(memory.findIndex(d)-1)], memory[memory.findIndex(d)+1])
    memory.splice((memory.findIndex(d)-1), 3, `${z}`)
}

function doAdd() {
    z = add(memory[(memory.findIndex(a)-1)], memory[memory.findIndex(a)+1])
    memory.splice((memory.findIndex(a)-1), 3, `${z}`)
}

function doSubtract() {
    z = subtract(memory[(memory.findIndex(s)-1)], memory[memory.findIndex(s)+1])
    memory.splice((memory.findIndex(s)-1), 3, `${z}`)
}

function getOperations() {
    for(let i = 0; i < memory.length; i++) {
        if (memory[i] === 'x'||memory[i] === '÷'||memory[i] === '+'||memory[i] === '-') {
            order.push(memory[i]);
        }
    } for(let i = 0; i < order.length; i++) {
        if (order[i] === '+'||order[i] === '-') {
            addSubtract.push(order[i]);
        }
    } for(let i = 0; i < order.length; i++) {
        if (order[i] === '÷'||order[i] === 'x') {
            multiplyDivide.push(order[i]);
        }
    }
}

function doOperations() {
    for (let i = 0; i < multiplyDivide.length; i++) {
        if (multiplyDivide[i] === 'x') {
            doMultiply();
    } else if (multiplyDivide[i] === '÷') {
            doDivide();
    }} 
    for (let i = 0; i < addSubtract.length; i++) {
        if (addSubtract[i] === '+') {
            doAdd();
    } else if (addSubtract[i] === '-') {
            doSubtract();
    }}
}

function equals() {
    if (temp === '') return
    memory.push(temp);
    temp = '';
    previous.textContent = memory.join(' ');
    display.textContent = temp;
    getOperations();
    doOperations();
    digits = memory[0].split('');
    if (digits.length > 7) {
        memory[0] = Number(memory[0]).toPrecision(8)
    }
    display.textContent = memory;
    reset();
} 

function reset() {
    temp = '';
    memory = [];
    z = '';
    order = [];
    addSubtract = [];
    multiplyDivide = [];
}

function empty() {
    reset();
    previous.textContent = '';
    display.textContent = '';
}

numbers.forEach(number => number.addEventListener('click', values));
operations.forEach(operation => operation.addEventListener('click', sign));
solve.addEventListener('click', equals);
clear.addEventListener('click', empty);
