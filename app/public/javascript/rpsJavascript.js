var RockPaperScissors = function(){
  this.choices = ['rock', 'paper', 'scissors']
  this.choice = ""

};


RockPaperScissors.prototype.choose = function(choice){

  if (this.choices.indexOf(choice) < 0) {

    throw new Error('Not a valid choice.');

  }




  return choice




};
