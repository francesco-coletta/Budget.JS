/**
*  Module
*  
*
* Description
*/
angular.module('budgetJS', [])
.controller(
    'MainController', 
    ['$scope', 
     function($scope){
            $scope.test = "Hello Budget JS";  
        }
    ]);