// !  calculator
var operator = prompt("Enter the Operator ( + - * /)");
var firstNumber = +prompt("Enter the first Number");
var secondNumber = +prompt("Enter the second Number");
var totalAmount = 0;



if (operator == "*") {
    totalAmount = firstNumber * secondNumber;
} else if (operator == "-") {
    totalAmount = firstNumber - secondNumber;
}
else if (operator == "/") {
    totalAmount = firstNumber / secondNumber;
}
else if (operator == "+") {
    totalAmount = firstNumber + secondNumber;
} else {
    console.log("You Enter wrong Operator");
}
console.log(totalAmount);


