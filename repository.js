/**
*  Post Repository
*/
angular.module('repository', [])
.factory('postRepository', function(){
        var posts = [
                {title: "post 1", upvotes: 5 },
                {title: "post 2", upvotes: 0 },
                {title: "post 3", upvotes: 6 }
            ];

        return {
            posts: posts
        };
    });
