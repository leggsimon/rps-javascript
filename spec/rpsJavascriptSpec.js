describe('RockPaperScissors', function () {

  var game

  beforeEach(function(){
    game = new RockPaperScissors();
  });


  it('should only accept valid inputs', function() {
    expect(function() { game.choose('banana') }).toThrow(new Error('Not a valid choice.'))
  });






});
