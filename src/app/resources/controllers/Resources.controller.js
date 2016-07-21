/**
 * Created by tongda on 15/9/6.
 */
class ResourcesController {
    constructor($scope) {
        'ngInject';
        $scope.resources = this.getResources();
        $scope.snapIndex = 0;
        $scope.contentOffset = 210;
        $scope.snapHeight = 0;
        $scope.current = $scope.resources[$scope.snapIndex];
        $scope.current.theme = "blue";
        var themes = ['blue','orange','green','yellow',
            'pink','blue','purple','red'];
        $scope.beforeSnap = function(index){
            $scope.snapIndex = index;
            $scope.current.theme = themes[index];
            return true;
        };
        $scope.afterSnap = function(){

        };
        $scope.resizeNotify = function(){
            $scope.snapHeight = $scope.windowHeight - $scope.contentOffset;
        };
    }

    getResources() {
        let repos = [{
            "name": "忧德汽车模具零部件CAD模型库",
            "bgImg": "../assets/images/demo/products/product01.jpg"
        },{
            "name": "模具标准件CAD模型库",
            "bgImg": "../assets/images/demo/products/product02.jpg"
        },{
            "name": "国外压铸模具CAD模型库",
            "bgImg": "../assets/images/demo/products/product03.jpg"
        },{
            "name": "国际冲模标准件CAD模型库",
            "bgImg": "../assets/images/demo/products/product04.jpg"
        },{
            "name": "精冲模模型CAD模型库",
            "bgImg": "../assets/images/demo/products/product05.jpg"
        },{
            "name": "橡胶模模型CAD模型库",
            "bgImg": "../assets/images/demo/products/product06.jpg"
        },{
            "name": "锻压模模型CAD模型库",
            "bgImg": "../assets/images/demo/products/product07.jpg"
        },{
            "name": "Futaba铸铁冲压模架CAD模型库",
            "bgImg": "../assets/images/demo/products/product08.jpg"
        },{
            "name": "STRACK公司WB级进模CAD模型库",
            "bgImg": "../assets/images/demo/products/product09.jpg"
        },{
            "name": "GB注塑模标准件CAD模型库",
            "bgImg": "../assets/images/demo/products/product10.jpg"
        },{
            "name": "龙记SDC压铸模架CAD模型库",
            "bgImg": "../assets/images/demo/products/product11.jpg"
        }];
        return [{
            "id": "standard",
            "name": "标准件库",
            "repos": repos
        },{
            "id": "material",
            "name": "材料库",
            "repos": repos
        },{
            "id": "component",
            "name": "元器件库",
            "repos": repos
        },{
            "id": "specs",
            "name": "标准规范库",
            "repos": repos
        },{
            "id": "cutter",
            "name": "刀具库",
            "repos": repos
        },{
            "id": "technics",
            "name": "工艺库",
            "repos": repos
        },{
            "id": "measure",
            "name": "量具库",
            "repos": repos
        },{
            "id": "resource",
            "name": "资源库",
            "repos": repos
        }];
    }
}

export default ResourcesController;
