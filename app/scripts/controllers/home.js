'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:appController
 * @description
 * # MainCtrl
 * Controller of the mobile-angular
 */
angular.module('mobile-angular')
  .controller('appController', function($scope, $timeout, $rootScope){
      
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
