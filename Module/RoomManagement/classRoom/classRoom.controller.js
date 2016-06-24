/**
 * Created by mac on 16/6/17.
 */

'use strict';

angular.module('app')
    .controller('createProductCtl',function ($http,$scope,enume,cooke,$state) {
        $scope.showDialog = false;

        $scope.tmpCode1 = "";
        $scope.tmpCode2 = "";
        $scope.tmpCode3 = "";
        $scope.tmpCode4 = "";

        var openTag = 0;

        $scope.getChooseTmps = function(dataFromDirective){
            if(openTag == 1){
                $scope.tmpCode1 = dataFromDirective;
            }
            if(openTag == 2){
                $scope.tmpCode2 = dataFromDirective;
            }
            if(openTag == 3){
                $scope.tmpCode3 = dataFromDirective;
            }
            if(openTag == 4){
                $scope.tmpCode4 = dataFromDirective;
            }
            $scope.showDialog = false;
        }

        $scope.showTmpDialog1 = function(){
            $scope.showDialog = true;
            openTag = 1;
        }
        $scope.showTmpDialog2 = function(){
            $scope.showDialog = true;
            openTag = 2;
        }
        $scope.showTmpDialog3 = function(){
            $scope.showDialog = true;
            openTag = 3;
        }
        $scope.showTmpDialog4 = function(){
            $scope.showDialog = true;
            openTag = 4;
        }
    })