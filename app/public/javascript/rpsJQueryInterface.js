var game = new RockPaperScissors();

var playerCount = 0
var computerCount = 0

var playerCounter = function() {
  if (game.result() == 'Player') {
    playerCount ++
  }
  console.log(playerCount)
  return playerCount
}

var computerCounter = function() {
  if (game.result() == 'Computer') {
    computerCount ++
  }
  console.log(computerCount)
  return computerCount
}



$("button").click(function(){

  game.playersChoice = $(this).html();
  game.computerDecision();
  $("#computer-choice").text(game.computersChoice);
  $("#winner").text("The winner is.....");
  $("#game-result").text(game.result());
  $("#playerCounter").text(playerCounter());
  $("#computerCounter").text(computerCounter());

});
