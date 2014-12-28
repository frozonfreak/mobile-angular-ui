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

  	init();
  	function init(){
          
  	};
  });
