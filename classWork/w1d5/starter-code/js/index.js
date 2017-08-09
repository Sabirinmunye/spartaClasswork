

function addTwo(n1 , n2) {
return n1 +n2; 


}

function addThree(n1, n2, n3) {
return n1 + n2 + n3


}


function multiplyTwo(n1,n2) {

return n1*n2


}


function increaseByPercentage(total, percentage) {
return total * (1 + percentage/100);


}


function reverseWord(word) {

return word.split("").reverse().join("");

}

function celciusToFahrenheit(celcius) {
return 32+(celcius*1.8)


}

function fahrenheitToCelcius(fahr) {

return (fahr - 32) *5/9; 


}

// BONUS QUESTION
function stripVowels(word) {

  return word.replace(/[aeiou]/gi, "");ß

}


// do not delete
runTests();
