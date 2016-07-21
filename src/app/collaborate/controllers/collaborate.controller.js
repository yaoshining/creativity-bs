/**
 * Created by yao on 15/11/16.
 */
class CollaborateConroller {
    constructor($scope, $rootScope, $state) {
        'ngInject';
        $scope.navs = [{
            id: 1,
            name: '仪表盘',
            sref: 'collaborate',
            iconClass: 'fa-dashboard'
        },{
            id: 2,
            name: '项目',
            sref: 'collaborate.projects',
            iconClass: 'fa-tasks'
        },{
            id: 3,
            name: '任务',
            sref: 'collaborate.tasks',
            iconClass: 'fa-tasks'
        }];

        $rootScope.$on('collaborate.navs.add', (event, nav, pos) => {
            if($scope.navs.some((n) => {
                return n.id === nav.id;
            })) {
                $scope.navs.filter((n) => {
                    if(n.id === nav.id) {
                        $state.go(nav.sref, nav.params);
                    }
                });
            } else {
                pos = pos || $scope.navs.length + 1;
                $scope.navs.splice(pos - 1, 0, nav);
                $state.go(nav.sref, nav.params);
            }
        });

        $scope.closeNav = () => {
            let delNavs = [];
            $scope.navs.forEach((e) => {
                if($state.is(e.sref, e.params)){
                    delNavs.push(e);
                }
            });
            delNavs.forEach((e) => {
                $scope.navs.splice($scope.navs.indexOf(e), 1);
            });
            $state.go('collaborate.projects');
        };
    }
}

export default CollaborateConroller;