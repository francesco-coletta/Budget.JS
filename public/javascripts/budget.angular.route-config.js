angular.module('budget.route-config', ['ui.router'])
.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        <!-- Elenco dei posts -->
          .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'MainController',
          controllerAs: 'mainCtrl'
        })
        <!-- Elenco dei commenti di un post -->
        .state('post-comment', {
          url: '/posts/{id}',
          templateUrl: 'views/post.html',
          controller: 'PostController',
          controllerAs: 'postCtrl'
        });

      $urlRouterProvider.otherwise('home');
}])
