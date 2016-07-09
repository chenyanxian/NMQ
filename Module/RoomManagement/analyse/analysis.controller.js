angular.module('app')
    .controller('evaluateListCtl', function ($http,$scope,enume,$state) {})

    .controller('evaluateDetailCtl',function($http,$scope,enume,$state,$stateParams){
        $scope.entity = {id:$stateParams.id};
    })

    .controller('statisticsListCtl',function($http,$scope,enume,$state){})

    .controller('statisticsDetail',function($http,$scope,enume,$state,$stateParams){
        $scope.entity = {id:$stateParams.id};
    })