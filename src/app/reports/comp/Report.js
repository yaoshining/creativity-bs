/**
 * Created by yaoshining on 16/8/10.
 */
function Report($scope, $element) {
    'ngInject';

    class Report {

        constructor() {
            $.extend(this, {
                title: '未命名报表',
                subtitle: '关于此报表的详细说明',
                blocs: [],
                widgets: [],
                getWidget: id => _.find(this.widgets, {id})
            });
            Object.defineProperties(this, {
                $scope: {
                    get: () => $scope
                }
            });
        }

        insertBloc(bloc) {
            $element.find('.report-body').append(bloc.render());
            this.blocs.push(bloc);
        }

        insertBlocAfter(pre, bloc) {
            let i = $.inArray(pre, this.blocs) + 1;
            if(i === 0) {
                this.insertBloc(bloc);
            } else {
                bloc.render().insertAfter(pre.element);
                this.blocs.splice(i, 0, bloc);
            }
        }

        removeBloc(bloc) {
            let i = -1;
            if((i = $.inArray(bloc, this.blocs)) > -1) {
                $scope.$apply(() => {
                    this.blocs.splice(i, 1);
                });
            }
        }

    }

    let report = new Report(),
        self = this;
    Object.defineProperties(report, {
        $designer: {
            get: () => self
        }
    });
    return report;
}

export default Report;