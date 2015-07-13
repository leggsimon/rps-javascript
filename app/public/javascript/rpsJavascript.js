var RockPaperScissors = function(){
  this.choices = ['rock', 'paper', 'scissors']
  this.playersChoice = ""
  this.computersChoice = ""
};


RockPaperScissors.prototype.choose = function(choice){

  if (!(_.contains(this.choices, choice))) {
    throw new Error('Not a valid choice.');
  }
  this.playersChoice = choice
};


RockPaperScissors.prototype.computerDecision = function () {
  this.computersChoice = _.sample(this.choices)
};

RockPaperScissors.prototype.result = function () {
  if (this.playersChoice == 'rock') {
    if        (this.computersChoice == 'rock') {
      return 'Draw'
    } else if (this.computersChoice == 'paper') {
      return 'Computer'
    } else if (this.computersChoice == 'scissors') {
      return 'Player'
    }
  } else if (this.playersChoice == 'paper') {
    if        (this.computersChoice == 'paper') {
      return 'Draw'
    } else if (this.computersChoice == 'scissors') {
      return 'Computer'
    } else if (this.computersChoice == 'rock') {
      return 'Player'
    }
  } else if (this.playersChoice == 'scissors') {
    if        (this.computersChoice == 'scissors') {
      return 'Draw'
    } else if (this.computersChoice == 'rock') {
      return 'Computer'
    } else if (this.computersChoice == 'paper') {
      return 'Player'
    }
  }
};
