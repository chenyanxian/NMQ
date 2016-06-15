/**
 * Created by mac on 16/6/15.
 */

angular.module('app')
    .controller('dictionaryCtrl', function ($http,$scope,enume,$state) {

        $scope.showAddCate = false;
        $scope.showCateEvent = function(){
            $scope.showAddCate = true;
        }
        $scope.showAddChild = false;
        $scope.showChildEvent = function(){
            $scope.showAddChild = true;
        }

        $scope.cates = [];
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
                    $scope.cates.push({name:tmp[i].name,code:tmp[i].code});
                }
            }
        })

        $scope.addCate = function(){
            $http.get("/cmsapi/dictionary/add?code="+$scope.cateCode+"&parentCode=&name="+$scope.cateName).success(function(d){
                if(d.status.code == "1"){
                    $scope.cates.push({name:$scope.cateName,code:$scope.cateCode});
                }
            })
            $scope.cates.push({name:$scope.cateName,code:$scope.cateCode});
        }

        $scope.addChild = function(){
            $http.get("/cmsapi/dictionary/add?code="+$scope.childName+"&parentCode="+$scope.selectCate+"&name="+$scope.childCode).success(function(d){
                if(d.status.code == "1"){
                    $scope.children.push({name:$scope.childName,code:$scope.childCode});
                }
            })
            $scope.children.push({name:$scope.childName,code:$scope.childCode});
        }

        $scope.searchCate = function(){
             $http.get("/cmsapi/dictionary/queryByParentCode?parentCode="+$scope.searchSelectCate).success(function(d){
                 if(d.status.code == "1"){
                     var tmp = d.data;
                     for(var i=0;i<tmp.length;i++){
                         $scope.children.push({name:tmp[i].name,code:tmp[i].code});
                     }
                 }
             })
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
            $http.get("/cmsapi/dictionary/update?id="+currentItem.id+"&code="+$scope.editChildCode+"&parentCode="+currentItem.parentCode+"&name="+$scope.editChildName).success(function(d){
                if(d.status.code == "1"){
                    alert("修改成功!");
                    $scope.showEditChild = false;

                    currentItem.name = $scope.editChildName;
                    currentItem.code = $scope.editChildCode;
                }
            })
        }
    });