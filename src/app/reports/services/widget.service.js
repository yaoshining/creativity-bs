
import API from '../API';

export function WidgetServiceFactory($http, $q) {

    function getTableData(params) {

        let deferred = $q.defer();

        let url = API.getTableData;
        $http.get(url, {params}).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });

        return deferred.promise;
    }

    function getChartData(params) {

        let deferred = $q.defer();

        let url = API.getChartData;
        $http.get(url, {params}).then(res => {
            deferred.resolve(res.data);
        }, res => {
            deferred.reject(res);
        });

        return deferred.promise;
    }

    return {getTableData, getChartData};

}