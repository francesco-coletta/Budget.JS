/**
*  App Budget JS
*  
*/
angular.module('budget', ['budget.repository', 'budget.route-config'])
.controller(
    'MainController', 
    ['postRepository',
     function(postRepository)
     {
        this.appTitle = "Welcome to Budget";  
        
        this.title = "";
        this.link = "";
        this.posts = postRepository.posts;

        this.addPost = function()
        {
            if (this.title && !(this.title === ""))
            {
                this.posts.push({
                    title: this.title,
                    link: this.link,
                    upvotes: 0 ,
                    comments: [
                        {author: 'Joe', body: 'test comment 1', upvotes: 0},
                        {author: 'Bob', body: 'test comment 2', upvotes: 0}
                    ]
                });
                this.title = "";
                this.link = "";
            };
        };

        this.incrementUpvotes = function(post)
        {
            post.upvotes += 1;
        };

        this.decrementUpvotes = function(post)
        {
            if (post.upvotes > 0)
            {
                post.upvotes -= 1;
            }
        };
    }
])
.controller(
    'PostController', 
    ['postRepository',
     '$stateParams',
     function(postRepository, $stateParams)
     {
        this.author = "";
        this.body = "";
        this.post = postRepository.posts[$stateParams.id];

        this.addComment = function()
        {
            if (this.body && !(this.body === ""))
            {
                this.post.comments.push({
                    author: 'user',
                    body: this.body,
                    upvotes: 0 
                });
                this.author = "";
                this.body = "";
            };
        };

        this.incrementUpvotes = function(comment)
        {
            comment.upvotes += 1;
        };

        this.decrementUpvotes = function(comment)
        {
            if (comment.upvotes > 0)
            {
                comment.upvotes -= 1;
            }
        };
    }
]);


