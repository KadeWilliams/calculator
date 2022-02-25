// TODO Create a new branch at the start of the day
const display = document.querySelector('#display');
const upperDisplay = document.querySelector('#upper-display');
const delBtn = document.querySelector('.delBtn');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal')
const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('.clear');


function clearDisplay() {
    display.innerText = '';
    upperDisplay.innerText = '';
}

function deleteElement() {
    let text = display.innerText;
    text = text.slice(0, -1);
    display.innerText = text;
}

function checkLength(number) {
    return display.innerText.length <= 9 ? number.value : '';
}

function addValue(number) {
    display.innerText += number.value
}

// numbers.forEach(number => getOps)


delBtn.addEventListener('click', deleteElement)

clear.addEventListener('click', clearDisplay);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        let shortEnough = checkLength(number)
        if (shortEnough) {
            addValue(number)
        }
    });
});


decimalBtn.addEventListener('click', () => {
    display.innerText += display.innerText.includes('.') || display.innerText.length >= 10 ? '' : '.';
})


function add(...numbers) {
    console.log(typeof (numbers))
    console.log(numbers)
    if (numbers.length < 1) {
        return "I'm empty"
    }
    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    return sum;
}

function subtract(...numbers) {
    let difference = numbers[0];
    for (let i = 1; i <= numbers.length - 1; i++) {
        difference -= numbers[i];
    }
    return difference;
}

function multiply(...numbers) {
    let product = 1;
    numbers.forEach(number => {
        product *= number;
    })
    return product;
}

function divide(...numbers) {
    let quotient = numbers[0];
    console.log(quotient)
    for (let i = 1; i <= numbers.length - 1; i++) {
        quotient /= numbers[i];
    }
    return quotient;
}

function operate(func, ...numbers) {
    return window[`${func}`](...numbers)
    return func(...numbers)
}

const expressions = [];

operatorBtns.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let expr = Number(display.innerText)
        let op;
        switch (e.target.value) {
            case '+':
                op = 'add'
                break;
            case '-':
                op = 'subtract'
                break;
            case '*':
                op = 'multiply'
                break;
            case '/':
                op = 'divide'
                break;
            default:
                display.innerText = '';
        }
        let final = operate(op, expr)
        display.innerText = final * 2
    })
})

