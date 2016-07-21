/**
 * Created by yao on 15/11/10.
 */
class ProjectsController {
    constructor($scope, $document, $rootScope) {
        'ngInject';
        $scope.projects = this.getProjects();
        $scope.groups = this.getGroups($scope.projects);
        $scope.moveToMenu = {};
        $scope.openGroup = ($event, group) => {
            $event.stopPropagation();
            group.opened = true;
        };
        $document.on('click', () => {
            $scope.$apply(() => {
                $scope.moveToMenu.show = false;
                $scope.groups.grouped.map(function(g){
                    g.group.opened = false;
                });
            });
        });
        $scope.projectClick = (project) => {
            if($scope.editable){
                project.checked = !project.checked;
            } else {
                $rootScope.$emit('collaborate.navs.add', {
                    id: 'project_' + project.id,
                    name: project.name,
                    sref: 'collaborate.project',
                    params: {
                        projectId: project.id
                    },
                    iconClass: 'fa-home'
                }, 3);
            }
        };

        $scope.getCheckedItems = () => {
            return $scope.projects.filter((project) => {
                return project.checked;
            });
        };
    }

    getProjects() {
        return [{
            id: 1,
            name: 'yaoshining/project1',
            img: 'assets/images/projects/1.png',
            group: 1
        },{
            id: 2,
            name: 'yaoshining/project2',
            img: 'assets/images/projects/2.png',
            group: 1
        },{
            id: 3,
            name: 'yaoshining/project3',
            img: 'assets/images/projects/3.png'
        },{
            id: 4,
            name: 'yaoshining/project4',
            img: 'assets/images/projects/4.png'
        },{
            id: 5,
            name: 'yaoshining/project5',
            img: 'assets/images/projects/5.png'
        },{
            id: 6,
            name: 'yaoshining/project6',
            img: 'assets/images/projects/6.png'
        },{
            id: 7,
            name: 'yaoshining/project7',
            img: 'assets/images/projects/7.png'
        },{
            id: 8,
            name: 'yaoshining/project8',
            img: 'assets/images/projects/8.png'
        }];
    }

    getGroups(projects) {
        let groupMap = new Map();
        let groups = {
            grouped: [],
            ungrouped: []
        };
        angular.forEach(projects, function(p) {
            p.group = p.group || null;
            if(groupMap.has(p.group)) {
                groupMap.get(p.group).push(p);
            } else {
                groupMap.set(p.group, [p]);
            }
        });
        for(let it = groupMap.entries(), entry = it.next();
            !entry.done;entry = it.next()) {
            if(angular.isArray(entry.value)){
                let group = {
                    id: entry.value[0],
                    name: 'loading'
                }, groupItem = {
                    group: group,
                    projects: entry.value[1]
                };
                setTimeout(() => {
                    group.name = 'group1';
                }, 1000);
                if(entry.value[0]){
                    groups.grouped.push(groupItem);
                } else {
                    groups.ungrouped = groupItem.projects;
                }
            }
        }
        return groups;
    }
}

export default ProjectsController;