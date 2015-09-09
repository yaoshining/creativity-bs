/**
 * Created by tongda on 15/8/13.
 */
class SquarifyDirective {
    constructor() {
        'ngInject';
        let directive = {
            restrict: 'A',
            scope: false,
            controller: SquarifyController
        };
        return directive;
    }
}

class SquarifyController {
    constructor($window,$element,$attrs) {
        'ngInject';
        var type = $attrs.squarify;
        type = type || 'height';
        calc($element, type);
        angular.element($window).on('resize',function(){
            calc($element, type);
        });

        function calc(el, type) {
            let width,height,len;
            len = el.parent()[type]();
            width = height = len;
            el.width(width).height(height);
        }
    }
}

export {SquarifyDirective};