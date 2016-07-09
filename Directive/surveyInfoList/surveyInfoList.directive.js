/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("surveyInfoList",function(){
    return {
        templateUrl:"./Directive/surveyInfoList/surveyInfoList.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"=",
            "showCk":"="
        },
        link:function(){},
        controller:function($http,$scope,enume,$state){
            //初始化下拉框数据
            $scope.xn = enume.xn;
            $scope.xnNum = "";

            $scope.nj=enume.nj;
            $scope.njNum ="";

            $scope.bj = enume.bj;
            $scope.bjNum = "";

            $scope.templateList = [];

            //查询模板
            $scope.templateListSearch = function(){
                $scope.$broadcast("searchByFilter");
            }

            $scope.getRemark = function(item){
                return jsCoreMethod.cutString(item.remark,5);
            }

            $scope.getUrl = function(){
                return "/cmsapi/template/query?category=&type=&name=&begin=&end=";
            }

            $scope.directiveCallBack = function(valueFromDirective){
                $scope.templateList = valueFromDirective;
            }

            $scope.goDetail = function(item){
                $state.go("safeRoom.surveyInfoDetail",{id:item.code});
            }
        }
    }
})