/**
 * Created by yaoshining on 2016/11/7.
 */
export function renderChart(scope, elem, widget, reportWidgetService) {
    'ngInject';

    let report = scope.report;

    console.log(report);

    let params = {
        dataSrcId: report.seqId,
        widgetId: widget.id,
    };

    function fetchChartData(filterParams) {
        if(!angular.isObject(filterParams)) {
            filterParams = {};
        }

        params.filterParams = filterParams;

        reportWidgetService.getChartData(params).then(result => {
            const data = result.data;
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
                    data: data.map(item => item.name),
                    bottom: 0
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

        });
    }

    fetchChartData();

    scope.$on('ebp.report.refresh', (event, args) => {
        console.log('chart.refreshing');
        fetchChartData(args.filterParams);
    });

}
