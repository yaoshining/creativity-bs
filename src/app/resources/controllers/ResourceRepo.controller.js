/**
 * Created by tongda on 15/9/17.
 */
class ResourceRepoController {
    constructor($scope,$document) {
        'ngInject';
        $scope.repos = this.getRepos();
        $scope.detailPanel = {
            show: false
        };
        $document.on('click',function(event){
            if(!angular.element(event.target).parents().addBack().is('#detailPanel')){
                $scope.detailPanel.show = false;
                $scope.$apply();
            }
        });
    }

    getRepos() {
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

        angular.forEach(repos,function(repo){
            repo.repos = [{
                name: 'XXXX库1',
                repos: [{
                    name: 'XXXX库1-1',
                    repos: [{
                        name: 'XXXX库1-1',
                        repos: [{
                            name: 'XXXX库1-1',
                            repos: [{
                                name: 'XXXX库1-1XXXX库1-1XXXX库1-1XXXX库1-1XXXX库1-1'
                            },{
                                name: 'XXXX库1-2'
                            },{
                                name: 'XXXX库1-3'
                            }]
                        },{
                            name: 'XXXX库1-2'
                        },{
                            name: 'XXXX库1-3'
                        }]
                    },{
                        name: 'XXXX库1-2'
                    },{
                        name: 'XXXX库1-3'
                    }]
                },{
                    name: 'XXXX库1-2'
                },{
                    name: 'XXXX库1-3'
                }]
            },{
                name: 'XXXX库2'
            },{
                name: 'XXXX库3'
            },{
                name: 'XXXX库4'
            }];
        });

        return repos;
    }
}

export default ResourceRepoController;