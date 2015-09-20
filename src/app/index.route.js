function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/areas/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    })
    .state('javascript', {
      url: '/',
      templateUrl: 'app/areas/javascript/javascript.html',
      controller: 'JavascriptController',
      controllerAs: 'javascriptCtrl'
    });

  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
