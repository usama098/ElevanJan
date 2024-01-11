const calculate = (a,b,c) => {
    if (c == "/"){
        console.log(a / b);
    } else if (c == "+"){
        console.log(a + b);
    } else if (c == "*"){
        console.log(a * b);
    } else if(c == "-" ){
        console.log(a - b);
    } else {
        console.log("incorrect usage");
    }
}

module.exports = calculate;