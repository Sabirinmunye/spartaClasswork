// choose users first move//
function userChoice() {
    var userChoice = prompt ("Please choose Rock, paper or scissors");
    alert(userChoice);
    return userChoice;
} 
userChoice();

// find a computer move//
function computerChoice() {
    var computerChoice = Math.random();
alert(computerChoice)
    return computerChoice;
} 
computerChoice ();
    var result ="";
        var userScore=0;
    var computerScore=0;
function compare (choice1, choice2) {
    if (choice1===choice2) {
      return "It is a tie";
    }else if (choice1=="rock") {
            if (choice2== "scissors") {
              return "user wins, rock beats scissors";
                userScore++;
            }else{ 
                result = "Computer wins,paper beats rock";
                computerScore++;
            }
    } else if(choice1 == 'paper') {
        if(choice2 == 'rock') {
             return 'User wins, paper beats rock';
              userScore++;
        } else {
             return 'Computer wins, scissors beats paper';
              computerScore++;
          }
    } else if(choice1 == 'scissors') {
        if(choice2 == 'rock') {
              return'Computer wins, Rock beats scissors';
              computerScore++;
        } else {
              return 'User wins, scissors beats paper';
              userScore++;
    }
  }
}
alert(return);


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