console.log(123);

var RockPaperScissors = function(){
  this.choices = ['rock', 'paper', 'scissors']

};


RockPaperScissors.prototype.choose = function(choice){

  if (!(choice in this.choices)) {

    throw new Error('Not a valid choice.');

  }




};