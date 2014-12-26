'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:appTabsController
 * @description
 * # AboutCtrl
 * Controller of the mobile-angular
 */
angular.module('mobile-angular')
  .controller('appTabsController', function($scope, $timeout, $rootScope){
      
    $scope.lorem = $rootScope.lorem;
 
    init();
    function init(){
          
    };
  });
