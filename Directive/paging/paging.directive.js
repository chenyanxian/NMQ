/**
 * Created by wupeng5 on 2016/3/5.
 */


angular.module("app").directive("paging",function(){
    return {
        templateUrl:"./Directive/paging/paging.html",
        restrict:"EA",
        scope:{
            "callbackFn":"=",
            "getUrl":"="
        },
        link:function(){},
        controller:function($scope,$http,$rootScope){

            var index = 1;
            var size = 10;

            $scope.totalProCount = 0;
            $scope.allPages = 0;
            $scope.currentIndex = 0;
            $scope.enterIndex = "1";

            function dealUrl(){
                return $scope.getUrl() + "&curPage="+index+"&pageSize="+size+"&ran="+Math.random();
            }

            function getData(){
                $http.get(dealUrl()).success(function(d){

                    if(d.errorCode != "0"){
                        alert(d.errors[0]);
                        return;
                    }
                    for(var i=0;i< d.datas.length;i++){
                        d.datas[i].ck = false;
                        d.datas[i].trCls = "";
                    }

                    $scope.allPages = d.pageTotalNum;
                    $scope.totalProCount = d.totalCount;
                    $scope.currentIndex = index;

                    $scope.callbackFn(d.datas);
                })
            }

            $scope.$on("searchByFilter",function(event,data){
                index = 1;

                getData();

            })

            $scope.enterValueSearch = function(){
                var val  = parseInt($scope.enterIndex);
                if(isNaN(val) || val > parseInt($scope.allPages) || val <1 ){
                    alert("请输入小于总页数的正整数!");
                    return;
                }
                index = val;

                getData();

            }

            $scope.prev = function(){
                if(index == 1){
                    return;
                }
                index--;

                getData();

            }

            $scope.next = function(){
                if(index == parseInt($scope.allPages)){
                    return;
                }
                index++;

                getData();

            }


            getData();

        }
    }
})