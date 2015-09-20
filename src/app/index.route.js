function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/areas/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
