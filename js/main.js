class Calculator {
    constructor(firstElement, secondElement, firstOperator, runningTotal) {
        this.firstElement = firstElement;
        this.secondElement = secondElement;
        this.firstOperator = firstOperator;
        this.runningTotal = runningTotal;
    }

    clear() {
        this.firstElement = 0;
        this.secondElement = 0;
        this.firstOperator = "";
        this.secondOperator = "";
    }

    compute() {
        this.runningTotal = eval(this.firstElement + this.firstOperator + this.secondElement);
    }
}

let calc = new Calculator(0, 0, "", 0);