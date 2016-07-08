/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("proList",function(){
    return {
        templateUrl:"./Directive/proList/proList.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"=",
            "showAddBtn":"=",
            "showCk":"="
        },
        link:function(){},
        controller:function($http,$scope,enume,$state){
            $scope.proCate = "jf";
            $scope.jfs = [];
            $scope.jfNum = "";

            $scope.syjsbbh = "";
            $scope.kcxls = [];
            $scope.kcxlsNum = "";

            $scope.proList = [];

            $scope.seachPros = function(){
                $scope.$broadcast("searchByFilter");
            }

            $scope.createPro = function(){
                $state.go("roomManage.createProduct",{entity:{tag:"add"}});
            }

            $scope.getUrl = function(){
                return "/cmsapi/course/query?cate="+$scope.proCate+"&syjsbbh="+$scope.syjsbbh + "&jfNum="+$scope.jfNum + "&kcxlsNum="+$scope.kcxlsNum;
            }

            $scope.directiveCallBack = function(valueFromDirective){
                $scope.proList = valueFromDirective;
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

            $scope.$on("getCkPros",function(e,d){
                var d = $scope.proList;
                var res = [];
                for(var i=0;i< d.length;i++){
                    if(d[i].ck){
                        res.push(d[i]);
                    }
                }
                //res = [{id:"aaaaaa",name:"2"},{id:"bbbbb",name:"2"}];
                $scope.chooseCallback(res);
            })
        }
    }
})