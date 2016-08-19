/**
 * Created by yaoshining on 16/8/11.
 */
import * as Layouts from './Layouts';

class Bloc {

    constructor(report) {
        let _layout = null;
        Object.defineProperties(this, {
            report: {
                get: () => report
            },
            layout: {
                get: () => _layout,
                set: (layout) => {
                    if(_layout) {
                        this.removeLayout();
                    }
                    _layout = layout;
                    const addBloc = $('<div>').addClass('add-bloc-btn').text('+').on('click', () => {
                        const bloc = new Bloc(this.report);
                        this.report.insertBlocAfter(this, bloc);
                    }), el = layout.render();
                    el.append(addBloc);
                    this.element.append(el);
                }
            }
        });
    }

    render() {
        this.element = renderEmptyElement.bind(this).call();
        return this.element;
    }

    destroy() {
        this.element.remove();
    }

    removeLayout() {
        this.layout.container.remove();
    }

    toJSON() {
        let obj = $.extend({}, this);
        delete obj.element;
        delete obj.selectPane;
        obj.layout = this.layout;
        return obj;
    }
}

function renderEmptyElement() {
    let root = $('<div>').addClass('report-bloc-wrapper');
    this.selectPane = new SelectPane(this);
    root.append(this.selectPane.render());
    setTimeout(() => {
        this.selectPane.open();
    }, 0);
    $compile(root)(this.report.$scope);
    return root;
}

class SelectPane {

    constructor(bloc) {
        Object.defineProperties(this, {
            bloc: {
                get: () => bloc
            },
            report: {
                get: () => bloc.report
            }
        });
    }

    render() {
        this.element = renderSelectPane.bind(this).call();
        return this.element;
    }

    open() {
        this.element.addClass('opened');
        $(document).one('click', event => {
            let parents = $(event.target).parents().addBack();
            if(parents.is('.select-pane')) {
                return false;
            }
            if(parents.is('.report-designer')) {
                this.close();
            }
        });
    }

    close() {
        this.element.removeClass('opened');
        if(!this.bloc.layout) {
            setTimeout(() => {
                this.bloc.destroy();
                this.report.removeBloc(this.bloc);
            }, 500);
        }
    }

}

function renderSelectPane() {
    let pane = $('<div>').addClass('select-pane assistant');

    let leftButton = $(`
            <span class="pull-left">
                <i class="fa fa-angle-left"></i>
            </span>
        `), rightButton = $(`
            <span class="pull-right">
                <i class="fa fa-angle-right"></i>
            </span>
        `), title = $('<div>').addClass('pane-title')
                    .append(leftButton).append(rightButton);

    let body = $('<div>').addClass('pane-body');
    let list = $('<ul>').addClass('pane-h-list');
    angular.forEach(Layouts, Layout => {
        const thumbnail = Layout.thumbnail;
        list.append($('<li>').html(thumbnail));
        thumbnail.on('click', () => {
            this.bloc.layout = new Layout(this.bloc);
        });
    });
    body.append(list);
    pane.append(title).append(body);
    pane.on('click', event => {
        event.stopPropagation();
    });
    leftButton.on('click', () => {
        let currentPosition = parseInt(list.css('margin-left')),
            step = 300,
            endPoint = 0;
        currentPosition += step;
        if(currentPosition > endPoint) {
            currentPosition = endPoint;
        }
        list.stop(true, true).animate({
            'margin-left': currentPosition
        });
    });
    rightButton.on('click', () => {
        let currentPosition = parseInt(list.css('margin-left')),
            step = 300,
            endPoint = body.width() - list.width() + 20;
        currentPosition -= step;
        if(currentPosition < endPoint) {
            currentPosition = endPoint;
        }
        list.stop(true, true).animate({
            'margin-left': currentPosition
        });
    });
    $compile(pane)(this.report.$scope);
    return pane;
}

export default Bloc;