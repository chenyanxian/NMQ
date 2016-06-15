/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('safeRoom',{
            url: '/safeRoom',
            templateUrl: "./Module/SafeClassRoom/main/safeMain.html"
        })
        //模板路由
        .state('safeRoom.templateList', {
            url: '/templateList',
            params:{entity:{}},
            cache:false,
            templateUrl: "./Module/SafeClassRoom/template/templateList.html",
            controller: 'templateListCtrl'
        })
        .state('safeRoom.templateCreate',{
            url:'/createTemplate',
            params:{entity:{}},
            templateUrl:"./Module/SafeClassRoom/template/createTemplate.html",
            controller:"createTemplateCtrl"
        })
        //数据分析
        .state('safeRoom.surveyAnalysisList',{
            url:'/surveyAnalysisList',
            templateUrl:'./Module/SafeClassRoom/analysis/surveyAnalysisList.html',
            controller:'surveyAnalysisListCtrl'
        })
        .state('safeRoom.surveyAnalysisDetail',{
            url:'/surveyAnalysisList/:id',
            templateUrl:'./Module/SafeClassRoom/analysis/surveyAnalysisDetail.html',
            controller:'surveyAnalysisDetailCtrl'
        })
        .state('safeRoom.surveyInfoList',{
            url:'/surveyInfoList',
            templateUrl:'./Module/SafeClassRoom/analysis/surveyInfoList.html',
            controller:'surveyInfoListCtrl'
        })
        .state('safeRoom.surveyInfoDetail',{
            url:'/surveyInfoList/:id',
            templateUrl:'./Module/SafeClassRoom/analysis/surveyInfoDetail.html',
            controller:'surveyInfoDetailCtrl'
        })
        .state('safeRoom.lessons',{
            url:'/surveyLessonsList',
            templateUrl:'./Module/SafeClassRoom/analysis/lessonsList.html',
            controller:'lessonsListCtrl'
        })
        .state('safeRoom.students',{
            url:'/surveyStudentsList',
            templateUrl:'./Module/SafeClassRoom/analysis/studentList.html',
            controller:'studentListCtrl'
        })
        //用户
        .state('safeRoom.userManagement',{
            url:'/userManagement',
            templateUrl:'./Module/SafeClassRoom/user/userManagement.html',
            controller:'userManagementCtrl'
        })
        .state('safeRoom.classManagement',{
            url:'/classManagement',
            templateUrl:'./Module/SafeClassRoom/user/classManagement.html',
            controller:'classManagementCtrl'
        })
        .state('safeRoom.createUser',{
            url:'/createUser',
            templateUrl:'./Module/SafeClassRoom/user/createUser.html',
            controller:'createUserCtrl'
        })
        .state('safeRoom.stuManagement',{
            url:'/stuManagement',
            templateUrl:'./Module/SafeClassRoom/user/stuManagement.html',
            controller:'stuManagementCtrl'
        })
});