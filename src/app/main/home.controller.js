/**
 * Created by tongda on 15/8/12.
 */
class HomeController {
    constructor ($timeout, webDevTec, toastr, $rootScope,$state) {
        'ngInject';
        $rootScope.snapIndex = 0;
        var indexMap = [
            '',
            'iCreativity',
            'iCollaborate',
            'iResources',
            'iCnigc',
            'iContact'
        ];
        this.beforeScroll = function(index){
            $state.go('home.index',{index: indexMap[index]});
        };
        this.awesomeThings = [];
        this.classAnimation = '';
        this.creationDate = 1438328103803;
        this.toastr = toastr;

        this.activate($timeout, webDevTec);
    }

    activate($timeout, webDevTec) {
        this.getWebDevTec(webDevTec);
        $timeout(() => {
            this.classAnimation = 'rubberBand';
        }, 4000);
    }

    getWebDevTec(webDevTec) {
        this.awesomeThings = webDevTec.getTec();

        angular.forEach(this.awesomeThings, (awesomeThing) => {
            awesomeThing.rank = Math.random();
        });
    }

    showToastr() {
        this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        this.classAnimation = '';
    }
}

export default HomeController;
