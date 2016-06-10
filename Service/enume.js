/**
 * Created by mac on 16/6/6.
 */

angular.module('app').factory("enume",function($http){

    var enumHelp = function(){

        console.log("初始化枚举服务!");

        var that = this;

        this.templateCate = [{name:"全部",val:""}];
        this.templateType = [{name:"全部",val:""}];

        this.getTemplateCate = function(){
            if(this.templateCate.length <=1 ){
                console.log("发送templateCate请求!");
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.templateCate.length;i++){
                        that.templateCate.push({name: d.templateCate[i].name,val: d.templateCate[i].val});
                    }
                })
            }else{
                console.log("调用方法但是没有发送templateCate请求!");
            }
        }

        this.getTemplateType = function(){
            if(this.templateType.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.templateType.length;i++){
                        that.templateType.push({name: d.templateType[i].name,val: d.templateType[i].val});
                    }
                })
            }
        }

        this.getTemplateCate();
        this.getTemplateType();
    }

    return new enumHelp();
})