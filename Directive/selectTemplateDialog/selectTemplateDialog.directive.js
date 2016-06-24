/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("selectTemplate",function(){
    return {
        templateUrl:"./Directive/selectTemplateDialog/selectTemplateDialog.html",
        restrict:"EA",
        scope:{
            "chooseCallback":"="
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

            $scope.templateList = [
                {ck:false,templateType:11,category:"aa",name:"aaa",remark:"aaa",createTime:"aaaa"},
                {ck:false,templateType:11,category:"aa",name:"aaa",remark:"aaa",createTime:"aaaa"},
                {ck:false,templateType:11,category:"aa",name:"aaa",remark:"aaa",createTime:"aaaa"},
                {ck:false,templateType:11,category:"aa",name:"aaa",remark:"aaa",createTime:"aaaa"},
                {ck:false,templateType:11,category:"aa",name:"aaa",remark:"aaa",createTime:"aaaa"}
            ];

            //查询模板
            $scope.templateListSearch = function(){
                $scope.$broadcast("searchByFilter");
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

            $scope.getTemplates = function(){
                var d = $scope.templateList;

                var res = [];
                for(var i=0;i< d.length;i++){
                    if(d[i].ck){
                        res.push(d[i]);
                    }
                }

                $scope.chooseCallback(res);
            }
        }
    }
})