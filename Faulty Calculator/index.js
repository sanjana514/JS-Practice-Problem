/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
*/
let random=Math.random(); // Generates a random number between 0 and 1
console.log(random);

let number1=prompt("Enter first number");
console.log(number1);
let number2=prompt("Enter second number");
console.log(number2);
let operation = prompt("Enter operation");
console.log(operation);

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random>0.1){
    console.log("performing correct operation");
    alert(`Result is:${eval(number1 + operation + number2)}`);
    
}
// else{
//     console.log("performing faulty operation");
//     alert(`Result is:${eval(number1 + obj[operation] + number2)}`);
// }