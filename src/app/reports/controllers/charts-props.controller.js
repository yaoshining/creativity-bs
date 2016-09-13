/**
 * Created by yaoshining on 16/9/6.
 */
class ChartPropsController {
    constructor($scope) {
        'ngInject';
        $scope.$chart = $scope.$designer.selectedItem;
        $scope.config = $scope.$chart.config;
    }
}

export default ChartPropsController;