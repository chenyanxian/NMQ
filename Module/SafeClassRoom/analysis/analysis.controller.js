angular.module('app')
    .controller('surveyAnalysisListCtrl', function ($http,$scope,enume,$state) {})
    .controller('surveyInfoListCtrl',function($http,$scope,enume,$state){})
    .controller('surveyAnalysisDetailCtrl',function($http,$scope,enume,$state,$stateParams){
        $scope.entity = {id:$stateParams.id};
    })
    .controller('surveyInfoDetailCtrl',function($http,$scope,$state,enume,$stateParams){
        $scope.entity = {id:$stateParams.id};
    })
    .controller('lessonsListCtrl', function ($http,$scope,enume,$state,$timeout) {

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

        $scope.bDate ="";
        $scope.eDate = "";

        $scope.downLink = "";
        $scope.btnCls = "btnGray";
        $scope.isDisabled = false;

        function downFile(){
            enume.getData("/cmsapi/teaching/log/download",function(d){
                $scope.btnCls = "btnGreen";
                $scope.downLink = d;
                $scope.isDisabled = true;
            })

            $timeout(function(){
                $scope.btnCls = "btnGreen";
                $scope.downLink = "http://www.baidu.com";
                $scope.isDisabled = true;
            },3000)
        }

        downFile();

        //查询模板
        $scope.templateListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.getUrl = function(){
            return "/cmsapi/teaching/log/query?kcxlmc=&kcztmc=&xn=&njmc=&bjmc=&=skbh=&begin="+$scope.bDate+"&end="+$scope.eDate;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.lessonsList = valueFromDirective;
        }

        $scope.search = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.goJsPingjia = function(code){
            $state.go("safeRoom.surveyInfoDetail",{id:code});
        }

        $scope.goXsPingjia = function(code){
            $state.go("safeRoom.surveyInfoDetail",{id:code});
        }
    })