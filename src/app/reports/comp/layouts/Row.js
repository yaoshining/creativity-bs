/**
 * Created by yaoshining on 16/8/12.
 */
import Column from './Column';

export default function Row(size, colNum) {
    const element = $('<div>').addClass('report-row'),
          content = $('<div>').addClass('row-content'),
          cols = [];
    size = size || 12;

    Object.defineProperties(this, {
        cols: {
            get: () => cols
        },
        element: {
            get: () => element
        }
    });

    $.extend(this, {
        addColumn: col => {
            Object.defineProperties(col, {
                $designer: {
                    get: () => this.$designer
                }
            });
            cols.push(col);
        },
        render: () => {
            element.addClass('col-md-' + size).addClass(size === 12?'no-padding':'');
            angular.forEach(cols, (col, i) => content.append(col.render(i)));
            element.html(content);
            return element;
        },
        changeColsTo: num => {
            cols.length = 0;
            for(let i = 0;i < num;i++) {
                const column = new Column(12/num);
                this.addColumn(column);
            }
            content.empty();
            this.render();
        },
        toJSON: () => {
            let obj = $.extend({}, this);
            obj.cols = cols;
            obj.size = size;
            return obj;
        }
    });


    if(colNum) {
        for(let i = 0;i < colNum;i++) {
            const column = new Column(12/colNum);
            this.addColumn(column);
        }
    }

    element.on({
        'click': e => {
            if($(e.target).parents().addBack().is('.report-widget')) {
                return;
            }
            const sidemenu = this.$designer.sidemenu;
            sidemenu.changeTab(2, 'app/reports/views/row-props.tpl.html');
            this.$designer.select(this);
        },
        'mouseover': e => {
            if($(e.target).parents().addBack().is('.report-widget')) {
                content.removeClass('hover-intent');
            } else {
                content.addClass('hover-intent');
            }
        }
    });

    content.hover(() => {
        content.addClass('hover-intent');
    }, () => {
        content.removeClass('hover-intent');
    });
}