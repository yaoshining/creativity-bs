/**
 * Created by yao on 15/10/8.
 */
class CngicController {
    constructor($scope,$state) {
        'ngInject';
        $scope.snapIndex = 0;
        $scope.contentOffset = 60;
        $scope.snapHeight = 0;
        let navGroup = ['abilities','products','requirements'];
        $scope.resizeNotify = function() {
            $scope.snapHeight = $scope.windowHeight - $scope.contentOffset;
        };
        $scope.isNavActive = (name) => {
            if($scope.isChildState()){
                return $state.current.name.split('.')[1] === name;
            }
            return $scope.snapIndex === navGroup.indexOf(name);
        };
        $scope.isChildState = () => {
            return $state.current.name.split('.').length > 1;
        };
    }
}

export default CngicController;