/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("templateList",function(){
    return {
        templateUrl:"./Directive/templateList/templateList.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"=",
            "showAddBtn":"=",
            "showCk":"="
        },
        link:function(){},
        controller:function($http,$scope,enume,cooke,$state){

            //初始化下拉框数据  模板分类,模板类型
            $scope.templateCates =  enume.templateCate;
            $scope.templateTypes = enume.templateType;
            $scope.selectCate = "";
            $scope.selectType = "";
            $scope.templateName = "";
            $scope.beginDate = "";
            $scope.endDate = "";

            $scope.templateList = [];

            //查询模板
            $scope.templateListSearch = function(){
                $scope.$broadcast("searchByFilter");
            }

            $scope.createTemplate = function(){
                $state.go("safeRoom.templateCreate",{entity:{tag:"add"}});
            }

            $scope.getUrl = function(){
                return "/cmsapi/template/query?category="+$scope.selectCate+"&type="+$scope.selectType + "&name="+$scope.templateName+"&begin="+$scope.beginDate + "&end="+$scope.endDate;
            }

            $scope.directiveCallBack = function(valueFromDirective){
                $scope.templateList = valueFromDirective;
            }

            $scope.editTemplate = function(item){
                $state.go("safeRoom.templateCreate",{entity:{tag:"edit",code:item.code}});
            }

            $scope.deleteTemplate = function(item){
                $http.get("/cmsapi/template/delete/"+item.id).success(function(d){
                    if(d.status.code == "1"){
                        $scope.templateList = $scope.templateList.deleteByKey("id",item.id);
                    }else{
                        alert(d.status.message);
                    }
                })
            }

            $scope.preView = function (item) {
                window.open("out.html?code="+item.code,"_blank","height=800,width=500");
            }

            $scope.goDetail = function(item){
                $state.go("safeRoom.templateCreate",{entity:{tag:"detail",code:item.code}});
            }

            $scope.getRemark = function(item){
                return jsCoreMethod.cutString(item.remark,5);
            }

            $scope.$on("getCkTemplates",function(e,d){
                var d = $scope.templateList;

                var res = [];
                for(var i=0;i< d.length;i++){
                    if(d[i].ck){
                        res.push(d[i]);
                    }
                }
                $scope.chooseCallback(res);
            })
        }
    }
})