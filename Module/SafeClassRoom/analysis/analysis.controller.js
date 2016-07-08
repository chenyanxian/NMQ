angular.module('app')
    .controller('surveyAnalysisListCtrl', function ($http,$scope,enume,$state) {})
    .controller('surveyInfoListCtrl',function($http,$scope,enume,$state){})
    .controller('surveyAnalysisDetailCtrl',function($http,$scope,enume,$state,$stateParams){

        $scope.id = $stateParams.id;
        if(!$stateParams.id){
            $state.go("safeRoom.surveyAnalysisList");
            return;
        }

        $scope.data = null;
        enume.getData("/cmsapi/template/statistics?code="+$scope.id,function(d){
            if(d.templateType == "kaoti"){
                $scope.scoresShow = true;
            }else{
                $scope.scoresShow = false;
            }
            $scope.data = d;
            $scope.items = dealData();
        })

        function getTotal(items){
            var t = 0;
            for(var i=0;i<items.length;i++){
                t += items[i].pcount;
            }
            return t;
        }

        $scope.getBz =function(bz){
            if(bz){
                return "(标准答案)";
            }else{
                return "";
            }
        }

        function dealData(){
            var res = [];
            var d = $scope.data.data;
            for(var i=0;i< d.length;i++){
                var tmp = d[i].tms;
                for(var k=0;k<tmp.length;k++){
                    res.push({scores:tmp[k].scores,name:tmp[k].name,sort:tmp[k].sort,children:tmp[k].items,total:getTotal(tmp[k].items)});
                }
            }
            return res;
        }
    })
    .controller('surveyInfoDetailCtrl',function($http,$scope,$state,enume,$stateParams){

        $scope.id = $stateParams.id;
        if(!$stateParams.id){
            $state.go("safeRoom.surveyInfoList");
            return;
        }

        $scope.data = null;

        function getHeadInfo(data){
            var d = data.data;

            var colSpans = [];
            var wtTitles = [];
            for(var i=0;i< d.length;i++){

                var tmp = {name:d[i].title,colspan:0};

                var count = 0;

                var tms = d[i].tms;
                for(var k=0;k<tms.length;k++){
                    if(tms[k].cate == "textbox"){
                        var items = tms[k].items;
                        for(var u=0;u<items.length;u++){
                            count++;
                            tmp.colspan++;
                            wtTitles.push({sort:count,name:items[u].name});
                        }
                    }else{
                        count++;
                        wtTitles.push({sort:count,name:tms[k].name});
                        tmp.colspan++;
                    }
                }
                colSpans.push(tmp);
            }
            return {cols:colSpans,wtTitles:wtTitles};
        }


        $scope.scoresShow = false;
        $scope.details = [];
        $scope.wentis = []

        function getAllWentis(data){

            var tmpRes = {wentis:[],res:[]};

            for(var i=0;i< data.length;i++){
                var tms = data[i].tms;
                for(var k=0;k<tms.length;k++){
                    if(tms[k].cate == "textbox"){
                        var items = tms[k].items;
                        for(var u=0;u<items.length;u++){
                            tmpRes.wentis.push(items[u]);
                        }
                    }else{
                        tmpRes.wentis.push(tms[k]);
                    }
                }
            }

            var len = tmpRes.wentis[0].value.split('-').length;
            //scores
            for(var i=0;i<len;i++){
                var tmp = {children:[]};
                for(var k=0;k<tmpRes.wentis.length;k++){
                    tmp.children.push({name:tmpRes.wentis[k].value.split('-')[i]});
                }
                tmpRes.res.push(tmp);
            }

            return tmpRes;
        }
        enume.getData("/cmsapi/template/resultInfo?code="+$scope.id,function(d){
            if(d.templateType == "kaoti"){
                $scope.scoresShow = true;
            }else{
                $scope.scoresShow = false;
            }

            $scope.data = d;
            var tmp = getHeadInfo($scope.data);
            $scope.colSpan = tmp.cols;
            $scope.wtTitles = tmp.wtTitles;
            var res = getAllWentis(d.data);

            $scope.details = res.res;
            $scope.wentis = res.wentis;
        })
        //
        //var res = getAllWentis($scope.data.data);
        //$scope.details = res.res;
        //$scope.wentis = res.wentis;
    })
    .controller('lessonsListCtrl', function ($http,$scope,enume,$state) {

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