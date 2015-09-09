function runBlock ($log,$rootScope,$loading) {
  'ngInject';
  $rootScope.loading = new $loading({
    showSpinner: false,
    busyText: '',
    theme: 'info',
    timeout: false,
    delayHide:500
  });
  $rootScope.$on('$stateChangeStart',function(){
    $rootScope.loading.show();
  });
  $rootScope.$on('$stateChangeSuccess',function(){
    $rootScope.loading.hide();
  });
  $log.debug('runBlock end');
}

export default runBlock;