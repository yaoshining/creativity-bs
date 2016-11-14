/**
 * Created by yaoshining on 2016/11/1.
 */
export function ReportDatasourceFactory($http, $q) {

    function getFields(srcId) {
        let deferred = $q.defer();
        // const url = '/plt/dataSource/queryItem';
        const url = '/data/reports/datasource/1.json';
        $http.get(url, {
            params: {
                dataSrcSeqId: srcId
            }
        }).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    function getDataSources() {
        let deferred = $q.defer();
        // const url = '/plt/dataSource/getAllDataSrcSource';
        const url = '/data/reports/datasource/all.json';
        $http.get(url).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    return {getFields, getDataSources};

}