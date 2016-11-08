/**
 * Created by yaoshining on 2016/11/1.
 */
export function ReportDatasourceFactory($http, $q) {

    function getFields() {
        let deferred = $q.defer();
        const url = '/data/reports/datasource/1.json';
        $http.get(url).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });
        return deferred.promise;
    }

    return {getFields};

}