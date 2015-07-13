var RockPaperScissors = function(){
  this.choices = ['rock', 'paper', 'scissors']
  this.choice = ""

};


RockPaperScissors.prototype.choose = function(choice){

  if (!(_.contains(this.choices, choice))) {

    throw new Error('Not a valid choice.');

  }

  return choice

};
