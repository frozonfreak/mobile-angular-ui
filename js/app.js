var angularmobile = angular.module('angularmobile',['ui.bootstrap','ui.router','mobile-angular-ui','mobile-angular-ui.gestures','mobile-angular-ui.migrate']).run(function($rootScope){
      $rootScope.userAgent = navigator.userAgent;
      
      // Needed for the loading screen
      $rootScope.$on('$routeChangeStart', function(){
        $rootScope.loading = true;
      });

      $rootScope.$on('$routeChangeSuccess', function(){
        $rootScope.loading = false;
      });

      // Fake text i used here and there.
      $rootScope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

      // 
      // 'Scroll' screen
      // 
      var scrollItems = [];

      for (var i=1; i<=100; i++) {
        scrollItems.push('Item ' + i);
      }

      $rootScope.scrollItems = scrollItems;

      

});

angularmobile.config(function($stateProvider, $urlRouterProvider) {

  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "partials/home.html",
      controller: 'appController',
    })
    .state('scroll', {
      url: "/scroll",
      templateUrl: "partials/scroll.html",
      controller: 'appScrollController',
    })
    .state('tabs', {
      url: "/tabs",
      templateUrl: "partials/tabs.html",
      controller: 'appTabsController',
    })
    .state('accordion', {
      url: "/accordion",
      templateUrl: "partials/accordian.html",
      controller: 'appAccordianController',
    })
    .state('overlay', {
      url: "/overlay",
      templateUrl: "partials/overlay.html",
      controller: 'appOverlayController',
    })
    .state('forms', {
      url: "/forms",
      templateUrl: "partials/forms.html",
      controller: 'appFormsController',
    })
    .state('dropdown', {
      url: "/dropdown",
      templateUrl: "partials/dropdown.html",
      controller: 'appDropdownController',
    })
    .state('toggle', {
      url: "/toggle",
      templateUrl: "partials/toggle.html",
      controller: 'appToggleController',
    })
    .state('404', {
      url: "/404",
      templateUrl: "404.html",
      controller: 'app404Controller',
    })
    // For any unmatched url, redirect to /state1
     $urlRouterProvider.otherwise("/404");

});
//controller
angularmobile.controller('appController', function($scope, $timeout, $rootScope){
    
  $scope.userAgent = $rootScope.userAgent;

  $rootScope.$on('$routeChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(){
    $rootScope.loading = false;
  });

	init();
	function init(){
        
	};

});
angularmobile.controller('appScrollController', function($scope, $timeout, $rootScope){
    
  
  $scope.bottomReached = function() {
      alert('Congrats you scrolled to the end of the list!');
  }
  init();
  function init(){
        
  };

});

angularmobile.controller('appToggleController', function($scope, $timeout, $rootScope){
    
  
  $scope.bottomReached = function() {
      alert('Congrats you scrolled to the end of the list!');
  }

  init();
  function init(){
        
  };

});

angularmobile.controller('appAccordianController', function($scope, $timeout, $rootScope){
    
  
  $scope.bottomReached = function() {
      alert('Congrats you scrolled to the end of the list!');
  }

  init();
  function init(){
        
  };

});

angularmobile.controller('appTabsController', function($scope, $timeout, $rootScope){
    
  $scope.lorem = $rootScope.lorem;
  $scope.bottomReached = function() {
      alert('Congrats you scrolled to the end of the list!');
  }
  init();
  function init(){
        
  };

});

angularmobile.controller('appOverlayController', function($scope, $timeout, $rootScope){
    

  init();
  function init(){
        
  };

});

angularmobile.controller('appFormsController', function($scope, $timeout, $rootScope){
    
  $scope.login = function() {
    alert('You submitted the login form');
  };

  init();
  function init(){
        
  };

});

angularmobile.controller('appDropdownController', function($scope, $timeout, $rootScope){
    
  $scope.lorem = $rootScope.lorem;
  init();
  function init(){
        
  };

});

angularmobile.controller('app404Controller', function($scope){

});

//Main Controller for body, handles loading and unloading along with preloader gif
angularmobile.controller('MainController', function($rootScope, $scope){

  // User agent displayed in home page
  $scope.userAgent = navigator.userAgent;
  
  // Needed for the loading screen
  $rootScope.$on('$routeChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(){
    $rootScope.loading = false;
  });

  // Fake text i used here and there.
  $rootScope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

  // 
  // 'Scroll' screen
  // 
  var scrollItems = [];

  for (var i=1; i<=100; i++) {
    scrollItems.push('Item ' + i);
  }

  $scope.scrollItems = scrollItems;

  $scope.bottomReached = function() {
    alert('Congrats you scrolled to the end of the list!');
  }
  
  // 'Forms' screen
  //  
  $scope.rememberMe = true;
  $scope.email = 'me@example.com';
  
  $scope.login = function() {
    alert('You submitted the login form');
  };

  // 
  // 'Drag' screen
  // 
  $scope.notices = [];
  

  $scope.deleteNotice = function(notice) {
    var index = $scope.notices.indexOf(notice);
    if (index > -1) {
      $scope.notices.splice(index, 1);
    }
  };
});
