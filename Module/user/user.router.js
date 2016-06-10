/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('user',{
            url: '',
            abstract: true,
            templateUrl: "./Module/public/public.html"
        })
        .state('user.userManagement',{
            url:'/userManagement',
            templateUrl:'./Module/user/userManagement.html',
            controller:'userManagementCtrl'
        })
        .state('user.classManagement',{
            url:'/classManagement',
            templateUrl:'./Module/user/classManagement.html',
            controller:'classManagementCtrl'
        })
        .state('user.createUser',{
            url:'/createUser',
            templateUrl:'./Module/user/createUser.html',
            controller:'createUserCtrl'
        })
        .state('user.stuManagement',{
            url:'/stuManagement',
            templateUrl:'./Module/user/stuManagement.html',
            controller:'stuManagementCtrl'
        })
});