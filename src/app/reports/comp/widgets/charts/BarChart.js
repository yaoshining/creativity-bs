/**
 * Created by yaoshining on 16/8/25.
 */
import Chart, {ChartType} from './Chart';

export class BarChart extends Chart {

    static get name() {
        return 'barchart';
    }

    constructor() {
        super();
        this.type = ChartType.BAR;
        this.name = BarChart.name;
        this.title = '柱状图';
    }

}
