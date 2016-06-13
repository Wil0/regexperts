angular.module('regexpert')
       .controller('GameController',["$sce", function($sce){

  var vm = this;

  vm.isMatch = isMatch;
  vm.highlight = highlight;
  vm.expectation = "HPF";
  vm.levelText = 'Horse brHeeding is reproduction in horses, and particularly the human-directed process of selective breeding of animals, particularly purebred horses of a given breed. Planned matings can be used to produce specifically desired characteristics in domesticated horses. Furthermore, modern breeding management and technologies can increase the rate of conception, a healthy pregnancy, and successful foaling.';

  function isMatch(input) {
    var matches = vm.levelText.match(_makeRegexp(input));
    if(matches === null){matches = [];}
    return matches.join('') === vm.expectation;
  }

  function highlight(text, regex) {
    if (regex){
      return $sce.trustAsHtml(text.replace(_makeRegexp(regex), function(match){
        return "<span class='highlighted'>" + match + "</span>";
      }));
    }
    return $sce.trustAsHtml(text);
  }

  function _makeRegexp(input) {
    return new RegExp(input, 'g');
  }

}]);
