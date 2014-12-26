'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:appDropdownController
 * @description
 * # AboutCtrl
 * Controller of the mobile-angular
 */
angular.module('mobile-angular')
  .controller('appDropdownController', function($scope, $timeout, $rootScope){
      
    $scope.lorem = $rootScope.lorem;
    init();
    function init(){
          
    };
  });
