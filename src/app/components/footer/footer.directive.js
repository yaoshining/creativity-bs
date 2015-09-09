class FooterDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {

      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class FooterController {
  constructor ($element,$rootScope) {
    'ngInject';
    var vm = this;
    vm.scrollOut = true;
    angular.element('#mainContainer').on('scroll',function(){
      if($element.offset().top >= angular.element(this).height()){
        if(!vm.scrollOut){
          $rootScope.$apply(() => {
            $rootScope.$broadcast('footer.scrollOut');
            vm.scrollOut = true;
          });
        }
      }else if($element.offset().top < angular.element(this).height()) {
        $rootScope.$apply(() => {
          if(vm.scrollOut){
            $rootScope.$broadcast('footer.scrollIn');
            vm.scrollOut = false;
          }
          $rootScope.$broadcast('footer.scrollOver',{top: angular.element(this).height() - $element.offset().top});
        });
      }
    });
  }
}

export default FooterDirective;
