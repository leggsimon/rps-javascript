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
  console.log("am i being run once?")
  var decision = _.sample(this.choices)

  this.computersChoice = decision
  console.log("am i being run twice?")
};
