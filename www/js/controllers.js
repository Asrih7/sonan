angular.module('starter.controllers', ['ionic', 'ngCordova', 'ngCordova.plugins'])
.config(function($ionicConfigProvider) 
{
  // Remove back button text completely
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
})
.controller('AppCtrl', function($ionicPlatform,$scope, $ionicModal, $timeout,$state) {
$ionicPlatform.onHardwareBackButton(function() {
 
});
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };


$scope.share = function(){
  $state.go('app.share');
};
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('browseCtrl', function($scope, $state) {

  $scope.showColps = function() {
  $scope.open=false;


if($scope.open==0){
    $scope.open=true;

}


  }

})





.controller('sonanMansiaCtrl', function($scope, $state) {



 var slideIndex = 1;
showDivs(slideIndex);



$scope.plusDivs = function(n) {
  showDivs(slideIndex += n);
    }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlidesSonan");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

})

.controller('SearchCtrl', function($scope, $state) {

 var slideIndex = 1;
showDivs(slideIndex);


$scope.plusDivs = function(n) {
  showDivs(slideIndex += n);
    }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

})

.controller('PlaylistCtrl', function($scope, $stateParams, $state,$cordovaLocalNotification,$ionicPlatform) {


  $ionicPlatform.ready(function () {
          if (ionic.Platform.isWebView()) {
          }
})
$scope.scheduleInstantNotification = function () {
      $cordovaLocalNotification.schedule({
      id: 1,
      text: 'Instant Notification',
      title: 'Instant'
    }).then(function () {
      alert("Instant Notification set");
    });
  };
$scope.sona1 = function() {
      $state.go('app.sona1');
    }
    $scope.sona2 = function() {
      $state.go('app.sona2');
    }
    $scope.sona3 = function() {
      $state.go('app.sona3');
    }
     $scope.sona4 = function() {
      $state.go('app.sona4');
    }
 $scope.sona5 = function() {
      $state.go('app.sona5');
    }
     $scope.sona6 = function() {
      $state.go('app.sona6');
    }
 $scope.sona7 = function() {
      $state.go('app.sona7');
    }
 $scope.sona8 = function() {
      $state.go('app.sona8');
    }
 $scope.sona9 = function() {
      $state.go('app.sona9');
    }
 $scope.sona10 = function() {
      $state.go('app.sona10');
    }
 $scope.sona11 = function() {
      $state.go('app.sona11');
    }
 $scope.sona12 = function() {
      $state.go('app.sona12');
    }
 $scope.sona13 = function() {
      $state.go('app.sona13');
    }
 $scope.sona14 = function() {
      $state.go('app.sona14');
    }
 $scope.sona15 = function() {
      $state.go('app.sona15');
    }
 $scope.sona16 = function() {
      $state.go('app.sona16');
    }
 $scope.sona17 = function() {
      $state.go('app.sona17');
    }
 $scope.sona18 = function() {
      $state.go('app.sona18');
    }
 $scope.sona19 = function() {
      $state.go('app.sona19');
    }
 $scope.sona20 = function() {
      $state.go('app.sona20');
    }
 $scope.sona21 = function() {
      $state.go('app.sona21');
    }
 $scope.sona22 = function() {
      $state.go('app.sona22');
    }
 $scope.sona23 = function() {
      $state.go('app.sona23');
    }
 $scope.sona24= function() {
      $state.go('app.sona24');
    }
 $scope.sona25= function() {
      $state.go('app.sona25');
    }
 $scope.sona26= function() {
      $state.go('app.sona26');
    }
 $scope.sona27= function() {
      $state.go('app.sona27');
    }
 $scope.sona28= function() {
      $state.go('app.sona28');
    }
 $scope.sona29= function() {
      $state.go('app.sona29');
    }
 $scope.sona30= function() {
      $state.go('app.sona30');
    }
 $scope.sona31 = function() {
      $state.go('app.sona31');
    }
 $scope.sona32 = function() {
      $state.go('app.sona32');
    }
 $scope.sona33= function() {
      $state.go('app.sona33');
    }
 $scope.sona34= function() {
      $state.go('app.sona34');
    }
 $scope.sona35= function() {
      $state.go('app.sona35');
    }
 $scope.sona36= function() {
      $state.go('app.sona36');
    }
 $scope.sona37= function() {
      $state.go('app.sona37');
    }
 $scope.sona38= function() {
      $state.go('app.sona38');
    }
 $scope.sona39 = function() {
      $state.go('app.sona39');
    }
 $scope.sona40= function() {
      $state.go('app.sona40');
    }
 $scope.sona41= function() {
      $state.go('app.sona41');
    }
 $scope.sona42= function() {
      $state.go('app.sona42');
    }
 $scope.sona43= function() {
      $state.go('app.sona43');
    }
 $scope.sona44= function() {
      $state.go('app.sona44');
    }
 $scope.sona45= function() {
      $state.go('app.sona45');
    }
 $scope.sona46= function() {
      $state.go('app.sona46');
    }
 $scope.sona47= function() {
      $state.go('app.sona47');
    }
 $scope.sona48 = function() {
      $state.go('app.sona48');
    }
 $scope.sona49 = function() {
      $state.go('app.sona49');
    }
 $scope.sona50 = function() {
      $state.go('app.sona50');
    }
 $scope.sona51 = function() {
      $state.go('app.sona51');
    }
 $scope.sona52 = function() {
      $state.go('app.sona52');
    }
 $scope.sona53 = function() {
      $state.go('app.sona53');
    }
 $scope.sona54 = function() {
      $state.go('app.sona54');
    }
 $scope.sona55= function() {
      $state.go('app.sona55');
    }
 $scope.sona56 = function() {
      $state.go('app.sona56');
    }
 $scope.sona57 = function() {
      $state.go('app.sona57');
    }
 $scope.sona58 = function() {
      $state.go('app.sona58');
    }
 $scope.sona59 = function() {
      $state.go('app.sona59');
    }
 $scope.sona60 = function() {
      $state.go('app.sona60');
    }
 $scope.sona61 = function() {
      $state.go('app.sona61');
    }
 $scope.sona62 = function() {
      $state.go('app.sona62');
    }
 $scope.sona63 = function() {
      $state.go('app.sona63');
    }
 $scope.sona64 = function() {
      $state.go('app.sona64');
    }
 $scope.sona65 = function() {
      $state.go('app.sona65');
    }
 $scope.sona66 = function() {
      $state.go('app.sona66');
    }
 $scope.sona67 = function() {
      $state.go('app.sona67');
    }
 $scope.sona68 = function() {
      $state.go('app.sona68');
    }
 $scope.sona69= function() {
      $state.go('app.sona69');
    }
 $scope.sona70 = function() {
      $state.go('app.sona70');
    }
 $scope.sona71 = function() {
      $state.go('app.sona71');
    }
 $scope.sona72 = function() {
      $state.go('app.sona72');
    }
 $scope.sona73 = function() {
      $state.go('app.sona73');
    }
 $scope.sona74 = function() {
      $state.go('app.sona74');
    }
 $scope.sona75 = function() {
      $state.go('app.sona75');
    }
 $scope.sona76 = function() {
      $state.go('app.sona76');
    }
 $scope.sona77 = function() {
      $state.go('app.sona77');
    }
 $scope.sona78 = function() {
      $state.go('app.sona78');
    }
 $scope.sona79 = function() {
      $state.go('app.sona79');
    }
 $scope.sona80 = function() {
      $state.go('app.sona80');
    }
 $scope.sona81 = function() {
      $state.go('app.sona81');
    }
 $scope.sona82 = function() {
      $state.go('app.sona82');
    }
 $scope.sona83 = function() {
      $state.go('app.sona83');
    }
 $scope.sona84 = function() {
      $state.go('app.sona84');
    }
 $scope.sona85 = function() {
      $state.go('app.sona85');
    }
 $scope.sona86 = function() {
      $state.go('app.sona86');
    }
 $scope.sona87 = function() {
      $state.go('app.sona87');
    }
 $scope.sona88 = function() {
      $state.go('app.sona88');
    }
 $scope.sona89 = function() {
      $state.go('app.sona89');
    }
 $scope.sona90 = function() {
      $state.go('app.sona90');
    }
 $scope.sona91 = function() {
      $state.go('app.sona91');
    }
 $scope.sona92 = function() {
      $state.go('app.sona92');
    }
 $scope.sona93= function() {
      $state.go('app.sona93');
    }
 $scope.sona94 = function() {
      $state.go('app.sona94');
    }
 $scope.sona95 = function() {
      $state.go('app.sona95');
    }
 $scope.sona96= function() {
      $state.go('app.sona96');
    }
 $scope.sona97 = function() {
      $state.go('app.sona97');
    }
 $scope.sona98 = function() {
      $state.go('app.sona98');
    }
 $scope.sona99 = function() {
      $state.go('app.sona99');
    }
 $scope.sona100 = function() {
      $state.go('app.sona100');
    }
})


  .controller('ModelCtrl', function($scope, $stateParams, $state) {

  })
  .controller('adkar1Ctrl', function($scope, $stateParams, $state) {

  })
   .controller('adkarCtrl', function($scope, $stateParams, $state) {

 $scope.adkar1 = function() {
      $state.go('app.adkar1');
    }
     $scope.adkar2 = function() {
      $state.go('app.adkar2');
    }
     $scope.adkar3 = function() {
      $state.go('app.adkar3');
    }
     $scope.adkar4 = function() {
      $state.go('app.adkar4');
    }
     $scope.adkar5 = function() {
      $state.go('app.adkar5');
    }
     $scope.adkar6 = function() {
      $state.go('app.adkar6');
    }
     $scope.adkar7 = function() {
      $state.go('app.adkar7');
    }
     $scope.adkar8 = function() {
      $state.go('app.adkar8');
    }
     $scope.adkar9 = function() {
      $state.go('app.adkar9');
    }
     $scope.adkar10 = function() {
      $state.go('app.adkar10');
    }
     $scope.adkar11= function() {
      $state.go('app.adkar11');
    }
     $scope.adkar12= function() {
      $state.go('app.adkar12');
    }
     $scope.adkar13= function() {
      $state.go('app.adkar13');
    }
     $scope.adkar14 = function() {
      $state.go('app.adkar14');
    }
     $scope.adka15 = function() {
      $state.go('app.adka15');
    }
     $scope.adkar16 = function() {
      $state.go('app.adkar16');
    }
     $scope.adkar17 = function() {
      $state.go('app.adkar17');
    }
     $scope.adkar18= function() {
      $state.go('app.adkar18');
    }
     $scope.adkar19= function() {
      $state.go('app.adkar19');
    }
     $scope.adkar20= function() {
      $state.go('app.adkar20');
    }
    $scope.adkar21 = function() {
      $state.go('app.adkar21');
    }
     $scope.adkar22 = function() {
      $state.go('app.adkar22');
    }
     $scope.adkar23 = function() {
      $state.go('app.adkar23');
    }
     $scope.adkar24 = function() {
      $state.go('app.adkar24');
    }
     $scope.adkar25 = function() {
      $state.go('app.adkar25');
    }
     $scope.adkar26 = function() {
      $state.go('app.adkar26');
    }
     $scope.adkar27 = function() {
      $state.go('app.adkar27');
    }
     $scope.adkar28 = function() {
      $state.go('app.adkar28');
    }
     $scope.adkar29 = function() {
      $state.go('app.adkar29');
    }
     $scope.adkar30= function() {
      $state.go('app.adkar30');
    }
     $scope.adkar31= function() {
      $state.go('app.adkar31');
    }
     $scope.adkar32= function() {
      $state.go('app.adkar32');
    }
     $scope.adkar33 = function() {
      $state.go('app.adkar33');
    }
     $scope.adka34 = function() {
      $state.go('app.adka34');
    }
     $scope.adkar35 = function() {
      $state.go('app.adkar35');
    }
     $scope.adkar36 = function() {
      $state.go('app.adkar36');
    }
     $scope.adkar37= function() {
      $state.go('app.adkar37');
    }
     $scope.adkar38= function() {
      $state.go('app.adkar38');
    }
     $scope.adkar39= function() {
      $state.go('app.adkar39');
    }
    $scope.adkar40 = function() {
      $state.go('app.adkar40');
    }
     $scope.adkar41 = function() {
      $state.go('app.adkar41');
    }
     $scope.adkar42 = function() {
      $state.go('app.adkar42');
    }
     $scope.adkar43 = function() {
      $state.go('app.adkar43');
    }
      $scope.adkar44 = function() {
      $state.go('app.adkar44');
    }
     $scope.adkar45 = function() {
      $state.go('app.adkar45');
    }
     $scope.adkar46 = function() {
      $state.go('app.adkar46');
    }
     $scope.adkar47 = function() {
      $state.go('app.adkar47');
    }
     $scope.adkar48 = function() {
      $state.go('app.adkar48');
    }
     $scope.adkar49 = function() {
      $state.go('app.adkar49');
    }
     $scope.adkar50 = function() {
      $state.go('app.adkar50');
    }
     $scope.adkar51= function() {
      $state.go('app.adkar51');
    }
     $scope.adkar52= function() {
      $state.go('app.adkar52');
    }
     $scope.adkar53= function() {
      $state.go('app.adkar53');
    }
     $scope.adkar54 = function() {
      $state.go('app.adkar54');
    }
     $scope.adka55 = function() {
      $state.go('app.adka55');
    }
     $scope.adkar56 = function() {
      $state.go('app.adkar56');
    }
     $scope.adkar57 = function() {
      $state.go('app.adkar57');
    }
     $scope.adkar58= function() {
      $state.go('app.adkar58');
    }
     $scope.adkar59= function() {
      $state.go('app.adkar59');
    }
     $scope.adkar60= function() {
      $state.go('app.adkar60');
    }
    $scope.adkar61= function() {
      $state.go('app.adkar61');
    }
    $scope.adkar62= function() {
      $state.go('app.adkar62');
    }
    $scope.adkar63= function() {
      $state.go('app.adkar63');
    }
    $scope.adkar64= function() {
      $state.go('app.adkar64');
    }
    $scope.adkar65= function() {
      $state.go('app.adkar65');
    }
    $scope.adkar66= function() {
      $state.go('app.adkar66');
    }
    $scope.adkar67= function() {
      $state.go('app.adkar67');
    }
    $scope.adkar68= function() {
      $state.go('app.adkar68');
    }
    $scope.adkar69= function() {
      $state.go('app.adkar69');
    }
   
  });
