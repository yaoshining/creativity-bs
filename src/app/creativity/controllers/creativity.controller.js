/**
 * Created by tongda on 15/8/11.
 */
class ProjectNavController {
    constructor ($scope) {
        'ngInject';
        $scope.catalogs = [
            {
                "id": 0,
                "title": "所有项目"
            },
            {
                "id": "00",
                "title": "XX相关项目"
            },
            {
                "id": 1,
                "title": "Logo设计",
                "items": [
                    {
                        "id": 11,
                        "title": "网站Logo",
                        "items": [
                            {
                                "id": 111,
                                "title": "node1.1.1",
                                "items": []
                            }
                        ]
                    },
                    {
                        "id": 12,
                        "title": "公司Logo",
                        "items": []
                    }
                ]
            },
            {
                "id": 2,
                "title": "VI设计",
                "items": [
                    {
                        "id": 21,
                        "title": "企业VI设计",
                        "items": []
                    },
                    {
                        "id": 22,
                        "title": "品牌VI设计",
                        "items": []
                    }
                ]
            },
            {
                "id": 3,
                "title": "包装",
                "items": [
                    {
                        "id": 31,
                        "title": "食品包装",
                        "items": []
                    },
                    {
                        "id": 32,
                        "title": "化妆品包装",
                        "items": []
                    }
                ]
            },
            {
                "id": 4,
                "title": "宣传",
                "items": [
                    {
                        "id": 41,
                        "title": "画册设计",
                        "items": []
                    },
                    {
                        "id": 42,
                        "title": "海报设计",
                        "items": []
                    }
                ]
            }
        ];

        $scope.dateConditions = [
            {
                title: "任何时间"
            },
            {
                title: "一小时前"
            },
            {
                title: "一天前"
            },
            {
                title: "一周前"
            },
            {
                title: "一月前"
            }
        ];

        $scope.sortConditions = [
            {
                title: "浏览量"
            },
            {
                title: "日期"
            },
            {
                title: "项目周期"
            }
        ];

        $scope.layout = {
            type: "table",
            name: "table"
        };

        //$scope.$on('navbar.scrollOut',() => {
        //    $element.addClass('sticky');
        //});
        //$scope.$on('navbar.scrollIn',() => {
        //    $element.removeClass('sticky');
        //});
    }
}

class ProjectListController {
    constructor () {
        'ngInject';
        this.layouts = [{
            id: "listLayout",
            type: "list",
            name: "list"
        },{
            id: "featLayout",
            type: "list",
            name: "th-list"
        },{
            id: "gridLayout",
            type: "list",
            name: "th"
        },{
            id: "gridLgLayout",
            type: "list",
            name: "th-large"
        },{
            id: "fullLayout",
            type: "list",
            name: "list-alt"
        },{
            id: "tableLayout",
            type: "table",
            name: "table"
        }];
        this.layout = this.layouts[0];
        this.projects = this.getProjects();
    }
    swithLayout(layout) {
        this.layout = layout;
    }
    getProjects() {
        let projects = [];
        for(let i = 0;i < 100;i++){
            projects.push({
                name: "项目"+(i+1),
                description: "项目描述"+(i+1),
                publishTime: new Date(),
                otherTime: new Date(),
                imageUrl: '../assets/images/demo/bg/'+(i%7)+((i%7)>0?'.jpg':'.png')
            });
        }
        return projects;
    }
}

export {ProjectNavController,ProjectListController};