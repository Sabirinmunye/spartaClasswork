// 1.
// Get all elements with the class 'like'. Store them in a veriable called 'q1'
var q1 = document.getElementsByClassName('like')

// 2.
// Using the variable from q1, apply the class 'important' to each of the 'like' elements
for (i=0; i<q1.length; i++) {
	q1[i].classList.add('important');
}

// 3.
// Get all elements with the class 'article-title'. Store them in a veriable called 'q3'
// Remove the second one from the dom.
var q3 = document.getElementsByClassName("article-title")
q3[1].remove();
// 4.
// Find the element with the ID of masthead. Store them in a variable called q4. Remove the class 'border-heavy'
var q4 = document.getElementById("masthead");
q4.classList.remove("border-heavy");
// Find all LI elements inside of the nav. Store them in a variable called q5.
// If they have the class 'green', add the class 'bold'
var q5 = document.querySelectorAll('nav li')
for (i=0; i<q5.length; i++) {
	if (q5[i].className.includes("Green"));
	q5[i].classList.add("bold");
}

// 6.
// Find the element with the ID of 'main-heading', store it in a variable called q6.
// Change the element text to read 'This is the new page heading'
var q6 = document.getElementById("main-heading")
q6.innerHTML = "this is the new page heading";

// 7.
// Create the element "<h4>I Am A New Element</h4>". Apeend it to the 'main' element.
var headFour =document.createElement('h4');
var mainTag = document.getElementsByTagName("main");
headFour.innerHTML = 'I am a new element';
mainTag[mainTag.length-1].appendChild(headFour); 