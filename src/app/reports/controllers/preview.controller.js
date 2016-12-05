/**
 * Created by yaoshining on 2016/11/30.
 */
class ReportPreviewController {
    constructor($scope, yaoFullscreen, report, $element, $resource) {
        'ngInject';
        $scope.$report = report;
        this.close = () => {
            yaoFullscreen.close();
        };

        this.exportHTML = () => angular.download($element.find('.report-wrapper')[0]);

        this.print = () => {
            // const reportWrapper = $element.find('.report-wrapper');
            // reportWrapper.addClass('print-a4');
            // $(window).resize();
            // setTimeout(() => print(), 100);
            print();
        };

        $scope.filterParams = {};

        $scope.refreshReport = () => {
            $scope.$broadcast('ebp.report.refresh', {
                filterParams: $scope.filterParams
            });
        };

        let optionData = {

        };

        if(angular.isArray(report.filterFields)) {
            report.filterFields.filter(f => f.inputType === 'select').forEach(field => {
                const url = field.inputOptions.url;
                optionData[field.seqId] = $resource(url, {}).query();
            });
        }

        $scope.getOptionData = id => optionData[id];

        $scope.getWidget = id => _.find(report.widgets, {id});

    }
}

export default ReportPreviewController;