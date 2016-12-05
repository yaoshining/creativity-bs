/**
 * Created by yaoshining on 2016/11/30.
 */
class ReportsController {

    constructor($scope, yaoFullscreen, reportService) {
        'ngInject';

        $scope.reports = [];

        $scope.groups = [];

        $scope.selectedGroupId = 1;

        function fetchReports() {
            reportService.getReportList($scope.selectedGroupId).then(data => {
                $scope.reports = data;
            });
        }

        fetchReports();

        reportService.getGroupList().then(data => {
            $scope.groups = data;
        });

        $scope.preview = (reportDef) => {
            yaoFullscreen.open({
                templateUrl: 'app/reports/views/preview.tpl.html',
                controller: 'ReportPreviewController',
                controllerAs: '$preview',
                resolve: {
                    report: JSON.parse(reportDef)
                }
            });
        };

        $scope.changeGroup = group => {
            $scope.selectedGroupId = group.id;
            fetchReports();
        };
    }

}

export default ReportsController;