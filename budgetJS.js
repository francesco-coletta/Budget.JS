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
            $scope.test = "Hello Budget JS";  

            $scope.posts = [
                {title: "post 1", upvotes: 5 },
                {title: "post 2", upvotes: 0 },
                {title: "post 3", upvotes: 6 },
                {title: "post 4", upvotes: 5 },
                {title: "post 5", upvotes: 2 },
                {title: "post 6", upvotes: 1 },
                {title: "post 7", upvotes: 0 }
            ];

            $scope.addPost = function()
            {
                if ($scope.title && !($scope.title === ""))
                {
                    $scope.posts.push({title: $scope.title, upvotes: 0 });
                    $scope.title = "";
                };
            };

            $scope.incrementUpvotes = function(post)
            {
                post.upvotes += 1;
            }
        }
    ]);

