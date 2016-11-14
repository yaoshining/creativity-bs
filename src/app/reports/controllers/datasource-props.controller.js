/**
 * Created by yaoshining on 16/9/6.
 */
class DatasourcePropsController {
    constructor($scope, reportDatasourceService) {
        'ngInject';
        let report = $scope.report = $scope.$designer.report;

        $scope.fields = [];

        if(report.dataSource) {
            reportDatasourceService.getFields(report.dataSource.seqId).then(fields => {
                $scope.fields = fields;
                if(angular.isArray(report.filterFields)) {
                    report.filterFields.forEach(f => {
                        const matched = _.find($scope.fields, {'seqId': f.seqId});
                        if(matched) {
                            matched.$checked = true;
                        }
                    });
                }
            });
        }

        $scope.dataSources = [];

        reportDatasourceService.getDataSources().then(dataSources => {
            $scope.dataSources = dataSources;
        });

        $scope.onDataSourceChange = (dataSource) => {
            report.filterFields = [];
            if(report.dataSource) {
                reportDatasourceService.getFields(dataSource.seqId).then(fields => {
                    $scope.fields = fields;
                });
            }
        };

        $scope.onFilterFieldStatusChange = field => {
            if(field.$checked) {
                let _field = $.extend({}, field);
                delete _field.$checked;
                report.filterFields.push(_field);
            } else {
                _.remove(report.filterFields, f => {
                    return f.seqId === field.seqId;
                });
            }
        };
    }
}

export default DatasourcePropsController;