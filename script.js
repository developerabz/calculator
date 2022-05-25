function add(a,b) {
    return a + b;
}

function multiply(a,b) {
    return a * b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b;
}

console.log(add(1,2));
console.log(multiply(1,2));
console.log(subtract(1,2));
console.log(divide(1,2));

function operate(a,operator,b) {
        if (operator === "plus") {
            return add(a,b);
        } else if (operator === "multiply") {
            return multiply(a,b);
        } else if (operator === "subtract") {
            return subtract(a,b);
        } else if (operator === "divide") {
            return divide(a,b);
        } 
}

console.log(operate(1,"plus",2));
