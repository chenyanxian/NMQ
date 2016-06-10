/**
 * Created by wupeng5 on 2016/3/5.
 */

angular.module("app").directive("navigation",function(){
    return {
        templateUrl:"./Directive/navigation/navigation.html",
        restrict:"EA",
        scope:{
            "index":"="
        },
        link:function(){},
        controller:function($scope,$http,cooke,$state){
            var u = cooke.getUser();

            if(u){
                $scope.uname = u.name;
                $scope.role = u.role;
            }

            $scope.logout = function(){
                cooke.clearCacheData();
                $state.go("login");
            }
        }
    }
})