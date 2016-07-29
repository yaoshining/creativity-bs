/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import HomeController from './main/home.controller';
import ResourcesController from './resources/controllers/Resources.controller';
import ResourceRepoController from './resources/controllers/ResourceRepo.controller';
import CngicController from './cnigc/controllers/Cngic.controller';
import CollaborateController from './collaborate/controllers/collaborate.controller';
import ProjectsController from './collaborate/controllers/projects.controller';
import UtilsModule from '../app/components/utils/utils.module.js';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import * as creativityCtls from '../app/creativity/controllers/creativity.controller.js';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import FooterDirective from '../app/components/footer/footer.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';
import SidebarService from '../app/components/sidebar/sidebar.service';

var utilsModule = new UtilsModule(angular);

angular.module('creativity', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ngResource', 'ui.router','oc.lazyLoad','ngQuantum',
  'frSlidescroll','snapscroll', 'angular-parallax','angular-yao-utils',
  'angular-loading-bar','ngScrollSpy','ui.tree',utilsModule.name])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('sidebarService', SidebarService)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('ProjectNavController', creativityCtls.ProjectNavController)
  .controller('ProjectListController', creativityCtls.ProjectListController)
  .controller('ResourcesController', ResourcesController)
  .controller('ResourceRepoController', ResourceRepoController)
  .controller('CollaborateController', CollaborateController)
  .controller('ProjectsController', ProjectsController)
  .controller('CngicController', CngicController)
  .directive('ctNavbar', () => new NavbarDirective())
  .directive('ctFooter', () => new FooterDirective())
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
