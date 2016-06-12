/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('survey',{
            url: '',
            abstract: true,
            templateUrl: "./Module/public/public.html"
        })
        .state('survey.surveyAnalysisList',{
            url:'/surveyAnalysisList',
            templateUrl:'./Module/analysis/surveyAnalysisList.html',
            controller:'surveyAnalysisListCtrl'
        })
        .state('survey.surveyAnalysisDetail',{
            url:'/surveyAnalysisList/:id',
            templateUrl:'./Module/analysis/surveyAnalysisDetail.html',
            controller:'surveyAnalysisDetailCtrl'
        })
        .state('survey.surveyInfoList',{
            url:'/surveyInfoList',
            templateUrl:'./Module/analysis/surveyInfoList.html',
            controller:'surveyInfoListCtrl'
        })
        .state('survey.surveyInfoDetail',{
            url:'/surveyInfoList/:id',
            templateUrl:'./Module/analysis/surveyInfoDetail.html',
            controller:'surveyInfoDetailCtrl'
        })
});