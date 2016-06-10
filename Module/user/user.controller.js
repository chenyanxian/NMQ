angular.module('app')
    .controller('userManagementCtrl', function ($http,$rootScope,$scope,$stateParams,$state) {

    })
    .controller('classManagementCtrl',function($http,$rootScope,$scope,$stateParams,$state,core){

        core.setUser({name:"Damon",key:"abcd-1234",tag:"aaa"});

    })
    .controller('createUserCtrl',function($http,$rootScope,$scope,$stateParams,$state){

    })
    .controller('stuManagement',function($http,$rootScope,$scope,$stateParams,$state){

    });
