'use strict';

/**
 * @ngdoc function
 * @name testAppApp.controller:appScrollController
 * @description
 * # AboutCtrl
 * Controller of the mobile-angular
 */
angular.module('mobile-angular')
  .controller('appScrollController', function($scope, $timeout, $rootScope){
      
    
    $scope.bottomReached = function() {
        alert('Congrats you scrolled to the end of the list!');
    }
    init();
    function init(){
          
    };
  });
