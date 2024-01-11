/*Challenge One
Create a program that takes in a number and counts down from this number to zero. 
Instead of displaying zero it should display BLASTOFF */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Please enter a number: ', input => {
    const number = Number(input);

// let userInput = prompt("Please enter a number");

// let number = Number(userInput);

for(let i = number; i >= 0; i--){
    if(i > 0){
        console.log(i);
    } else  {
        console.log("BLASTOFF");
    }
}
readline.close();

});