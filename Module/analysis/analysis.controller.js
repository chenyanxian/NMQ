angular.module('app')
    .controller('surveyAnalysisCtrl', function ($http,$rootScope,$scope,enume,$state) {
        $scope.templateCates =  enume.templateCate;
        $scope.templateTypes = enume.templateType;
        $scope.selectCate = "";
        $scope.selectType = "";
        $scope.templateName = "";
    })
    .controller('surveyDetailCtrl',function($http,$rootScope,$scope,enume,$state){

    })
  ;
