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
            reportTypeSeqId: 1,
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

    function getReportList(groupId) {
        let deferred = $q.defer();
        const url = API.getReportList;
        $http.get(url, {
            params: {
                typeSeqId: groupId
            }
        }).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    function getGroupList() {
        let deferred = $q.defer();
        const url = API.getReportGroupList;
        $http.get(url).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    return {save, getReportList, getGroupList};

}