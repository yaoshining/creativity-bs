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
          var indexMaps = {
            '': 0,
            'iCreativity': 1,
            'iCollaborate': 2,
            'iResources': 3,
            'iCnigc': 4,
            'iContact': 5
          };
          $rootScope.snapIndex = indexMaps[$state.params.index||''];
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
      }).state('resources.repo', {
        url: '/repo/:repoId',
        views: {
          '@': {
            templateUrl: 'app/resources/views/repo.tpl.html',
            controller: 'ResourceRepoController'
          }
        }
      }).state('collaborate',{
        url: '/collaborate',
        views: {
          '': {
            templateUrl: 'app/collaborate/views/collaborate.tpl.html',
            controller: 'CollaborateController'
          },
          '@collaborate': {
            templateUrl: 'app/collaborate/views/dashboard.tpl.html'
          }
        }
      }).state('collaborate.tasks',{
        url: '/tasks',
        templateUrl: 'app/collaborate/views/tasks.tpl.html',
        controller: 'TasksController'
      }).state('collaborate.projects',{
        url: '/projects',
        templateUrl: 'app/collaborate/views/projects.tpl.html',
        controller: 'ProjectsController'
      }).state('collaborate.project', {
        url: '/project/:projectId',
        templateUrl: 'app/collaborate/views/project.tpl.html'
      }).state('collaborate.reports', {
        url: '/reports',
        templateUrl: 'app/collaborate/views/reports.tpl.html'
      }).state('collaborate.reports.add', {
        url: '/add',
        templateUrl: 'app/reports/views/add.tpl.html'
      }).state('cnigc',{
        url: '/cnigc',
        templateUrl: 'app/cnigc/views/cnigc.tpl.html',
        controller: 'CngicController',
        controllerAs: 'cngic'
      }).state('cnigc.abilities',{
        url: '/abilities/:categoryId',
        templateUrl: 'app/cnigc/views/abilities.tpl.html'
      }).state('cnigc.products',{
        url: '/products/:categoryId',
        templateUrl: 'app/cnigc/views/products.tpl.html'
      }).state('cnigc.requirements',{
        url: '/requirements/:categoryId',
        templateUrl: 'app/cnigc/views/requirements.tpl.html'
      }).state('cnigc.companies',{
        url: '/companies/:categoryId',
        templateUrl: 'app/cnigc/views/companies.tpl.html'
      });
  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
