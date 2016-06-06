'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                params:{entity:{}},
                cache:false,
                templateUrl: "./Module/login/login.html",
                controller: 'loginCtrl'
            })
    });
