// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller:'SearchCtrl'
      }
    }
  })


   .state('app.sonanMansia', {
    url: '/sonanMansia',
    views: {
      'menuContent': {
        templateUrl: 'templates/sonanMansia.html',
        controller:'sonanMansiaCtrl'
      }
    }
  })
  .state('app.adkar', {
    url: '/adkar',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar.html',
        controller:'adkarCtrl'
      }
    }
  })
  .state('app.adkar1', {
    url: '/adkar1',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar1.html',
        controller:'adkar1Ctrl'
      }
    }
  })
  .state('app.adkar2', {
    url: '/adkar2',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar2.html'
      }
    }
  })
  .state('app.adkar3', {
    url: '/adkar3',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar3.html'
      }
    }
  })
  .state('app.adkar4', {
    url: '/adkar4',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar4.html'
      }
    }
  })
  .state('app.adkar5', {
    url: '/adkar5',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar5.html'
      }
    }
  })
  .state('app.adkar6', {
    url: '/adkar6',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar6.html'
      }
    }
  })
  .state('app.adkar7', {
    url: '/adkar7',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar7.html'
      }
    }
  })
  .state('app.adkar8', {
    url: '/adkar8',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar8.html'
      }
    }
  })
  .state('app.adkar9', {
    url: '/adkar9',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar9.html'
      }
    }
  })
  .state('app.adkar10', {
    url: '/adkar10',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar10.html'
      }
    }
  })
  .state('app.adkar69', {
    url: '/adkar69',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar69.html'
      }
    }
  })
.state('app.adkar11', {
    url: '/adkar11',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar11.html'
      }
    }
  })


