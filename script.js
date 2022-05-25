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


const equal = document.querySelector(".equal");

const topPart = document.querySelector(".top");

const input = document.createElement('p');

input.classList.add("input");

let operandFirst = +"";

let operandSecond = +"";

let oper = "";

equal.addEventListener("click", function() {
    alert(operate(operandFirst,oper,operandSecond));
});

const addition = document.querySelector(".plus");

addition.addEventListener("click", function() {
    input.textContent = "+";
    topPart.appendChild(input);
    oper = "plus";
});

let one = document.querySelector(".one");

one.addEventListener("click", function() {
    const input = document.createElement('p');

input.classList.add("input");
    input.textContent = "1";
    topPart.appendChild(input);
    
    
});

const two = document.querySelector(".two");

two.addEventListener("click", function() {

    input.textContent = "2";
    topPart.appendChild(input);
    operand += 2;
});

