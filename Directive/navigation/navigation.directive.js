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

            $scope.cls1 = "navbar_hover";
            $scope.cls2 = "";
            $scope.cls3 = "";

            $scope.c1 = function(){
                $scope.cls1 = "navbar_hover";
                $scope.cls2 = "";
                $scope.cls3 = "";
            }

            $scope.c2 = function(){
                $scope.cls1 = "";
                $scope.cls2 = "navbar_hover";
                $scope.cls3 = "";
            }

            $scope.c3 = function(){
                $scope.cls1 = "";
                $scope.cls2 = "";
                $scope.cls3 = "navbar_hover";
            }

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