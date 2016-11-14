/**
 * Created by yaoshining on 16/9/6.
 */
class TablePropsController {
    constructor($scope, reportDatasourceService) {
        'ngInject';
        $scope.$table = $scope.$designer.selectedItem;
        $scope.config = $scope.$table.config || {};
        let report = $scope.$designer.report;

        $scope.fields = [];

        if(report.dataSource) {
            reportDatasourceService.getFields(report.dataSource.seqId).then(fields => {
                $scope.fields = fields;
                if(angular.isArray($scope.config.displayFields)) {
                    $scope.config.displayFields.forEach(f => {
                        const matched = _.find($scope.fields, {'seqId': f.seqId});
                        if(matched) {
                            matched.$checked = true;
                        }
                    });
                }
            });
        }

        $scope.onFieldStatusChange = (field) => {
            if(field.$checked) {
                let _field = $.extend({}, field);
                delete _field.$checked;
                $scope.config.displayFields.push(_field);
            } else {
                _.remove($scope.config.displayFields, f => {
                    return f.seqId === field.seqId;
                });
            }
        };
    }
}

export default TablePropsController;