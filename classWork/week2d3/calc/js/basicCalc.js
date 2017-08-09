//set initial state variables
//find numberss//

var numbers = document.getElementsByClassName('Number');

//find operators

var operator = document.getElementsByClassName('operator');

//find equal

var eq = document.getElementsByClassName('eq')[0];


//find clear
var clear = document.getElementsByClassName('clear')[0];

// find display
var display= document.getElementsByClassName('display')[0];

// variables for first_number in calculation
var first_number = 2;


// variable for second number in calculation
var second_number = 2;

// variable for operator
var operators = null;

//variable for answeer

var answer =null;


// set up event listeners//

function setupEventListeners() {
	//numbers event listeners
for (var i=0; i<numbers.length; i++) {
	numbers[i].addEventListener("click", updateAndDisplayNumber)
}
}

	//operators event listeners
for (var i=0; i < operator.length; i++) {
	operator[i].addEventListener("click", updateAndDisplayOperator)

}

	//equals event listeners
	eq.addEventListener('click', function(){
		calculations(first_number, operator, second_number)
	});

	//clear event listeners
clear.addEventListener('click', clearCalc);	

// function for calculator

// add
function add(firstNumber, secondNumber){
	return firstNumber + secondNumber;

}

// subtract
function subtract(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

// multiply
function multiply(firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}
// divide
function divide (firstNumber, secondNumber) {
	return firstNumber / secondNumber;
}


// calculations 
function calculations(firstNumber,operator, secondNumber){
	switch (operator) {
		case "+": 
			display.value = add(firstNumber,secondNumber);
			break;
		case "-":
			display.value = subtract(firstNumber,secondNumber)
			break;
		case "x":
			display.value =multiply(firstNumber,secondNumber)
			break;
		case "/":
			display.value = divide(firstNumber, secondNumber)
			break;


	}
}



// clear the calculator

function clearCalc() {
first_number = null;
second_number = null;
operator = null;
display.value = "";

}
// display and store buttons clicked

function updateAndDisplayNumber () {
	var btn = this.value;
	display.value = btn;

	if(first_number===null) {
		first_number = parseFloat(btn);
	} else {
		second_number =parseFloat(btn)
	
	}
}

// display and store the operators

function updateAndDisplayOperator () {
	operator = this.value;
	display.value = operator;


}

setupEventListeners();
var result = multiply(2,4)




