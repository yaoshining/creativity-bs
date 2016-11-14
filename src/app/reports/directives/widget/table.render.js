/**
 * Created by yaoshining on 2016/11/7.
 */
export function renderTable(scope, elem, $compile, widget, $http) {
    let tableTitle = $('<div>').addClass('report-widget-title').text(widget.config.title);
    let ebpTable = $('<div>', {
        'ebp-table': '$tableView.ebpTable',
        'settings': '$tableView.widgetSettings',
        'ng-model': '$tableView.tableData'
    });

    let widgetSettings = {
        "colDefs": getColDefs(widget)
    };

    scope.$tableView = {
        tableData: [],
        ebpTable: {},
        widgetSettings
    };

    // const url = '/pms/project/report/getReportData';
    let url = '/data/reports/table/1.json'; // In cording to widget.report.dataSource object, get the data source url.;
    $http.get(url, {
        params: {
            dataSrcId: 1,
            widgetId: '4ac50dd7-a273-31fd-b16a-8f86d449ba2c'
        }
    }).then(res => {
        scope.$tableView.tableData = res.data;
        elem.append(tableTitle);
        elem.append($compile(ebpTable)(scope));
    });

    function getColDefs(widget) {
        let cols = [], config = widget.config;
        let {displayFields} = config;
        displayFields.forEach(field => {
            let col = {
                name: field.dataSrcItemName,
                title: field.dataSrcItemLabel,
                type: 'field',
                dataType: 'string'
            };
            cols.push(col);
        });
        return {cols};
    }
}