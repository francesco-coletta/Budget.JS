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

            $scope.posts = [
                "post 1",
                "post 2",
                "post 3",
                "post 4",
                "post 5",
                "post 6",
                "post 7"
            ];
        }
    ]);

