var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function(event) {
        console.log(this);
        event.preventDefault();
        var firstnameField = document.getElementById('firstname');
        console.log(firstnameField);
        if (!firstnameField.value) {
            console.log("you must enter firstname")
        } 
        console.log("for submitted")
    })

var newDiv = document.createElement("div");
div.innerHTML = "Hello";
document.getElementById("main").appendChild(newDiv);