
var userChoice = '';
var computerChoice = '';
var userScore = 0;
var computerScore = 0;

// function to compare the choices
var compare = function(choice1, choice2) {
  var result = '';
  if(choice1 === choice2) {
    result = 'Tie';
  } else if(choice1 === 'rock') {
    if(choice2 === 'scissors') {
      result = 'User Wins, rock beats scissors';
      // adds one to the user score whenever they win a round
      userScore++;
    } else {
      result = 'Computer wins, paper beats rock';
      // adds one to the computer score whenever they win a round
      computerScore++;
    }
  } else if(choice1 === 'paper') {
    if(choice2 === 'rock') {
      result = 'User wins, paper beats rock';
      userScore++;
    } else {
      result = 'Computer wins, scissors beats paper';
      computerScore++;
    }
  } else if(choice1 === 'scissors') {
    if(choice2 === 'rock') {
      result = 'Computer wins, Rock beats scissors';
      computerScore++;
    } else {
      result = 'User wins, scissors beats paper';
      userScore++;
    }
  }
  alert(result);
};

// loop over the game

while(userScore<3 && computerScore<3){
  // ask for the user choice on each loop
  userChoice = prompt('What do you choose?');

  // randomise the computer choice on each loop
  computerChoice = Math.random();

  if(computerChoice  < 0.34) {
    computerChoice = 'rock';
  } else if(computerChoice <= 0.67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  
  // run the function to compare the choices.
  compare(userChoice, computerChoice);
  if (userScore == 3 ){
    alert("user wins");
  }else if (computerScore == 3) {
    alert("computer wins");
  }
  
}


