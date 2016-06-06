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
        .state('survey.surveyAnalysis',{
            url:'/surveyAnalysis',
            templateUrl:'./Module/analysis/surveyAnalysis.html',
            controller:'surveyAnalysisCtrl'
        })
        .state('survey.surveyDetail',{
            url:'/surveyDetail',
            templateUrl:'./Module/analysis/surveyDetail.html',
            controller:'surveyDetailCtrl'
        })
});