/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("classList",function(){
    return {
        templateUrl:"./Directive/classList/classList.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"=",
            "showClassBtn":"=",
            "showCk":"="
        },
        link:function(){},
        controller:function($scope,$http,$rootScope,$state){

            $scope.schoolName = "";
            $scope.beginDate = "";
            $scope.endDate = "";

            $scope.roomList = [];

            $scope.searchRoom = function(){
                $scope.$broadcast("searchByFilter");
            }

            $scope.createRoom = function(){
                $state.go("roomManage.register",{entity:{tag:"add"}});
            }

            $scope.getUrl = function(){
                return "/cmsapi/tclassRegister/query?name="+$scope.schoolName+"&begin="+$scope.beginDate + "&end="+$scope.endDate;
            }

            $scope.directiveCallBack = function(valueFromDirective){
                $scope.roomList = valueFromDirective;
            }

            $scope.editRoom = function(item){
                $state.go("roomManage.register",{entity:{tag:"edit",lineid:item.lineid}});
            }

            $scope.deleteRoom = function(item){
                enume.getData("xxxxx",function(d){
                    $scope.roomList = $scope.roomList.deleteByKey("id",item.lineid);
                })
            }

            $scope.goDetail = function(item){
                $state.go("roomManage.register",{entity:{tag:"detail",lineid:item.lineid}});
            }

            $scope.getRemark = function(item){
                return jsCoreMethod.cutString(item.remark,5);
            }

            $scope.$on("getCkClass",function(e,d){
                var d = $scope.roomList;
                var res = [];
                for(var i=0;i< d.length;i++){
                    if(d[i].ck){
                        res.push(d[i]);
                    }
                }
                //res = [{id:"aaaaaa",name:"2222222"}];
                $scope.chooseCallback(res);
            })

        }
    }
})