/**
 * Created by yaoshining on 2016/11/7.
 */
export function renderChart(elem, widget, $http) {
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

        // if(matchMedia) {
        //
        //     matchMedia('screen').addListener(() => {
        //         chart.resize();
        //     });
        //
        //     matchMedia('print').addListener(() => {
        //         chart.resize();
        //     });
        // }

    });
}
