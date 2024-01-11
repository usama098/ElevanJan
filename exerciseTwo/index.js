/*Challenge Two
Create a calculate.js file that exports a single function, calculate();
calculate() should accept three arguments: two numbers and a string.
If the string is one of the following signs - "+", "-", "/", "*" - the function should return 
the result of the relevant mathematical operator on the two numbers */

const calculate = require("./calculate.js")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOne, numberTwo, operator;


readline.question('Please enter number One: ', input => {
    numberOne = Number(input);

    readline.question('Please enter number Two: ', input => {
        numberTwo = Number(input);

        readline.question('Please enter an operator: ', input => {
            operator = input;

            // Now that we have all inputs, perform the calculation
            const result = calculate(numberOne, numberTwo, operator);
            readline.close();
        });
    });
});