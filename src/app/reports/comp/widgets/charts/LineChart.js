/**
 * Created by yaoshining on 16/8/25.
 */
import Chart, {ChartType} from './Chart';

export class LineChart extends Chart {

    static get name() {
        return 'linechart';
    }

    constructor() {
        super();
        this.type = ChartType.LINE;
        this.name = LineChart.name;
        this.title = '线图';
    }


}