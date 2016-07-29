/**
 * Created by yao on 15/11/16.
 */
class CollaborateConroller {
    constructor($scope, $rootScope, $state, sidebarService) {
        'ngInject';
        $scope.navs = sidebarService.navs;

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

        $scope.sidebar = sidebarService;

    }
}

export default CollaborateConroller;