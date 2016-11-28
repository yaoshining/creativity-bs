/**
 * Created by yaoshining on 16/8/25.
 */
import Widget from '../Widget';

class Chart extends Widget {
    constructor() {
        super();
        this.category = 'chart';
        this.type = null;
        this.title = '图表';
        this.config = {
            title: '未命名图表',
            dataSource: {
                url: '',
                params: []
            },
            displayFields: []
        };
    }

    render() {
        super.render();
        this.element.on('click', clickHandler.bind(this));
        return this.element;
    }
}

function clickHandler() {
    const sidemenu = this.$designer.sidemenu;
    sidemenu.changeTab(2, 'app/reports/views/charts-props.tpl.html');
    this.$designer.select(this);
}

export const ChartType = {
    BAR: 'bar',
    LINE: 'line',
    PIE: 'pie'
};

export default Chart;