/**
 * Created by carol on 16/5/18.
 */
'use strict';

angular.module('app').config(function($stateProvider){
    $stateProvider
        .state('roomManage',{
            url: '/roomManage',
            templateUrl: "./Module/RoomManagement/main/managerment.html"
        })
        //教室管理
        .state('roomManage.roomList', {
            url: '/roomList',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/classRoom/roomList.html",
            controller: 'roomListCtl'
        })
        .state('roomManage.register',{
            url:'/roomRegister',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/classRoom/registerRoom.html",
            controller:"registerRoomCtl"
        })
        .state('roomManage.productList',{
            url:'/productList',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/classRoom/productList.html",
            controller:"productListCtl"
        })
        .state('roomManage.productPreview',{
            url:'/productPreview/:id',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/classRoom/productPreview.html",
            controller:"productPreviewCtl"
        })
        .state('roomManage.createProduct', {
            url: '/createProduct',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/classRoom/createProduct.html",
            controller: 'createProductCtl'
        })
        .state('roomManage.warrant', {
            url: '/warrant',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/classRoom/warrant.html",
            controller: 'warrantCtl'
        })
        .state('roomManage.decoration', {
            url: '/decoration',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/classRoom/decoration.html",
            controller: 'decorationCtl'
        })
        .state('roomManage.pushBullet',{
            url:'/pushBullet',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/classRoom/pushBullet.html",
            controller:"pushBulletCtl"
        })
        //数据分析
        .state('roomManage.evaluateList',{
            url:'/evaluateList',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/analyse/evaluateList.html",
            controller:"evaluateListCtl"
        })
        .state('roomManage.evaluateDetail', {
            url: '/evaluateList/:id',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/analyse/evaluateDetail.html",
            controller: 'evaluateDetailCtl'
        })
        .state('roomManage.statisticsList', {
            url: '/statisticsList',
            params:{entity:{}},
            templateUrl: "./Module/RoomManagement/analyse/statisticsList.html",
            controller: 'statisticsListCtl'
        })
        .state('roomManage.statisticsDetail',{
            url:'/statisticsList/:id',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/analyse/statisticsDetail.html",
            controller:"statisticsDetail"
        })
        .state('roomManage.productSort',{
            url:'/statisticsDetail',
            params:{entity:{}},
            templateUrl:"./Module/RoomManagement/analyse/productSort.html",
            controller:"productSortCtl"
        })
        .state('roomManage.dictionary',{
            url:'/dictionary',
            params:{entity:{}},
            templateUrl:'./Module/RoomManagement/other/dictionary.html',
            controller:'dictionaryCtrl'
        })
        .state('roomManage.report',{
            url:'/reports',
            params:{entity:{}},
            templateUrl:'./Module/RoomManagement/other/reports.html',
            controller:'reportsCtrl'
        })
});