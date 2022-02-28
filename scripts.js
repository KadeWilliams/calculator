// TODO Create a new branch at the start of the day
const display = document.querySelector('#display');
const upperDisplay = document.querySelector('#upper-display');
const delBtn = document.querySelector('.delBtn');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal')
const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('.clear');

const operations = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    equal: '='
}

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


function add(numbers) {
    const nums = [...numbers]
    if (nums.length < 1) {
        return "I'm empty"
    }
    let sum = 0;
    nums.forEach(number => {
        sum += number;
    });
    return sum;
}

function subtract(numbers) {
    const nums = [...numbers]
    let difference = nums[0];
    for (let i = 1; i <= nums.length - 1; i++) {
        difference -= nums[i];
    }
    return difference;
}

function multiply(numbers) {
    const nums = [...numbers]
    let product = 1;
    nums.forEach(number => {
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
}

const expressions = [];
const opers = [];

operatorBtns.forEach(operator => {
    operator.addEventListener('click', (e) => {
        let expr;
        let op
        if (display.innerText == '') {

        } else {
            expr = Number(display.innerText);
            expressions.push(expr);
            if (e.target.value == '=') {

                final = operate(opers.pop(), expressions)
            }

            switch (e.target.value) {
                case '+':
                    op = 'add'
                    opers.push(op)
                    break;
                case '-':
                    op = 'subtract'
                    opers.push(op)
                    break;
                case '*':
                    op = 'multiply'
                    opers.push(op)
                    break;
                case '/':
                    op = 'divide'
                    opers.push(op)
                    break;
            }
            display.innerText = '';
            if (expr || expr === 0) {
                upperDisplay.innerText += expr + e.target.value
            }
            // console.log(final)
            console.log(opers.pop(), expressions)
        }
    })
})
