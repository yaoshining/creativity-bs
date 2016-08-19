/**
 * Created by yaoshining on 16/7/22.
 */

class SidebarService {
    constructor($resource) {
        'ngInject';
        this.navs = $resource('config/menus.json').query();
    }

    get collapsed() {
        return collapsed;
    }

    toggle() {
        collapsed = !collapsed;
        $('.collaborate-sidebar').toggle();
    }

    expand() {
        collapsed = false;
        $('.collaborate-sidebar').show();
    }

    collapse() {
        collapsed = true;
        $('.collaborate-sidebar').hide();
    }
}

let collapsed = false;

export default SidebarService;