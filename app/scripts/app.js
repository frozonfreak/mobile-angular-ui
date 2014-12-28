var angularmobile = angular.module('mobile-angular',['ui.bootstrap','ui.router','mobile-angular-ui','mobile-angular-ui.gestures','mobile-angular-ui.migrate','ngAnimate', 'ngCookies', 'ngResource','ngSanitize','ngTouch']).run(function($rootScope){
      $rootScope.userAgent = navigator.userAgent;
      
      // Needed for the loading screen
      $rootScope.$on('$locationChangeStart', function(){
        $rootScope.loading = true;
      });

      $rootScope.$on('$locationChangeSuccess', function(){
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
      templateUrl: "views/home.html",
      controller: 'appController',
    })
    .state('scroll', {
      url: "/scroll",
      templateUrl: "views/scroll.html",
      controller: 'appScrollController',
    })
    .state('tabs', {
      url: "/tabs",
      templateUrl: "views/tabs.html",
      controller: 'appTabsController',
    })
    .state('accordion', {
      url: "/accordion",
      templateUrl: "views/accordion.html",
      controller: 'appAccordianController',
    })
    .state('overlay', {
      url: "/overlay",
      templateUrl: "views/overlay.html",
      controller: 'appOverlayController',
    })
    .state('forms', {
      url: "/forms",
      templateUrl: "views/forms.html",
      controller: 'appFormsController',
    })
    .state('dropdown', {
      url: "/dropdown",
      templateUrl: "views/dropdown.html",
      controller: 'appDropdownController',
    })
    .state('toggle', {
      url: "/toggle",
      templateUrl: "views/toggle.html",
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


//Main Controller for body, handles loading and unloading along with preloader gif
angularmobile.controller('MainController', function($rootScope, $scope){

  // User agent displayed in home page
  $scope.userAgent = navigator.userAgent;
  
  // Needed for the loading screen
  $rootScope.$on('$locationChangeStart', function(){
    $rootScope.loading = true;
  });

  $rootScope.$on('$locationChangeSuccess', function(){
    $rootScope.loading = false;
  });

  // Fake text i used here and there.
  $rootScope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo, aliquid eaque soluta nihil eligendi adipisci error, illum corrupti nam fuga omnis quod quaerat mollitia expedita impedit dolores ipsam. Obcaecati.';

});

