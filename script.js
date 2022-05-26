

function add(a,b) {
    return +a + +b;
}

function multiply(a,b) {
    return a * b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return (a / b).toFixed(2);
}

function percent(a) {
    return (a/100);
}

function plusminus(a) {
    return -(a);
}



let operandFirst = "";

let operandSecond = "";

let oper = "";

function operate(a,operator,b) {

    operandFirst = Number(operandFirst);
    operandSecond = Number(operandSecond);
        if (operator === "plus") {
            return add(a,b);
        } else if (operator === "multiple") {
            return multiply(a,b);
        } else if (operator === "minus") {
            return subtract(a,b);
        } else if (operator === "divide") {
            return divide(a,b);
        } else if (operator === "percent") {
            return percent(a);
        } else if (operator === "plusminus") {
            return plusminus(a);
        } 

    
}




console.log(operate(1,"plus",2));


const equal = document.querySelector(".equal");

const topPart = document.querySelector(".top");

const input = document.createElement('p');

input.classList.add("input");

//this places the respective operand or operator on the display part of the caluclator
const array = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const arrayMath = ["plus", "minus", "multiple", "divide", "percent","plusminus"];

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("click", function() {

        for (let i = 0; i < array.length; i++) {
            if (button.classList.contains(array[i])) {
                const input = document.createElement('p');
    
                input.classList.add("input");
                input.textContent = `${i}`;
                topPart.appendChild(input);
                if (oper == "") {
                    operandFirst += `${i}`;
                } else {
                    operandSecond += `${i}`;
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



//this is for the actual operation and reassigning of the operation to
//the first operand parameter

equal.addEventListener("click", function() {
    const inputItems = document.querySelectorAll(".input");

    inputItems.forEach((input) => {
        input.textContent = "";
        topPart.removeChild(input);
        
    });
    
    if (oper == "divide" && operandSecond == 0) {
        input.textContent = "Nice Try!";
        topPart.appendChild(input); 
    } else {
        input.textContent = `${operate(operandFirst,oper,operandSecond)}`;
        topPart.appendChild(input);
        operandFirst = operate(operandFirst,oper,operandSecond);
        operandSecond = "";
        oper = "";
    }
    
});

// this removes everything in the display part of the calculator
const cleary = document.querySelector(".clear");

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