function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    }).state('home.index', {
        url: '{index:i[a-zA-z]*|}',
        controller: function($state,$rootScope){
          var indexeMaps = {
            '': 0,
            'iCreativity': 1,
            'iCollaborate': 2,
            'iResources': 3,
            'iCnigc': 4,
            'iContact': 5
          };
          $rootScope.snapIndex = indexeMaps[$state.params.index||''];
        }
      }).state('creativity',{
        url: '/creativity',
        templateUrl: 'app/creativity/views/creativity.tpl.html'
      }).state('creativity.projects', {
        url: '/projects',
        views: {
          '@': {
            templateUrl: 'app/creativity/views/projects.tpl.html'
          }
        }
      }).state('resources',{
        url: '/resources',
        templateUrl: 'app/resources/views/resources.tpl.html',
        controller: 'ResourcesController'
      }).state('collaborate',{
        url: '/collaborate',
        views: {
          '': {
            templateUrl: 'app/collaborate/views/collaborate.tpl.html'
          },
          '@collaborate': {
            templateUrl: 'app/collaborate/views/dashboard.tpl.html'
          }
        }
      }).state('collaborate.tasks',{
        url: '/tasks',
        template: 'asdads'
      });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
