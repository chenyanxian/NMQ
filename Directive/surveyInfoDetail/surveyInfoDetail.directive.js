/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("surveyInfoDetail",function(){
    return {
        templateUrl:"./Directive/surveyInfoDetail/surveyInfoDetail.html",
        restrict:"EA",
        scope:{
            "entity":"="
        },
        link:function(){},
        controller:function($http,$scope,enume,$state){

            var id = $scope.entity.id;

            if(!id){
                alert("参数错误!");
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
            enume.getData("/cmsapi/template/resultInfo?code="+id,function(d){
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
        }
    }
})