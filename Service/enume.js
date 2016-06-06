/**
 * Created by mac on 16/6/6.
 */

angular.module('app').factory("enume",function($http){

    var enumHelp = function(){

        console.log("初始化枚举服务!");

        var that = this;

        this.templateCate = new Array();
        this.templateType = new Array();

        this.getTemplateCate = function(){
            if(this.templateCate.length == 0){
                $http.get("../NMQ/data.json").success(function(d){
                    that.templateCate = d.templateCate;
                })
            }
        }

        this.getTemplateType = function(){
            if(this.templateType.length == 0){
                $http.get("../NMQ/data.json").success(function(d){
                    that.templateType = d.templateType;
                })
            }
        }

        this.getTemplateCate();
        this.getTemplateType();
    }

    return new enumHelp();
})