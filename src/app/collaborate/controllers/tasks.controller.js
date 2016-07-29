/**
 * Created by yao on 15/11/10.
 */
class TasksController {
    constructor(sidebarService) {
        'ngInject';
        sidebarService.expand();
    }
}

export default TasksController;