class Calculator {
    constructor(firstElement, secondElement, firstOperator, runningTotal) {
        this.firstElement = firstElement;
        this.secondElement = secondElement;
        this.firstOperator = firstOperator;
        this.isFirstElement = true;
        this.runningTotal = runningTotal;
    }

    clear() {
        this.firstElement = 0;
        this.secondElement = 0;
        this.isFirstElement = true;
        this.runningTotal = 0;
    }

    compute() {
        this.runningTotal = evaluate(this.firstElement + this.firstOperator + this.secondElement);
        this.firstElement = this.runningTotal,toString();
        this.secondElement = "";
    }
}

let calc = new Calculator("", "", "", 0);

function addElement(element) {
    
    if (element === "plus") {
        calc.firstOperator = "+";
        calc.isFirstElement = false;
    } else if (element === "minus") {
        calc.firstOperator = "-";
        calc.isFirstElement = false;
    } else if (element === "divide") {
        calc.firstOperator = "/";
        calc.isFirstElement = false;
    } else if (element === "multiply") {
        calc.firstOperator = "*";
        calc.isFirstElement = false;  
    } else if (element === "dot") {
        if (calc.isFirstElement) {
            calc.firstElement += ".";
            document.querySelector(".screen").innerText = calc.firstElement;
        } else {
            calc.secondElement += ".";
            document.querySelector(".screen").innerText = calc.secondElement;
        } 
    }else if (element === "equal") {
        calc.compute();
        document.querySelector(".screen").innerText = calc.runningTotal;
    } else {
        if (calc.isFirstElement) {
            calc.firstElement += element;
            document.querySelector(".screen").innerText = calc.firstElement;
        } else {
            calc.secondElement += element;
            document.querySelector(".screen").innerText = calc.secondElement;
        }  
    }
    console.log(calc);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".key").forEach(key => {
        key.addEventListener("click", () => {
            addElement(key.id);
        })
    })
})

document.querySelector("#newCalc").addEventListener("click", () => {
    calc.clear();
    document.querySelector(".screen").innerText = ""
})

function evaluate(str) {
    return new Function("return " + str)();
}