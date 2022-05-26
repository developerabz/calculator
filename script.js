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
    return a / b;
}

function percent(a) {
    return (a/100);
}

function plusminus(a) {
    return -(a);
}


console.log(add(1,2));
console.log(multiply(1,2));
console.log(subtract(1,2));
console.log(divide(1,2));

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





/*const addition = document.querySelector(".plus");

addition.addEventListener("click", function() {
    const input = document.createElement('p');

    input.classList.add("input");
    input.textContent = "+";
    topPart.appendChild(input);
    oper = "plus";
});*/

///let one = document.querySelector(".one");

// need to have const input and classlist add
// so that you ca have the same digit on screen
// next convert event listener to one giant one
// by query selection of buttons and then 
//classify them using if statement and
// condition of if it contains a class for each
// button. also need to figure out how to seperate
// operand before and after the operator
// might use a giant if statement then multiple
// if else statements for each button inside them
// or the other way around


/*one.addEventListener("click", function() {
    const input = document.createElement('p');

    input.classList.add("input");
    input.textContent = "1";
    topPart.appendChild(input);
    if (oper == "") {
        operandFirst += "1";
    } else {
        operandSecond += "1";
    }
    
    
    
});*/

/*const two = document.querySelector(".two");

two.addEventListener("click", function() {
    const input = document.createElement('p');

    input.classList.add("input");
    input.textContent = "2";
    topPart.appendChild(input);
    if (oper == "") {
        operandFirst += "2";
    } else {
        operandSecond += "2";
    }
});*/
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

        
        /// take this out of this large event listener
        
        // and try again after making it as similar
        // as possible to the sketchgrid usage of clear button

    });
});

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

equal.addEventListener("click", function() {
    const inputItems = document.querySelectorAll(".input");

    inputItems.forEach((input) => {
        input.classList.remove("input");
        input.textContent = "";
        topPart.removeChild(input);
        
    });
    
        
        input.textContent = operate(operandFirst,oper,operandSecond);
        topPart.appendChild(input);
        /*operandFirst = "";
        operandSecond = "";
        oper = "";
        if (operandFirst === "") {
            operandFirst += 'operate(operandFirst,oper,operandSecond)}';
        }*/
        
  
    
        
    
});