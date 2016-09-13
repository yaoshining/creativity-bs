function runBlock ($log, $rootScope, $loading, $state, $compile, $injector, yaoGuid) {
  'ngInject';
  window.$compile = $compile;
  Function.prototype.$invoke = function(self, locals) {
    return $injector.invoke(this, self, locals);
  };
  window.guid = yaoGuid;
  // $rootScope.loading = new $loading({
  //   showSpinner: false,
  //   busyText: '',
  //   theme: 'info',
  //   timeout: false,
  //   delayHide:500
  // });
  // $rootScope.$on('$stateChangeStart',function(){
  //   $rootScope.loading.show();
  // });
  // $rootScope.$on('$stateChangeSuccess',function(){
  //   $rootScope.loading.hide();
  // });
  $rootScope.$state = $state;
  $log.debug('runBlock end');
}

export default runBlock;