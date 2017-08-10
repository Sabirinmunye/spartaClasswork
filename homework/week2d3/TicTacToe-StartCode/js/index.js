$(function(event){

//player 1 move
player1 = ("");
player2 = ("");
var player1Move = [];
// //player 2 move
var player2Move = [];
var turn = 0;
var playerTurn = $(".playerTurn")[0];

	


// // find box attributes
	var boxes = $("td");

$(boxes).each(function(index, box){
  console.log($(box).attr("data-num"));

  var element = $(box);
  // element.html('X')

 //  var $box = $(box);
  element.on('click', function(event) {
  	console.log('being clicked');
  	var box = $(this);
  	if ((turn % 2) == 0){
  		box.html('O');
  		box.addClass('O');
  		$(playerTurn).html("Its X's Turn");
  		turn ++;

  	}
  	//make the buttons change when u click//
	else{
		var box = $(this);
		box.html('X');
		box.addClass('X');
		$(playerTurn).html("Its O's Turn");
		turn++;
	}

	
	})

})


	// //winning combinations array
 // var wins [[0,1,2],[3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]],

//variables for players and moves


})
