/**
 * Created by mac on 16/6/15.
 */

angular.module('app')
    .controller('dictionaryCtrl', function ($http,$scope) {

        $scope.showAddCate = false;
        $scope.showCateEvent = function(){
            $scope.showAddCate = true;
        }
        $scope.showAddChild = false;
        $scope.showChildEvent = function(){
            $scope.showAddChild = true;
        }

        $scope.cates = [{name:"请选择",code:""}];
        $scope.searchSelectCate = "";
        $scope.children = [];
        $scope.selectCate = "";

        $scope.cateName = "";
        $scope.cateCode = "";
        $scope.childName = "";
        $scope.childCode = "";
        $scope.showEditChild = false;

        $http.get("/cmsapi/dictionary/queryRoot?code=&name=&pageIndex=1&pageSize=10").success(function(d){
            if(d.status.code == "1"){
                var tmp = d.data;
                for(var i=0;i<tmp.length;i++){
                    $scope.cates.push(tmp[i]);
                }
            }else{
                alert(d.status.message);
            }
        })

        $scope.addCate = function(){
            $http.get("/cmsapi/dictionary/add?code="+encodeURIComponent($scope.cateCode)+"&parentCode=&name="+encodeURIComponent($scope.cateName)).success(function(d){
                if(d.status.code == "1"){
                    $scope.cates.push(d.data);
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.addChild = function(){
            $http.get("/cmsapi/dictionary/add?code="+encodeURIComponent($scope.childCode)+"&parentCode="+$scope.selectCate+"&name="+encodeURIComponent($scope.childName)).success(function(d){
                if(d.status.code == "1"){
                    $scope.children.push(d.data);
                }else{
                    alert(d.status.message);
                }
            })
        }

        function queryChildByCate(cate){
            $scope.children.length = 0;
            $http.get("/cmsapi/dictionary/queryByParentCode?parentCode="+cate).success(function(d){
                if(d.status.code == "1"){
                    var tmp = d.data;
                    for(var i=0;i<tmp.length;i++){
                        $scope.children.push(tmp[i]);
                    }
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.searchChildren = function(){
            queryChildByCate($scope.searchSelectCate);
        }

        var currentItem = null;
        $scope.showEdit = function(item){
            $scope.showEditChild = true;
            currentItem = item;
            $scope.editChildName = item.name;
            $scope.editChildCode = item.code;
        }

        $scope.editChild = function(){
            var item = currentItem;
            $http.get("/cmsapi/dictionary/update?id="+currentItem.id+"&code="+encodeURIComponent($scope.editChildCode)+"&parentCode="+currentItem.parentCode+"&name="+encodeURIComponent($scope.editChildName)).success(function(d){
                if(d.status.code == "1"){
                    $scope.showEditChild = false;

                    currentItem.name = $scope.editChildName;
                    currentItem.code = $scope.editChildCode;

                    alert("修改成功!");
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.del = function(item){
            $http.get("/cmsapi/dictionary/delete/"+item.id).success(function(d){
                if(d.status.code == "1"){
                    alert("删除成功!");
                    $scope.children = $scope.children.deleteByKey("id",item.id);
                }else{
                    alert(d.status.message);
                }
            })
        }

        queryChildByCate($scope.searchSelectCate);
    });