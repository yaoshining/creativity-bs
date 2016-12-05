/**
 * Created by yaoshining on 2016/11/7.
 */
export function renderTable(scope, elem, $compile, widget, reportWidgetService) {
    let tableTitle = $('<div>').addClass('report-widget-title').text(widget.config.title);
    let ebpTable = $('<div>', {
        'ebp-table': '$tableView.ebpTable',
        'settings': '$tableView.widgetSettings',
        'ng-model': '$tableView.tableData'
    });

    let widgetSettings = {
        "colDefs": getColDefs(widget)
    };

    let report = scope.report;

    scope.$tableView = {
        tableData: [],
        ebpTable: {},
        widgetSettings
    };

    let params = {
        dataSrcId: report.seqId,
        widgetId: widget.id,
    };

    function fetchTableData(filterParams) {
        if(!angular.isObject(filterParams)) {
            filterParams = {};
        }

        params.filterParams = filterParams;

        reportWidgetService.getTableData(params).then(data => {
            if($.isPlainObject(scope.$tableView.ebpTable)) {
                scope.$tableView.tableData = data;
                elem.empty().append(tableTitle);
                elem.empty().append($compile(ebpTable)(scope));
            } else {
                scope.$tableView.tableData = data;
            }
        });

    }

    fetchTableData();

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

    scope.$on('ebp.report.refresh', (event, args) => {
        fetchTableData(args.filterParams);
    });
}