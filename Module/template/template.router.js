'use strict';

angular.module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('template',{
                url: '',
                abstract: true,
                templateUrl: "./Module/public/public.html"
            })
            .state('template.templateList', {
                url: '/templateList',
                params:{entity:{}},
                cache:false,
                templateUrl: "./Module/template/templateList.html",
                controller: 'templateListCtrl'
            })
            .state('template.templateCreate',{
                url:'/createTemplate',
                params:{entity:{}},
                templateUrl:"./Module/template/createTemplate.html",
                controller:"createTemplateCtrl"
            })
    });
