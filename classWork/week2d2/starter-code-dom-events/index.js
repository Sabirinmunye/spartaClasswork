document.addEventListener("DOMContentLoaded", function(){
// 	 var button = document.getElementById("myButton");

// function buttonClicked(){
// 	console.log("button was clicked")
// }
// button.addEventListener("click", buttonClicked)
// })


 var myForm =document.getElementById('myForm');
 myForm.addEventListener("submit", function(event){
 	console.log(this);
 	event.preventDefault();
 	var firstnameField = document.getElementById('firstname');
 	// console.log(firstnameField);
 	if (!firstnameField.value){
 		console.log('you must enter something')
 	}
console.log("for submitted")
 })
// var buttons = document.querySelectorAll('.myButtons');
// for (i=0; i<buttons.length; i++) {
// 	var b = buttons[i];
// 	b.addEventListener('click', function(event){
// 		console.log(this.value +'was clicked')
// 	}) 
})