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

    constructor($scope, $element, yaoFullscreen) {
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
                controller: PreviewController,
                controllerAs: '$preview',
                resolve: {
                    report: this.report
                }
            });
        };
    }

    addBloc() {
        const block = new Bloc(this.report);
        this.report.insertBloc(block);
    }

}

class PreviewController {
    constructor($scope, yaoFullscreen, report, $element) {
        'ngInject';
        $scope.$report = report;
        this.close = () => {
            yaoFullscreen.close();
        };

        this.exportHTML = () => angular.download($element.find('.report-wrapper')[0]);

        this.print = () => {
            const reportWrapper = $element.find('.report-wrapper');
            reportWrapper.addClass('print-a4');
            $(window).resize();
            setTimeout(() => print(), 100);
        };

        if(matchMedia) {
            matchMedia('print').addListener(mql => {
                const reportWrapper = $element.find('.report-wrapper');
                if(!mql.matches) {
                    reportWrapper.removeClass('print-a4');
                }
            });
        }
    }
}


export default ReportDesignerDirectiveFacroty;