/**
 * Created by yaoshining on 2016/11/22.
 */
const API = {
    getTableData: '/pms/project/report/getReportData',
    getChartData: '/pms/project/report/getReportData',
    getAllDataSource: '/plt/dataSource/getAllDataSrcSource',
    getFieldsByDataSource: '/plt/dataSource/queryItem',
    saveReportDef: '/plt/reportTpl/addReportTpl',
    getProjectTypes: '/pms/resources/codeitemtree/getTree?t=1479793526596&bizType=PRJTYPE',
    getDepartments: '/plt/formtpl/getOrgList'
};

const testAPI = {
    getTableData: '/data/reports/table/1.json',
    getChartData: '/data/reports/salesVolumn.json',
    getAllDataSource: '/data/reports/datasource/all.json',
    getFieldsByDataSource: '/data/reports/datasource/1.json',
    saveReportDef: '/plt/reportTpl/addReportTpl',
    getProjectTypes: '/data/reports/project/types.json',
    getDepartments: '/data/reports/department/all.json'
};

export default API;