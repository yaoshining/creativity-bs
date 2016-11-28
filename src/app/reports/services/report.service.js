/**
 * Created by yaoshining on 2016/11/11.
 */
import API from '../API';

export function ReportServiceFactory($http, $q) {

    function save(report) {
        let deferred = $q.defer();
        const url = API.saveReportDef;
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