/**
 * Created by yaoshining on 16/8/12.
 */
import Layout from './Layout';
import Row from './Row';
import Column from './Column';


export class OneToTwo extends Layout {
    static get thumbnail() {
        return $(`
            <div class="layout-thumbnail">
                <div class="col-4"></div>
                <div class="col-8"></div>
            </div>
        `);
    }

    constructor(bloc) {
        super(bloc);
        let row = new Row(12);
        row.addColumn(new Column(4));
        row.addColumn(new Column(8));
        this.addRow(row);
    }

    render() {
        angular.forEach(this.rows, row => {
            this.container.append(row.render());
        });
        return this.container;
    }
}