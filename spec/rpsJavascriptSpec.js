describe('RockPaperScissors', function () {

  var game

  beforeEach(function(){
    game = new RockPaperScissors();
  });


  it('should only accept valid inputs', function() {
    expect(function() { game.choose('banana') }).toThrow(new Error('Not a valid choice.'))
  });

  it('should accept a valid choice of rock/paper/scissors', function(){
    expect(game.choose('rock')).toEqual('rock');

  })

  it('should generate a computer choice of paper',function(){
    
    spyOn(game,'computer_choice').and.returnValue('paper');
    exepct(game.computer_choice()).toEqual('paper');

  })








});
