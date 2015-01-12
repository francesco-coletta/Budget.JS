/**
*  Post Repository
*/
angular.module('budget.repository', [])
.factory('postRepository', function(){
        var posts = [
                {title: "post 1",
                 upvotes: 5,
                 comments: [
                        {author: 'Joe', body: 'test comment 1', upvotes: 0},
                        {author: 'Bob', body: 'test comment 2', upvotes: 0}
                    ]
                },
                {title: "post 2",
                 upvotes: 0,
                 comments: [
                        {author: 'Joe', body: 'test comment 1', upvotes: 0},
                        {author: 'Bob', body: 'test comment 2', upvotes: 0}
                    ]
                },
                {title: "post 3",
                 upvotes: 6 ,
                 comments: [
                        {author: 'Joe', body: 'test comment 1', upvotes: 0},
                        {author: 'Bob', body: 'test comment 2', upvotes: 0}
                    ]
                }
            ];

        return {
            posts: posts
        };
    });
