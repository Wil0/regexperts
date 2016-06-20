angular.module('regexpert').service('GameService', GameService);

function GameService(){

  var self = this;

  this.score = 0;
  this.getScore = getScore;
  this.updateScore = updateScore;
  this.setScore = setScore;

  function updateScore(amount) {
    this.score += amount;
    self.setScore(this.score);
  }

  function getScore() {
    return JSON.parse(localStorage.getItem('curentScore'));
  };

  function setScore(score) {
    localStorage.setItem('curentScore', JSON.stringify(score));
  };

}
