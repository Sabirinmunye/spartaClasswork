$(function(event){
	
	console.log('dom is ready');
})
//variables for players and moves

//player 1 move
// var player1Move = [];
// //player 2 move
// var player2Move = [];
// //winning combinations array
// // var wins [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]],


// // find box attributes
var boxes = $("td");

$(boxes).each(function(index, box){
  console.log($(box).attr("data-num"));
})
