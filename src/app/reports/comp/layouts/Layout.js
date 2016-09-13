/**
 * Created by yaoshining on 16/8/12.
 */

function generateContainer() {
    const container = $('<div>').addClass('report-bloc');
    return container;
}

class Layout {

    constructor(bloc) {
        this.container = generateContainer();
        this.rows = [];
        Object.defineProperties(this, {
            bloc: {
                get: () => bloc
            }
        });
    }

    render() {
        return this.container;
    }

    addRow(row) {
        Object.defineProperties(row, {
            layout: {
                get: () => this
            },
            $designer: {
                get: () => this.bloc.report.$designer
            }
        });
        this.rows.push(row);
    }

    toJSON() {
        let obj = $.extend({}, this);
        delete obj.container;
        return obj;
    }
}

export default Layout;