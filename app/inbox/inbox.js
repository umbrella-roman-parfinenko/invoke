'use strict';

angular.module('modInbox', [])

    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
          .state("inbox", {
            url: "/inbox",
            abstract: true,
            template: "<ui-view/>",
            templateUrl: 'inbox/inbox.html',
            controller: 'modInbox.InboxCtrl'
          })
          .state("inbox.list", {
            url: "/list",
            templateUrl: 'inbox/inbox.html',
            controller: 'modInbox.InboxCtrl',
            controllerAs: 'listCtrl'
          })
    }])

.controller('modInbox.InboxCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
  var self = this;

  self.aLetters = [];
  self.aWeekLetters = [];
  self.aThreads = [];
  self.aItemsThread = [];
  var oLetter1 = {
    'id': 1,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "[Free ebook] 7 ways you can reduce spam complaints",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master. "
  };
  var oLetter2 = {
    'id': 2,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "What inspires your email design? [Free download]",
    'thread': 1
     };

  var oLetter3 = {
    'id': 3,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Share Password Management Evaluation Guide with Your Colleagues",
    'thread': 3
  };
  var oLetter4 = {
    'id': 4,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "10 remote work myths you should ignore.",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
    +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };

  var oLetter5 = {
    'id': 5,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "[Envato Forums] Summary",
    'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
    +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
  };
  var oLetter6 = {
    'id': 6,
    'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
    'subject': "Dell/'s Life After Wall Street - NYTimes.com",
    'thread': 1
  };

  var oThread1 = {
    'id': 1,
    'messages': [
      {
        'id': 7,
        'sender': 'Jhon Smith',
      'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
      'text': "Hi, Thank you for your continued support of Keeper. Just as we protect your personal information, Keeper also protects thousands of businesses. We recently created an evaluation guide to assist businesses in selecting a password management solution."
      },
      {
        'id': 8,
        'sender': 'Jhon Kennedy',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      },
      {
        'id': 9,
        'sender': 'Jhon Smith',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      }
    ]
     };

  var oThread2 = {
    'id': 2,
    'messages': [
      {
        'id': 10,
        'sender': 'Jhon Kennedy',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      },
      {
        'id': 11,
        'sender': 'Jhon Smith',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      },
      {
        'id':12,
        'sender': 'Jhon Kennedy',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      },
      {
        'id':13,
        'sender': 'Jhon Smith',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      }
    ]
  };

  var oThread3 = {
    'id': 3,
    'messages': [
      {
        'id': 14,
        'sender': 'Jhon Smith',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      },
      {
        'id': 15,
        'sender': 'Jhon Poul',
        'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
        'text': "Design gives structure, weight, and feeling to our messaging. As its own discipline, email design has unique limitations and considerations that marketers must master."
        +"In the inaugural State of Email Design report, we asked 900 marketers to share their thoughts on email design, including how they."
      }
    ]
  };

  self.aLetters.push(oLetter3);
  self.aLetters.push(oLetter1);
  self.aLetters.push(oLetter2);

  self.aWeekLetters.push(oLetter3);
  self.aWeekLetters.push(oLetter1);
  self.aWeekLetters.push(oLetter2);
  self.aWeekLetters.push(oLetter4);
  self.aWeekLetters.push(oLetter5);
  self.aWeekLetters.push(oLetter6);

  self.aThreads.push(oThread1);
  self.aThreads.push(oThread2);
  self.aThreads.push(oThread3);

  self.fnMoreItems = function () {
    oLetter6 = {
      'id': oLetter6.id++,
      'img': "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRCqkkVeGUY01YHRXUnc5NYw48FN0NNPoSp0yb_OZSKZTB-6lcZKkJEr0Y",
      'subject': "And event another Somthing",
      'text': "Consumer attitudes toward spam continue to shift dramatically, demanding an equal shift in email marketing strategies. In this ebook, we detail consumers’ spam folder behavior and share a 7-point plan for how marketers can avoid spam complaints and extend subscriber relationships."
    };
    if(_.findIndex(self.aWeekLetters, oLetter6) == -1){
      self.aWeekLetters.push(oLetter6);
    }
  };

  self.fnGetThread = function (id) {
    if(id){
      self.aItemsThread[id] = _.find(self.aThreads, ['id', id]).messages;
    }
  };

}]);