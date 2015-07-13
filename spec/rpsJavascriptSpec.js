describe('RockPaperScissors', function () {

  var game

  beforeEach(function(){
    game = new RockPaperScissors();
  });


  it('should only accept valid inputs', function() {
    expect(function() { game.choose('banana') }).toThrow(new Error('Not a valid choice.'))
  });

  it('should accept a valid choice of rock/paper/scissors', function(){
    game.choose('rock')
    expect(game.choice).toEqual('rock');

  })

  it('should generate a computer choice of paper',function(){

    game.computerDecision();
    expect(game.computersChoice).not.toEqual('');

  })

  // it('should generate a computer choice of paper',function(){
  //
  //   game.computerDecision()
  //   expect(game.computersChoice).toEqual('paper');
  //
  // })








});
