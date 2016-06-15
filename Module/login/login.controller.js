'use strict';

angular.module('app')
    .controller('loginCtrl', function ($http,$scope,$state,cooke) {

        $scope.error = false;
        $scope.errorMsg = "";

        $scope.name = "";
        $scope.pwd = "";

        $scope.login = function(){

            if($scope.name == "" || $scope.pwd == ""){
                $scope.error = true;
                $scope.errorMsg = "请输入账号密码";
                return;
            }

            var u = {name:$scope.name,pwd:$scope.pwd};
            $http.post("data.json",u).success(function(d){

                $scope.error = false;
                cooke.setUser({name:d.user.uname,role:d.user.role});
                $state.go("template.templateList");
            })
        }

    });

