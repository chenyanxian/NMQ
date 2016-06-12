/**
 * Created by mac on 16/6/6.
 */

angular.module('app').factory("enume",function($http){

    var enumHelp = function(){

        console.log("初始化枚举服务!");

        var that = this;

        this.templateCate = [{name:"全部",val:""}];
        this.templateType = [{name:"全部",val:""}];
        this.userSex = [];      //性别
        this.nationality = [];  //国籍
        this.place = [];        //籍贯
        this.idType = [];       //证件类型
        this.maritalStatus = [];//婚姻状态
        this.macao = [];        //港澳台外
        this.nation = [];       //民族

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

        this.getUserSex = function(){
            if(this.userSex.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.sex.length;i++){
                        that.userSex.push({name: d.sex[i].name,val: d.sex[i].val});
                    }
                })
            }
        }

        this.getNationality = function(){
            if(this.nationality.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.nationality.length;i++){
                        that.nationality.push({name: d.nationality[i].name,val: d.nationality[i].val});
                    }
                })
            }
        }

        this.getPlace = function(){
            if(this.place.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.place.length;i++){
                        that.place.push({name: d.place[i].name,val: d.place[i].val});
                    }
                })
            }
        }

        this.getIdType = function(){
            if(this.idType.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.idType.length;i++){
                        that.idType.push({name: d.idType[i].name,val: d.idType[i].val});
                    }
                })
            }
        }

        this.getMaritalStatus = function(){
            if(this.maritalStatus.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.maritalStatus.length;i++){
                        that.maritalStatus.push({name: d.maritalStatus[i].name,val: d.maritalStatus[i].val});
                    }
                })
            }
        }

        this.getMacao = function(){
            if(this.macao.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.macao.length;i++){
                        that.macao.push({name: d.macao[i].name,val: d.macao[i].val});
                    }
                })
            }
        }

        this.getNation = function(){
            if(this.nation.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.nation.length;i++){
                        that.nation.push({name: d.nation[i].name,val: d.nation[i].val});
                    }
                })
            }
        }

        this.getTemplateCate();
        this.getTemplateType();
        this.getUserSex();
        this.getNationality();
        this.getPlace();
        this.getIdType();
        this.getMaritalStatus();
        this.getMacao();
        this.getNation();
    }

    return new enumHelp();
})