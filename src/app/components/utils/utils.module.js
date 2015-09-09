/**
 * Created by tongda on 15/8/13.
 */
import {SquarifyDirective} from './utils.directive.js';
class UtilsModule {
    constructor(angular){
        let utilsModule = angular.module('yao.utils',[])
            .directive('squarify',() => new SquarifyDirective());
        return utilsModule;
    }
}

export default UtilsModule;