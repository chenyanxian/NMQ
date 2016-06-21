/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('active',{
            url: '',
            abstract: true,
            templateUrl: "./Module/public/public.html"
        })
        .state('active.activeList',{
            url:'/activeList',
            templateUrl:'./Module/active/activeList.html',
            controller:'activeListCtrl'
        })
        .state('active.createActive',{
            url:'/createActive',
            templateUrl:'./Module/active/createActive.html',
            controller:'createActiveCtrl'
        })
});

