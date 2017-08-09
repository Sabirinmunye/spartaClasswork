var first_number  = null;
var second_number = null;
var operator      = null;
var answer;
var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');


for (i=0; i<numbers.length; i++) {
	var b = numbers[i];
	b.addEventListener('click', function(event){
		document.getElementsByClassName("display")[0].value = this.value;
		console.log(this.value +'was clicked');
			}) 
}

for (i=0; i<operators.length; i++) {
    var b = operators[i];
    b.addEventListener('click', function(event){
        console.log(this.value +'was clicked');
        operator = this.value;
        console.log(operator);
    })
}
var first_number  = null;
var second_number = null;
var operator      = null;
var answer;




function add(number1, number2){
	return number1+number2
}
function subtract(number1, number2) {
	return number1 - number2
}

function divide(number1, number2) {
	return number1/number2
}
function multiply(number1, number2) {
	return number1*number2
}
