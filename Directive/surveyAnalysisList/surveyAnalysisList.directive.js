/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("surveyAnalysisList",function(){
    return {
        templateUrl:"./Directive/surveyAnalysisList/surveyAnalysisList.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"=",
            "showCk":"="
        },
        link:function(){},
        controller:function($http,$scope,enume,$state){

            //初始化下拉框数据
            $scope.kcxl = enume.kcxl;
            $scope.kcxlNum = "";

            $scope.kczt = enume.kczt;
            $scope.kcztNum = "";

            $scope.xn = enume.xn;
            $scope.xnNum = "";

            $scope.nj=enume.nj;
            $scope.njNum ="";

            $scope.bj = enume.bj;
            $scope.bjNum = "";

            $scope.skbh = enume.skbh;
            $scope.skbhNum = "";

            $scope.templateList = [];

            $scope.getRemark = function(item){
                return jsCoreMethod.cutString(item.remark,5);
            }

            //查询模板
            $scope.templateListSearch = function(){
                $scope.$broadcast("searchByFilter");
            }

            $scope.getUrl = function(){
                return "/cmsapi/template/query?category=&type=&name=&begin=&end=";
            }

            $scope.directiveCallBack = function(valueFromDirective){
                $scope.templateList = valueFromDirective;
            }

            $scope.goDetail = function(item){
                $state.go("safeRoom.surveyAnalysisDetail",{id:item.code});
            }
        }
    }
})