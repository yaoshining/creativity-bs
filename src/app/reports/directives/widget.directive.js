/**
 * Created by yaoshining on 16/8/24.
 */

function renderChart(elem, widget, $http) {
    'ngInject';
    $http.get('/data/reports/salesVolumn.json').then(res => {
        const result = res.data,
              data = result.data;
        elem.height(400);
        const chart = echarts.init(elem[0]),
            config = widget.config;
        let xAxis = [];
        if(data.length > 0) {
            xAxis = data[0].datapoints.map(point => point.x);
        }
        var options = {
            title: {
                text: config.title
            },
            tooltip: {},
            legend: {
                data: data.map(item => item.name)
            },
            toolbox: {
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            xAxis: {
                data: xAxis
            },
            yAxis: {},
            series: data.map(item => {
                return {
                    name: item.name,
                    type: widget.type,
                    data: item.datapoints.map(point => point.y)
                };
            })
        };

        chart.setOption(options);
        $(window).on('resize', () => {
            chart.resize();
        });

        if(matchMedia) {

            matchMedia('screen').addListener(() => {
                chart.resize();
            });

            matchMedia('print').addListener(() => {
                chart.resize();
            });
        }

    });
}


function ReportWidgetDirectiveFactory() {

    function linkFunc(scope, elem) {
        let widget = scope.widget;
        scope.$on('yaoFullscreen.afterRender', function() {
            if(widget.category === 'chart') {
                renderChart.$invoke(this, {scope, elem, widget});
            }
        });
    }


    let directive = {
        restrict: 'AE',
        link: linkFunc,
        scope: {
            widget: '=ctReportWidget'
        }
    };

    return directive;
}

class ReportWidgetController {

    constructor() {
    }

}

export default ReportWidgetDirectiveFactory;