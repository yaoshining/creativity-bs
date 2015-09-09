class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '=',
          type: '@',
          theme: '@',
          animated: '@',
          shadow: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor ($scope,moment,$element,$rootScope) {
    'ngInject';
    var vm = this;
    vm.scrollOut = false;
    $scope.$watch('vm.theme',function(newValue){
      vm.logoImg = '../assets/images/Logo_text.png';
      if(['inverse','blue','orange','green','pink','purple','red'].indexOf(newValue) > -1){
        vm.logoImg = '../assets/images/Logo_text_white.png';
      }
    });
    // "this.creation" is avaible by directive option "bindToController: true"
    vm.relativeDate = moment(vm.creationDate).fromNow();
    angular.element('#mainContainer').on('scroll',function(){
      if($element.offset().top <= -$element.children('.navbar').height() && !vm.scrollOut){
        $rootScope.$apply(() => {
          $rootScope.$broadcast('navbar.scrollOut');
        });
        vm.scrollOut = true;
      }else if($element.offset().top > -$element.children('.navbar').height() && vm.scrollOut) {
        $rootScope.$apply(() => {
          $rootScope.$broadcast('navbar.scrollIn');
        });
        vm.scrollOut = false;
      }
    });
  }
}

export default NavbarDirective;
