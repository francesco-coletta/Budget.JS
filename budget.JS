/**
*  App Budget JS
*  
*/
angular.module('budget', ['budget.repository'])
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
                    upvotes: 0 
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
]);


