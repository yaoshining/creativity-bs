/**
 * Created by yaoshining on 16/8/10.
 */

function SideMenu($element, $scope, $timeout) {
    'ngInject';
    let opened = false,
        tabs = [{
            id: 1,
            title: '报表',
            view: {
                templateUrl: 'app/reports/views/report-props.tpl.html'
            }
        }, {
            id: 2,
            title: '数据',
            view: {
                templateUrl: 'app/reports/views/datasource-props.tpl.html'
            }
        }, {
            id: 3,
            title: '组件'
        }];
    let activeTab = tabs[0];

    class Panel {

        constructor() {
            $element.find('.designer-menu').on('click', event => event.stopPropagation());
        }

        get opened() {
            return opened;
        }

        toggle(event) {
            event.stopPropagation();
            $element.find('.menu-button').toggleClass('opened');
            opened = !opened;
        }

        get tabs() {
            return tabs;
        }

        get activeTab() {
            return activeTab;
        }

        changeTab(tab, templateUrl) {
            if(typeof tab == 'object') {
                activeTab = tab;
            }
            if(typeof tab == 'number') {
                activeTab = tabs[tab];
            }
            if(templateUrl) {
                activeTab.view = {templateUrl};
            }
            if(!$scope.$$phase) {
                $scope.$apply();
            }
        }

        refresh() {
            let tmp = activeTab.view;
            activeTab.view = {
                templateUrl: ''
            };
            if(!$scope.$$phase) {
                $scope.$apply();
            }
            $timeout(() => {
                activeTab.view = tmp;
            }, 0);
        }
    }

    return new Panel();
}

export default SideMenu;