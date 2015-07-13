var game = new RockPaperScissors();


$("button").click(function(){

  game.playersChoice = $(this).html();
  game.computerDecision();
  $("#computer-choice").text(game.computersChoice);
  $("#winner").text("The winner is.....");
  $("#game-result").text(game.result());

});
