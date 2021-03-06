/**
 * Created by yaoshining on 16/8/15.
 */
import WidgetSelector from '../comp/WidgetSelector';
import SideMenu from '../comp/SideMenu';
import Report from '../comp/Report';
import Bloc from '../comp/Bloc';

function ReportDesignerDirectiveFacroty() {

    function linkFunc(scope, elem, attrs, designer) {
        elem.addClass('report-designer');
        const reportElem = elem.find('.report-wrapper'),
              headerElem = reportElem.find('.report-header'),
              bodyElem = reportElem.find('.report-body');

        headerElem.on('click', e => {
            headerElem.toggleClass('active');
        });

        elem.on('contextmenu', () => {
            designer.widgetSelector.toggle();
            scope.$digest();
            return false;
        });
    }

    let directive = {
        restrict: 'AE',
        link: linkFunc,
        templateUrl: 'app/reports/views/designer.tpl.html',
        controller: DesignerController,
        controllerAs: '$designer'
    };

    return directive;
}

class DesignerController {

    constructor($scope, $element, yaoFullscreen, reportService, $state) {
        'ngInject';
        this.widgetSelector = WidgetSelector.$invoke(this, {$scope, $element});
        this.sidemenu = $scope.sidemenu = SideMenu.$invoke(this, {$scope, $element});
        this.report = Report.$invoke(this, {$scope, $element});
        this.select = item => {
            if(this.selectedItem) {
                this.selectedItem.element.removeClass('selected');
            }
            this.selectedItem = item;
            item.element.addClass('selected');
            this.sidemenu.refresh();
        };
        this.preview = () => {
            yaoFullscreen.open({
                templateUrl: 'app/reports/views/preview.tpl.html',
                controller: 'ReportPreviewController',
                controllerAs: '$preview',
                resolve: {
                    report: this.report
                }
            });
        };
        this.save = () => {
            reportService.save(this.report).then(() => {
                $state.go('collaborate.reports', {}, {reload: true});
            });
        };
    }

    addBloc() {
        const block = new Bloc(this.report);
        this.report.insertBloc(block);
    }

}


export default ReportDesignerDirectiveFacroty;