.state('app.adkar12', {
    url: '/adkar12',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar12.html'
      }
    }
  })
  .state('app.adkar13', {
    url: '/adkar13',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar13.html'
      }
    }
  })
 .state('app.adkar14', {
    url: '/adkar14',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar14.html'
      }
    }
  })
  .state('app.adkar15', {
    url: '/adkar15',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar15.html'
      }
    }
  })
  .state('app.adkar16', {
    url: '/adkar16',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar16.html'
      }
    }
  })
  .state('app.adkar17', {
    url: '/adkar17',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar17.html'
      }
    }
  })
   .state('app.adkar18', {
    url: '/adkar18',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar18.html'
      }
    }
  })
  .state('app.adkar19', {
    url: '/adkar19',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar19.html'
      }
    }
  })
  .state('app.adkar20', {
    url: '/adkar20',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar20.html'
      }
    }
  })
   .state('app.adkar21', {
    url: '/adkar21',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar21.html'
      }
    }
  })
  .state('app.adkar22', {
    url: '/adkar22',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar22.html'
      }
    }
  })
   .state('app.adkar23', {
    url: '/adkar23',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar23.html'
      }
    }
  })
  .state('app.adkar24', {
    url: '/adkar24',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar24.html'
      }
    }
  })
   .state('app.adkar25', {
    url: '/adkar25',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar25.html'
      }
    }
  })
  .state('app.adkar26', {
    url: '/adkar26',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar26.html'
      }
    }
  })
   .state('app.adkar27', {
    url: '/adkar27',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar27.html'
      }
    }
  })
  .state('app.adkar28', {
    url: '/adkar28',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar28.html'
      }
    }
  })
  .state('app.adkar29', {
    url: '/adkar29',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar29.html'
      }
    }
  })
  .state('app.adkar30', {
    url: '/adkar30',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar30.html'
      }
    }
  })
  .state('app.adkar31', {
    url: '/adkar31',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar31.html'
      }
    }
  })
  .state('app.adkar32', {
    url: '/adkar32',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar32.html'
      }
    }
  })
  .state('app.adkar33', {
    url: '/adkar33',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar33.html'
      }
    }
  })
   .state('app.adkar34', {
    url: '/adkar34',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar34.html'
      }
    }
  })
     .state('app.adkar35', {
    url: '/adkar35',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar35.html'
      }
    }
  })
   .state('app.adkar36', {
    url: '/adkar36',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar36.html'
      }
    }
  })
  .state('app.adkar37', {
    url: '/adkar37',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar37.html'
      }
    }
  })
  .state('app.adkar38', {
    url: '/adkar38',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar38.html'
      }
    }
  })
  .state('app.adkar39', {
    url: '/adkar39',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar39.html'
      }
    }
  })
  .state('app.adkar40', {
    url: '/adkar40',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar40.html'
      }
    }
  })
  .state('app.adkar41', {
    url: '/adkar41',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar41.html'
      }
    }
  })
  .state('app.adkar42', {
    url: '/adkar42',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar42.html'
      }
    }
  })
  .state('app.adkar43', {
    url: '/adkar43',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar43.html'
      }
    }
  })
  .state('app.adkar44', {
    url: '/adkar44',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar44.html'
      }
    }
  })
  .state('app.adkar45', {
    url: '/adkar45',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar45.html'
      }
    }
  })
  .state('app.adkar46', {
    url: '/adkar46',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar46.html'
      }
    }
  })
   .state('app.adkar47', {
    url: '/adkar47',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar47.html'
      }
    }
  })
   .state('app.adkar48', {
    url: '/adkar48',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar48.html'
      }
    }
  })
  .state('app.adkar49', {
    url: '/adkar49',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar49.html'
      }
    }
  })
  .state('app.adkar50', {
    url: '/adkar50',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar50.html'
      }
    }
  })
  .state('app.adkar51', {
    url: '/adkar51',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar51.html'
      }
    }
  })
  .state('app.adkar52', {
    url: '/adkar52',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar52.html'
      }
    }
  })
   .state('app.adkar53', {
    url: '/adkar53',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar53.html'
      }
    }
  })
   .state('app.adkar54', {
    url: '/adkar54',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar54.html'
      }
    }
  })
   .state('app.adkar55', {
    url: '/adkar55',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar55.html'
      }
    }
  })
   .state('app.adkar56', {
    url: '/adkar56',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar56.html'
      }
    }
  })
   .state('app.adkar57', {
    url: '/adkar57',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar57.html'
      }
    }
  })
  .state('app.adkar58', {
    url: '/adkar58',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar58.html'
      }
    }
  })
  .state('app.adkar59', {
    url: '/adkar59',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar59.html'
      }
    }
  })
  .state('app.adkar60', {
    url: '/adkar60',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar60.html'
      }
    }
  })
  .state('app.adkar61', {
    url: '/adkar61',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar61.html'
      }
    }
  })
  .state('app.adkar62', {
    url: '/adkar62',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar62.html'
      }
    }
  })
   .state('app.adkar63', {
    url: '/adkar63',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar63.html'
      }
    }
  })
   .state('app.adkar64', {
    url: '/adkar64',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar64.html'
      }
    }
  })
  .state('app.adkar65', {
    url: '/adkar65',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar65.html'
      }
    }
  })
   .state('app.adkar66', {
    url: '/adkar66',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar66.html'
      }
    }
  })
   .state('app.adkar67', {
    url: '/adkar67',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar67.html'
      }
    }
  })
  .state('app.adkar68', {
    url: '/adkar68',
    views: {
      'menuContent': {
        templateUrl: 'templates/adkar68.html'
      }
    }
  })
   .state('app.sona1', {
    url: '/sona1',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona1.html'
      }
    }
  })
   .state('app.sona2', {
    url: '/sona2',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona2.html'
      }
    }
  }) .state('app.sona3', {
    url: '/sona3',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona3.html'
      }
    }
  }) .state('app.sona4', {
    url: '/sona4',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona4.html'
      }
    }
  }) .state('app.sona5', {
    url: '/sona5',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona5.html'
      }
    }
  }) .state('app.sona6', {
    url: '/sona6',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona6.html'
      }
    }
  }) .state('app.sona7', {
    url: '/sona7',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona7.html'
      }
    }
  }) .state('app.sona8', {
    url: '/sona8',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona8.html'
      }
    }
  }) .state('app.sona9', {
    url: '/sona9',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona9.html'
      }
    }
  }) .state('app.sona10', {
    url: '/sona10',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona10.html'
      }
    }
  }) .state('app.sona11', {
    url: '/sona11',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona11.html'
      }
    }
  }) .state('app.sona12', {
    url: '/sona12',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona12.html'
      }
    }
  }) .state('app.sona13', {
    url: '/sona13',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona13.html'
      }
    }
  }) .state('app.sona14', {
    url: '/sona14',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona14.html'
      }
    }
  }) .state('app.sona15', {
    url: '/sona15',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona15.html'
      }
    }
  }) .state('app.sona16', {
    url: '/sona16',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona16.html'
      }
    }
  }) .state('app.sona17', {
    url: '/sona17',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona17.html'
      }
    }
  }) .state('app.sona18', {
    url: '/sona18',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona18.html'
      }
    }
  }) .state('app.sona19', {
    url: '/sona19',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona19.html'
      }
    }
  }) .state('app.sona20', {
    url: '/sona20',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona20.html'
      }
    }
  }) .state('app.sona21', {
    url: '/sona21',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona21.html'
      }
    }
  }) .state('app.sona22', {
    url: '/sona22',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona22.html'
      }
    }
  }) .state('app.sona23', {
    url: '/sona23',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona23.html'
      }
    }
  }) .state('app.sona24', {
    url: '/sona24',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona24.html'
      }
    }
  }) .state('app.sona25', {
    url: '/sona25',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona25.html'
      }
    }
  }) .state('app.sona26', {
    url: '/sona26',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona26.html'
      }
    }
  }) .state('app.sona27', {
    url: '/sona27',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona27.html'
      }
    }
  }) .state('app.sona28', {
    url: '/sona28',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona28.html'
      }
    }
  }) .state('app.sona29', {
    url: '/sona29',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona29.html'
      }
    }
  }) .state('app.sona30', {
    url: '/sona30',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona30.html'
      }
    }
  }) .state('app.sona31', {
    url: '/sona31',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona31.html'
      }
    }
  }) .state('app.sona32', {
    url: '/sona32',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona32.html'
      }
    }
  }) .state('app.sona33', {
    url: '/sona33',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona33.html'
      }
    }
  }) .state('app.sona34', {
    url: '/sona34',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona34.html'
      }
    }
  }) .state('app.sona35', {
    url: '/sona35',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona35.html'
      }
    }
  }) .state('app.sona36', {
    url: '/sona36',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona36.html'
      }
    }
  }) .state('app.sona37', {
    url: '/sona37',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona37.html'
      }
    }
  }) .state('app.sona38', {
    url: '/sona38',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona38.html'
      }
    }
  }) .state('app.sona39', {
    url: '/sona39',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona39.html'
      }
    }
  }) .state('app.sona40', {
    url: '/sona40',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona40.html'
      }
    }
  }) .state('app.sona41', {
    url: '/sona41',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona41.html'
      }
    }
  }) .state('app.sona42', {
    url: '/sona42',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona42.html'
      }
    }
  }) .state('app.sona43', {
    url: '/sona43',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona43.html'
      }
    }
  }) .state('app.sona44', {
    url: '/sona44',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona44.html'
      }
    }
  }) .state('app.sona45', {
    url: '/sona45',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona45.html'
      }
    }
  }) .state('app.sona46', {
    url: '/sona46',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona46.html'
      }
    }
  }) .state('app.sona47', {
    url: '/sona47',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona47.html'
      }
    }
  }) .state('app.sona48', {
    url: '/sona48',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona48.html'
      }
    }
  }) .state('app.sona49', {
    url: '/sona49',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona49.html'
      }
    }
  }) .state('app.sona50', {
    url: '/sona50',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona50.html'
      }
    }
  }) .state('app.sona51', {
    url: '/sona51',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona51.html'
      }
    }
  }) .state('app.sona52', {
    url: '/sona52',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona52.html'
      }
    }
  }) .state('app.sona53', {
    url: '/sona53',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona53.html'
      }
    }
  }) .state('app.sona54', {
    url: '/sona54',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona54.html'
      }
    }
  }) .state('app.sona55', {
    url: '/sona55',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona55.html'
      }
    }
  }) .state('app.sona56', {
    url: '/sona56',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona56.html'
      }
    }
  }) .state('app.sona57', {
    url: '/sona57',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona57.html'
      }
    }
  }) .state('app.sona58', {
    url: '/sona58',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona58.html'
      }
    }
  }) .state('app.sona59', {
    url: '/sona59',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona59.html'
      }
    }
  }) .state('app.sona60', {
    url: '/sona60',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona60.html'
      }
    }
  }) .state('app.sona61', {
    url: '/sona61',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona61.html'
      }
    }
  }) .state('app.son62', {
    url: '/sona62',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona62.html'
      }
    }
  }) .state('app.sona63', {
    url: '/sona63',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona63.html'
      }
    }
  }) .state('app.sona64', {
    url: '/sona64',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona64.html'
      }
    }
  }) .state('app.sona65', {
    url: '/sona65',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona65.html'
      }
    }
  }) .state('app.sona66', {
    url: '/sona66',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona66.html'
      }
    }
  }) .state('app.sona67', {
    url: '/sona67',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona67.html'
      }
    }
  }) .state('app.sona68', {
    url: '/sona68',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona68.html'
      }
    }
  }) .state('app.sona69', {
    url: '/sona69',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona69.html'
      }
    }
  }) .state('app.sona70', {
    url: '/sona70',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona70.html'
      }
    }
  }) .state('app.sona71', {
    url: '/sona71',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona71.html'
      }
    }
  }) .state('app.sona72', {
    url: '/sona72',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona72.html'
      }
    }
  }) .state('app.sona73', {
    url: '/sona73',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona73.html'
      }
    }
  }) .state('app.sona74', {
    url: '/sona74',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona74.html'
      }
    }
  }) .state('app.sona75', {
    url: '/sona75',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona75.html'
      }
    }
  }) .state('app.sona76', {
    url: '/sona76',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona76.html'
      }
    }
  }) .state('app.sona77', {
    url: '/sona77',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona77.html'
      }
    }
  }) .state('app.sona78', {
    url: '/sona78',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona78.html'
      }
    }
  }) .state('app.sona79', {
    url: '/sona79',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona79.html'
      }
    }
  }) .state('app.sona80', {
    url: '/sona80',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona80.html'
      }
    }
  }) .state('app.sona81', {
    url: '/sona81',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona81.html'
      }
    }
  }) .state('app.sona82', {
    url: '/sona82',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona82.html'
      }
    }
  }) .state('app.sona83', {
    url: '/sona83',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona83.html'
      }
    }
  }) .state('app.sona84', {
    url: '/sona84',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona84.html'
      }
    }
  }) .state('app.sona85', {
    url: '/sona85',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona85.html'
      }
    }
  }) .state('app.sona86', {
    url: '/sona86',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona86.html'
      }
    }
  }) .state('app.sona87', {
    url: '/sona87',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona87.html'
      }
    }
  }) .state('app.sona88', {
    url: '/sona88',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona88.html'
      }
    }
  }) .state('app.sona89', {
    url: '/sona89',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona89.html'
      }
    }
  }) .state('app.sona90', {
    url: '/sona90',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona90.html'
      }
    }
  }) .state('app.sona91', {
    url: '/sona91',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona91.html'
      }
    }
  }) .state('app.sona92', {
    url: '/sona92',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona92.html'
      }
    }
  }) .state('app.sona93', {
    url: '/sona93',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona93.html'
      }
    }
  }) .state('app.sona94', {
    url: '/sona94',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona94.html'
      }
    }
  }) .state('app.sona95', {
    url: '/sona95',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona95.html'
      }
    }
  }) .state('app.sona96', {
    url: '/sona96',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona96.html'
      }
    }
  }) .state('app.sona97', {
    url: '/sona97',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona97.html'
      }
    }
  }) .state('app.sona98', {
    url: '/sona98',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona98.html'
      }
    }
  }) .state('app.sona99', {
    url: '/sona99',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona99.html'
      }
    }
  }) .state('app.sona100', {
    url: '/sona100',
    views: {
      'menuContent': {
        templateUrl: 'templates/sona100.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
                   controller: 'browseCtrl'

        }
      }
    })
    
    .state('app.model', {
      url: '/model',
      views: {
        'menuContent': {
          templateUrl: 'templates/model.html',
          controller: 'ModelCtrl'
        }
      }
    })
    .state('app.single', {
      url: '/playlist',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlist');
});
