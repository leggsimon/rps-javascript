describe('RockPaperScissors', function () {

  var game

  beforeEach(function(){
    game = new RockPaperScissors();
  });


  it('only accepts valid inputs', function() {
    expect(function() { game.choose('banana') }).toThrow(new Error('Not a valid choice.'))
  });

  it('accepts a valid choice of rock/paper/scissors', function(){
    game.choose('rock')
    expect(game.playersChoice).toEqual('rock');
  })

  it('generates a computer choice of paper',function(){
    game.computerDecision();
    expect(game.computersChoice).not.toEqual('');
  })

  it('can work out a winner', function() {
    game.choose('rock')
    game.computersChoice = 'paper'
    expect(game.result()).toEqual('Computer')
  });

  

});
