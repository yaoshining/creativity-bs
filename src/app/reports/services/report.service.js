/**
 * Created by yaoshining on 2016/11/11.
 */
export function ReportServiceFactory($http, $q) {

    function save(report) {
        let deferred = $q.defer();
        const url = '/plt/reportTpl/addReportTpl';
        // const url = '/data/reports/datasource/all.json';
        $http.post(url, {
            reportName: report.title,
            reportTypeSeqId: 123,
            remark: "备注",
            reportDef: JSON.stringify(report)
        }).then(res => {
            report.seqId = res.data.rtData.seqId;
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    return {save};

}