describe('GameStateFactory', function(){
  beforeEach(module('regexpert'));

  var gameState;

  beforeEach(inject(function(GameStateFactory){
    gameState = new GameStateFactory({level: 1, score: 0, checkpoint: 1, checkpointScore: 0});
  }));

  it('contains current level number',function(){
    expect(gameState.level).toEqual(1);
  });

  it('contains current score',function(){
    expect(gameState.score).toEqual(0);

  });

  it('contains last checkpoint',function(){
    expect(gameState.checkpoint).toEqual(1);

  });

  it('contains score at last checkpoint',function(){
    expect(gameState.checkpointScore).toEqual(0);
  });

  describe('#updateScore', function(){
    it('adds to current score',function(){
      gameState.updateScore(10);
      gameState.updateScore(5);
      expect(gameState.score).toEqual(15);
    });
  });

  describe('#setLevel', function(){
    it('to desired level',function(){
      gameState.setLevel(10);
      expect(gameState.level).toEqual(10);
    });
  });



});
