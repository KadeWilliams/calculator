// TODO Create a new branch at the start of the day
const display = document.querySelector('#display');
const upperDisplay = document.querySelector('#upper-display');
const delBtn = document.querySelector('.delBtn');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal')
const numbers = document.querySelectorAll('.numbers');
const clear = document.querySelector('.clear');

const expressions = [];
const currOperator = [];

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
    expressions.length = 0;
    currOperator.length;
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
    display.innerText += number.value;
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


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(func, a, b) {
    return window[`${func}`](a, b)
}



// operatorBtns.forEach(operator => {
// operator.addEventListener('click', e => {
//     expressions.push(Number(display.innerText));
//     display.innerText = '';
//     let final;
//     let previousOperator;

//     if (e.target.value == '=' && typeof (final) == 'number') {
//         final = operate(previousOperator, expressions[0], expressions[1]);
//             expressions.length = 0;
//             expressions.push(final)
//             currOperator.pop()
//         }
//         if (expressions.length === 2 || e.target.value == '=') {
//             if (currOperator[0] == '=' && e.target.value != '=') {
//                 final = operate(operations[e.target.value], expressions[0], expressions[1]);
//             } else {
//                 final = operate(currOperator[0], expressions[0], expressions[1]);
//                 expressions.pop()
//                 expressions.pop()
//                 previousOperator = currOperator.pop();
//             }

//             expressions.push(final);
//             upperDisplay.innerText = final;
//         }
//         display.innerText = '';

//         currOperator.push(operations[e.target.value]);
//     })
// })

operatorBtns.forEach(operator => {
    operator.addEventListener('click', e => {
        let final;
        if (display.innerText == '') {
            currOperator.push(operations[e.target.value])
        } else {
            currOperator.push(operations[e.target.value])
            expressions.push(Number(display.innerText))
            if (e.target.value == '=') {
                currOperator.pop();
            }
            if (expressions.length == 2) {

                final = operate(currOperator[0], expressions[0], expressions[1]);
                console.log(expressions)
                expressions.length = 0;
                expressions.push(final);
                currOperator.shift();
                console.log(final);
                upperDisplay.innerText = final;
            }

            display.innerText = ''
        }

    })
})
