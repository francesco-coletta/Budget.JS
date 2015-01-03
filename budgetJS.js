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
     function($scope)
     {
            $scope.AppTitle = "Welcome to Budget";  

            $scope.posts = [
                {title: "post 1", upvotes: 5 },
                {title: "post 2", upvotes: 0 },
                {title: "post 3", upvotes: 6 }
            ];

            $scope.addPost = function()
            {
                if ($scope.title && !($scope.title === ""))
                {
                    $scope.posts.push({
                        title: $scope.title,
                        link: $scope.link,
                        upvotes: 0 
                    });
                    $scope.title = "";
                    $scope.link = "";
                };
            };

            $scope.incrementUpvotes = function(post)
            {
                post.upvotes += 1;
            };

            $scope.decrementUpvotes = function(post)
            {
                post.upvotes -= 1;
            };
        }
    ]);

