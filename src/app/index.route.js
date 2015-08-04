function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('home.index', {
        url: '{index:i[a-zA-z]*|}',
        controller: function($state,$scope){
          var indexeMaps = {
            '': 0,
            'iCreativity': 1,
            'iCollaborate': 2,
            'iResources': 3,
            'iCnigc': 4,
            'iContact': 5
          };
          $scope.$parent.snapIndex = indexeMaps[$state.params.index||''];
        }
      });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
