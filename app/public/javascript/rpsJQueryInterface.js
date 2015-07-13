var game = new RockPaperScissors();


$("button").click(function(){
  
  game.playersChoice = $(this).html();
  console.log($(this).html());
  game.computerDecision();
  game.computersChoice
  console.log(game.computersChoice);
  game.result();
  console.log(game.result());
  
});