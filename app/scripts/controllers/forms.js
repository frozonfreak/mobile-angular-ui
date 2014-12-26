'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:appFormsController
 * @description
 * # AboutCtrl
 * Controller of the mobile-angular
 */
angular.module('mobile-angular')
  .controller('appFormsController', function($scope, $timeout, $rootScope){
      
    $scope.login = function() {
      alert('You submitted the login form');
    };

    init();
    function init(){
          
    };
  });
