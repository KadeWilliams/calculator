// TODO Create a new branch at the start of the day
// TODO Connect each button from the dom to the appropriate function within scripts


const delBtn = document.querySelector('.delBtn')
delBtn.addEventListener('click', () => {
    console.log('clicked!')
})
const clear = document.querySelector('.clear')

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
