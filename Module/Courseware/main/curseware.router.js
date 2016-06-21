/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('courseware',{
            url: '/courseware',
            templateUrl: "./Module/Courseware/main/curseware.html"
        })
        //路由
        .state('courseware.list', {
            url: '/coursewareList',
            params:{entity:{}},
            cache:false,
            templateUrl: "./Module/Courseware/course/list.html",
            controller: 'templateListCtrl'
        })
        .state('courseware.create',{
            url:'/coursewareCreate',
            params:{entity:{}},
            templateUrl:"./Module/Courseware/course/create.html",
            controller:"createTemplateCtrl"
        })
});