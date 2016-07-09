/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("surveyAnalysisDetail",function(){
    return {
        templateUrl:"./Directive/surveyAnalysisDetail/surveyAnalysisDetail.html",
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
            enume.getData("/cmsapi/template/statistics?code="+id,function(d){
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
        }
    }
})