

function add(a,b) {
    return (+a + +b).toFixed(2);
}

function multiply(a,b) {
    return (a * b).toFixed(2);
}

function subtract(a,b) {
    return (a - b).toFixed(2);
}

function divide(a,b) {
    return (a / b).toFixed(2);
}

function percent(a) {
    return (a/100).toFixed(2);
}

function plusminus(a) {
    return (-(a)).toFixed(2);
}



let operandFirst = "";

let operandSecond = "";

let oper = "";

function operate(a,operator,b) {
    operandFirst = Number(operandFirst);
    operandSecond = Number(operandSecond);
        if (operator === "+") {
            return add(a,b);
        } else if (operator === "*") {
            return multiply(a,b);
        } else if (operator === "-") {
            return subtract(a,b);
        } else if (operator === "/") {
            return divide(a,b);
        } else if (operator === "%") {
            return percent(a);
        } else if (operator === "plusminus") {
            return plusminus(a);
        }
}






const equal = document.querySelector(".equal");

const topPart = document.querySelector(".top");

const input = document.createElement('p');

input.classList.add("input");

//this places the respective operand or operator on the display part of the caluclator
const array = ["zero","one","two","three","four","five","six","seven","eight","nine", "decimal"];
const arrayMath = ["+", "-", "*", "/", "%","plusminus"];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", function() {
        for (let i = 0; i < array.length; i++) {
            if (button.classList.contains(array[i])) {
                const input = document.createElement('p');
                input.classList.add("input");
                input.textContent = button.textContent;
                topPart.appendChild(input);
                if (oper == "") {
                    operandFirst += button.textContent;
                } else {
                    operandSecond += button.textContent;
                }
            }
        }

        for (let c = 0; c < arrayMath.length; c++) {
            if (button.classList.contains(arrayMath[c])) {
                const input = document.createElement('p');

                input.classList.add("input");
                input.textContent = button.textContent;
                topPart.appendChild(input);
                oper = arrayMath[c];
            }
        }

    });

});

const operatorSymbols = ["+", "-", "/", "*"];

document.addEventListener("keypress", (event) => {
    if (Number(event.key)) {
        const input = document.createElement('p');
        input.classList.add("input");
        input.textContent = event.key;
        topPart.appendChild(input);
        if (oper == "") {
            operandFirst += event.key;
        } else {
            operandSecond += event.key;
        }
    }

    if (operatorSymbols.includes(event.key)) {
        const input = document.createElement('p');

        input.classList.add("input");
        input.textContent = event.key;
        topPart.appendChild(input);
        oper = event.key;
    }
});


//this is for the actual operation and reassigning of the operation to
//the first operand parameter

equal.addEventListener("click", function() {
    const inputItems = document.querySelectorAll(".input");

    inputItems.forEach((input) => {
        input.textContent = "";
        topPart.removeChild(input);
    });
    if ((oper == "divide" && operandSecond == 0)) {
        input.textContent = "Nice Try!";
        topPart.appendChild(input);
    } else if (operandSecond === "") {
        input.textContent = operandFirst;
    } else {
        input.textContent = `${operate(operandFirst,oper,operandSecond)}`;
        topPart.appendChild(input);
        operandFirst = operate(operandFirst,oper,operandSecond);
        operandSecond = "";
        oper = "";
    }
});

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const inputItems = document.querySelectorAll(".input");

        inputItems.forEach((input) => {
            input.textContent = "";
            topPart.removeChild(input);
        });
        if ((oper == "divide" && operandSecond == 0)) {
            input.textContent = "Nice Try!";
            topPart.appendChild(input);
        } else if (operandSecond === "") {
            input.textContent = operandFirst;
            topPart.appendChild(input);
        } else {
            input.textContent = `${operate(operandFirst,oper,operandSecond)}`;
            topPart.appendChild(input);
            operandFirst = operate(operandFirst,oper,operandSecond);
            operandSecond = "";
            oper = "";
        }
    }
});

// this removes everything in the display part of the calculator
const cleary = document.querySelector(".clear");
const clearClick = () => {
    cleary.addEventListener ("click", () => {
        const inputItems = document.querySelectorAll(".input");
        inputItems.forEach((input) => {
            input.textContent = "";
            topPart.removeChild(input);
            operandFirst = "";
            operandSecond = "";
            oper = "";
        });
    });
}
clearClick();
document.addEventListener("keypress", (event) => {
    if (event.key === "Delete") {
        const inputItems = document.querySelectorAll(".input");
        inputItems.forEach((input) => {
            input.textContent = "";
            topPart.removeChild(input);
            operandFirst = "";
            operandSecond = "";
            oper = "";
        });
    }
});
