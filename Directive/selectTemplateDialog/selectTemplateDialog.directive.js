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

            $scope.templateList = [];

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

            $scope.getRemark = function(item){
                return jsCoreMethod.cutString(item.remark,5);
            }

            $scope.getSelectedPros = function(){
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