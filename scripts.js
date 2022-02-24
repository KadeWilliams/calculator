// TODO Create a new branch at the start of the day


function clearDisplay() {
    display.innerText = '';
    upperDisplay.innerText = '';
}

function deleteElement() {
    let text = display.innerText;
    text = text.slice(0, -1);
    display.innerText = text;
}

const display = document.querySelector('#display');
const upperDisplay = document.querySelector('#upper-display');
const delBtn = document.querySelector('.delBtn');
const operatorBtns = document.querySelectorAll('.operator');
const decimalBtn = document.querySelector('#decimal')

const op = operatorBtns.forEach(opBtn => {
    let op;
    opBtn.addEventListener('click', () => {
        if (opBtn.innerText == '+') {
            op = 'add'
        } else if (opBtn.innerText == '-') {
            op = 'subtract'
        } else if (opBtn.innerText == '/') {
            op = 'divide'
        } else if (opBtn.innerText == '*') {
            op = 'multiply'
        }
        return op;
    });
    return op;
});



delBtn.addEventListener('click', deleteElement)

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay);


const numbers = document.querySelectorAll('.numbers');

numbers.forEach(number => {
    number.addEventListener('click', () => {

        if (display.innerText.length >= 10) {

        } else {
            display.innerText += Number(number.value);
        }
    });
});


decimalBtn.addEventListener('click', () => {
    display.innerText += display.innerText.includes('.') ? '' : '.';
    // if (display.innerText.includes('.')) {

    // } else {
    //     console.log('No decimal in string.')
    //     display.innerText += '.'
    // }
})


const add = (...numbers) => {
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

const subtract = (...numbers) => {
    let difference = numbers[0];
    for (let i = 1; i <= numbers.length - 1; i++) {
        difference -= numbers[i];
    }
    return difference;
}

const multiply = (...numbers) => {
    let product = 1;
    numbers.forEach(number => {
        product *= number;
    })
    return product;
}

const divide = (...numbers) => {
    let quotient = numbers[0];
    console.log(quotient)
    for (let i = 1; i <= numbers.length - 1; i++) {
        quotient /= numbers[i];
    }
    return quotient;
}

const operate = (func, ...numbers) => {

    return func(...numbers)
}
