'use strict';

angular.module('myApp.inbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox', {
    templateUrl: 'inbox/inbox.html',
    controller: 'InboxCtrl'
  });
}])

.controller('InboxCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

  $scope.aLetters = [];
  $scope.aWeekLetters = [];
  var oLetter1 = {
    'id': 1,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Dell/'s Life After Wall Street - NYTimes.com",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
      +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };
  var oLetter2 = {
    'id': 2,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Dell/'s Life After Wall Street - NYTimes.com",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
    +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };

  var oLetter3 = {
    'id': 3,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Dell/'s Life After Wall Street - NYTimes.com",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
    +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };
  var oLetter4 = {
    'id': 4,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Dell/'s Life After Wall Street - NYTimes.com",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
    +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };

  $scope.aLetters.push(oLetter3);
  $scope.aLetters.push(oLetter1);
  $scope.aLetters.push(oLetter2);

  $scope.aWeekLetters.push(oLetter3);
  $scope.aWeekLetters.push(oLetter1);
  $scope.aWeekLetters.push(oLetter2);

  $scope.fnMoreItems = function () {
    var oLetter = $scope.aWeekLetters[$scope.aWeekLetters.length-1];
    oLetter.id = oLetter.id+1;
    $scope.aWeekLetters.push(oLetter4);
    console.log($scope.aWeekLetters);
  };

}]);