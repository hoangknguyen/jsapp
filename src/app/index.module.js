/* global toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import HomeController from '../app/areas/home/home.controller.js';
import JavascriptController from '../app/areas/javascript/javascript.controller.js';
import NavbarDirective from '../app/components/navbar/navbar.directive';

angular.module('jsangular', [ 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap' ])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('HomeController', HomeController)
  .controller('JavascriptController', JavascriptController)
  .directive('acmeNavbar', () => new NavbarDirective());
