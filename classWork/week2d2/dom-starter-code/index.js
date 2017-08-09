// var selected = document.querySelectorAll('li.selected');
// console.log(selected);

// selected[1].innerHTML = 'HELLO NAIL'

// for (i=0; i<selected.length; i++) {
// 	selected[i].innerHTML = 'HELLO NAIL';
// }

// adding a new element//

// var pTag =document.createElement('p');
// pTag.innerHTML = 'HELLO NIALL THIS IS A NEW PTTAG YOU ARE WELMCOME';
// document.getElementById('wrapper').appendChild(pTag);

var list = ["niall", "ollie", "richard", "steve", "tim", "lexie", "kieran"]
var ul = document.getElementById('list');
function addNewLi (text) {
	var newLi = document.createElement('li');
	newLi.innerHTML = text;
	ul.appendChild(newLi);
}
for (i=0; i<list.length; i++) {
	addNewLi(list[i]);
}
var allTheListItems = document.getElementsByTagName('li');
for (i=0; i<allTheListItems.length; i++) {
	if ((i % 2) == 0)
  allTheListItems[i].classList.add('even');
};

var countSpan = document.getElementById('count');
countSpan.innerHTML = allTheListItems.length;


// var selected = document.querySelectorAll('li.selected');
// console.log(selected);
// selected[0].innerHTML = "Niall";

// var selected = document.querySelectorAll('li.selected');
// console.log(selected);
// selected[1].innerHTML = "Ollie";

// var liTag = document.createElement('li');
// liTag.innerHTML = "richard";
// document.getElementById('list').appendChild(liTag);

// var liTag = document.createElement('li');
// liTag.innerHTML = "Steve";
// document.getElementById('list').appendChild(liTag);

// var liTag = document.createElement('li');
// liTag.innerHTML = "Tim";
// document.getElementById('list').appendChild(liTag);

// var liTag = document.createElement('li');
// liTag.innerHTML = "Lexie";
// document.getElementById('list').appendChild(liTag);

// var liTag = document.createElement('li');
// liTag.innerHTML = "kieran";
// document.getElementById('list').appendChild(liTag);