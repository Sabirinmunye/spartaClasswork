// var calculator = (prompt("enter 'a' for basic calculator"));
// console.log(calculator);

var number1 = parseInt(prompt("enter first number:"));
var operator = (prompt("+ - / *"));
var number2 = parseInt(prompt("enter second number:"));


function basicCalculator(number1, operator, number2) {
	if (operator == "+") {
		var sum = number1 + number2;
		return (sum)
		console.log(sum);
		}
	else if (operator == "-") {
		var sum ="number1" - "number2";
		return (sum)
		console.log(sum);
	}
	else if (operator == "/") {
		var sum ="number1"/"number2";
		return (sum)
		console.log(sum);
		}
	else if (operator == "*") {
		var sum ="number1" * "number2";
		return (sum)
		console.log(sum);
	}
}
basicCalculator(number1, operator, number2);
