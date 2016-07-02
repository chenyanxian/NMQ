
var app = angular.module("app",[
    'ui.router'
])
    .config(function($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
        $urlRouterProvider.otherwise('/safeRoom/templateList');


        //$locationProvider.html5Mode(true);

        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

        ///**
        // * The workhorse; converts an object to x-www-form-urlencoded serialization.
        // * @param {Object} obj
        // * @return {String}
        // */
        //var param = function(obj) {
        //    var query = '';
        //    var name, value, fullSubName, subName, subValue, innerObj, i;
        //
        //    for (name in obj) {
        //        value = obj[name];
        //        if(name != "clone" && name != "equals"){
        //            if (value instanceof Array) {
        //                for (i = 0; i < value.length; ++i) {
        //                    subValue = value[i];
        //                    fullSubName = name + '[' + i + ']';
        //                    innerObj = {};
        //                    innerObj[fullSubName] = subValue;
        //                    query += param(innerObj) + '&';
        //                }
        //            } else if (value instanceof Object) {
        //                for (subName in value) {
        //                    if(subName != "clone" && subName != "equals"){
        //                        subValue = value[subName];
        //                        fullSubName = name + '[' + subName + ']';
        //                        innerObj = {};
        //                        innerObj[fullSubName] = subValue;
        //                        query += param(innerObj) + '&';
        //                    }
        //                }
        //            } else if (value !== undefined && value !== null && name.indexOf('hashKey') == -1) {
        //                query += encodeURIComponent(name) + '='
        //                    + encodeURIComponent(value) + '&';
        //            }
        //        }
        //    }
        //
        //    return query.length ? query.substr(0, query.length - 1) : query;
        //};
        //
        //$httpProvider.defaults.transformRequest = [function(data) {
        //    return angular.isObject(data) && String(data) !== '[object File]'
        //        ? param(data)
        //        : data;
        //}];

        //配合nginx处理本地开发, 服务器调式的问题(接口是跨域的)
        //$httpProvider.interceptors.push(function($q){
        //    return {
        //        'request':function(config){
        //            if(config.url.indexOf('html') == -1){
        //                config.url = "" + config.url;
        //            }
        //            return config || $q.when(config);
        //        }
        //    }
        //})
    })


app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, current, previous) {
        if(current.name == "login"){
            $rootScope.rootShow = false;
        }else{
            $rootScope.rootShow = true;
        }
    });
}]);