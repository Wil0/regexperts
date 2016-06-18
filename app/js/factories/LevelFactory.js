angular.module('regexpert')
       .factory('LevelFactory', LevelFactory);

function LevelFactory() {

  var Level = function(levelProperties) {
    this.number = levelProperties.number;
    this.text = levelProperties.text;
    this.target = levelProperties.target;
    this.mission = levelProperties.mission;
    this.keyStrokeLimit = levelProperties.keyStrokeLimit;
  };

  Level.prototype.isComplete = function (search) {
    return findOutput(this.text, this.target) === findOutput(this.text, search);
  };

  Level.prototype.reduceKeyLimit = function (input) {
    if(input !== 'Enter'){this.keyStrokeLimit --;}
  };

  return Level;

  function makeRegexp(input) {
    return new RegExp(input, 'g');
  }

  function findOutput(text, input){
    var output = text.match(makeRegexp(input)) || [];
    return output.join('');
  }
}
