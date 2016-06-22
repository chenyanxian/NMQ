/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("selectTemplate",function(){
    return {
        templateUrl:"./Directive/selectTemplate/selectTemplate.html",
        restrict:"EA",
        scope:{
            "callbackFn":"=",
            "getUrl":"="
        },
        link:function(){},
        controller:function($scope,$http,$rootScope){

        }
    }
})