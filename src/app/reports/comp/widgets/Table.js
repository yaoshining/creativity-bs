/**
 * Created by yaoshining on 16/8/25.
 */
import Widget from './Widget';

export class Table extends Widget {

    static get name() {
        return 'table';
    }

    constructor() {
        super();
        this.category = 'table';
        this.name = Table.name;
        this.title = '表格';
    }

}