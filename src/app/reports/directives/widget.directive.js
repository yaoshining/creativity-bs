/**
 * Created by yaoshining on 16/8/24.
 */
import {renderTable} from './widget/table.render';
import {renderChart} from './widget/chart.render';

function ReportWidgetDirectiveFactory() {

    function linkFunc(scope, elem) {
        let widget = scope.widget;
        if(!widget) {
            return false;
        }
        scope.$on('yaoFullscreen.afterRender', function() {
            if(widget.category === 'chart') {
                renderChart.$invoke(this, {scope, elem, widget});
            }
            if(widget.category === 'table') {
                renderTable.$invoke(this, {scope, elem, widget});
            }
        });
    }


    let directive = {
        restrict: 'AE',
        link: linkFunc,
        scope: {
            widget: '=ctReportWidget',
            report: '=report'
        }
    };

    return directive;
}

class ReportWidgetController {

    constructor() {
    }

}

export default ReportWidgetDirectiveFactory;