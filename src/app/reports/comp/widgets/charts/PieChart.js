/**
 * Created by yaoshining on 16/8/25.
 */
import Chart, {ChartType} from './Chart';

export class PieChart extends Chart {

    static get name() {
        return 'piechart';
    }

    constructor() {
        super();
        this.type = ChartType.PIE;
        this.name = PieChart.name;
        this.title = '饼图';
    }
}