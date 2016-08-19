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

    constructor($scope, $element) {
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

    }

    addBloc() {
        const block = new Bloc(this.report);
        this.report.insertBloc(block);
    }

}

export default ReportDesignerDirectiveFacroty;