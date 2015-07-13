var RockPaperScissors = function(){
  this.choices = ['rock', 'paper', 'scissors']
  this.choice = ""
  this.computersChoice = ""
};


RockPaperScissors.prototype.choose = function(choice){

  if (!(_.contains(this.choices, choice))) {
    throw new Error('Not a valid choice.');
  }
  this.choice = choice
};


RockPaperScissors.prototype.computerDecision = function () {
  this.computersChoice = _.sample(this.choices)
};
