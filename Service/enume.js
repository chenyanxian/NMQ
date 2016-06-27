/**
 * Created by mac on 16/6/6.
 */

angular.module('app').factory("enume",function($http){

    var enumHelp = function(){

        console.log("初始化枚举服务!");

        var that = this;

        this.templateType = [{name:"全部",code:""}];          //模板分类
        this.templateCate = [{name:"全部",code:""}];          //模板类型
        this.userSex = [];                                  //性别
        this.nationality = [];                              //国籍
        this.place = [];                                    //籍贯
        this.idType = [];                                   //证件类型
        this.maritalStatus = [];                            //婚姻状态
        this.macao = [];                                    //港澳台外
        this.nation = [];                                   //民族

        this.kcxl = [{name:"全部",code:""}];                  //课程系列
        this.kczt = [{name:"全部",code:""}];                  //课程主题
        this.xn = [{name:"全部",code:""}];                    //学年
        this.nj = [{name:"全部",code:""}];                    //年级
        this.bj = [{name:"全部",code:""}];                    //班级
        this.skbh = [{name:"全部",code:""}];                  //授课编号

        this.provinces = [{name:"请选择",code:""}];            //省
        this.citys = [{name:"请选择",code:""}];                //城市
        this.downs = [{name:"请选择",code:""}];                 //镇

        //模板分类
        this.getTemplateType = function(){
            if(this.templateType.length <=1 ){
                console.log("发送templateType请求!");
                $http.get("/cmsapi/template/queryModelTypes").success(function(d){
                    if(d.status.code == "1"){
                        var tmp = d.data;
                        for(var i=0;i<tmp.length;i++){
                            that.templateType.push({name: tmp[i].name,code: tmp[i].code});
                        }
                    }else{
                        alert(d.status.message);
                    }
                })
            }else{
                console.log("调用方法但是没有发送templateCate请求!");
            }
        }

        //模板类型
        this.getTemplateCate = function(){
            if(this.templateCate.length <= 1){
                $http.get("/cmsapi/template/queryModelCategorys").success(function(d){
                    if(d.status.code == "1"){
                        var tmp = d.data;
                        for(var i=0;i<tmp.length;i++){
                            that.templateCate.push({name: tmp[i].name,code: tmp[i].code});
                        }
                    }else{
                        alert(d.status.message);
                    }
                })
            }
        }

        //性别
        this.getUserSex = function(){
            if(this.userSex.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.sex.length;i++){
                        that.userSex.push({name: d.sex[i].name,code: d.sex[i].val});
                    }
                })
            }
        }

        //国籍
        this.getNationality = function(){
            if(this.nationality.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.nationality.length;i++){
                        that.nationality.push({name: d.nationality[i].name,code: d.nationality[i].val});
                    }
                })
            }
        }

        //籍贯
        this.getPlace = function(){
            if(this.place.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.place.length;i++){
                        that.place.push({name: d.place[i].name,code: d.place[i].val});
                    }
                })
            }
        }

        //证件类型
        this.getIdType = function(){
            if(this.idType.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.idType.length;i++){
                        that.idType.push({name: d.idType[i].name,code: d.idType[i].val});
                    }
                })
            }
        }

        //婚姻状态
        this.getMaritalStatus = function(){
            if(this.maritalStatus.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.maritalStatus.length;i++){
                        that.maritalStatus.push({name: d.maritalStatus[i].name,code: d.maritalStatus[i].val});
                    }
                })
            }
        }

        //港澳台外
        this.getMacao = function(){
            if(this.macao.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.macao.length;i++){
                        that.macao.push({name: d.macao[i].name,code: d.macao[i].val});
                    }
                })
            }
        }

        //民族
        this.getNation = function(){
            if(this.nation.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.nation.length;i++){
                        that.nation.push({name: d.nation[i].name,code: d.nation[i].val});
                    }
                })
            }
        }

        //课程系列
        this.getKcxl  = function(){
            if(this.kcxl.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.kcxl.length;i++){
                        that.kcxl.push({name: d.kcxl[i].name,code: d.kcxl[i].val});
                    }
                })
            }
        }

        //课程主题
        this.getKczt  = function(){
            if(this.kczt.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.kczt.length;i++){
                        that.kczt.push({name: d.kczt[i].name,code: d.kczt[i].val});
                    }
                })
            }
        }

        //学年
        this.getXn  = function(){
            if(this.xn.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.xn.length;i++){
                        that.xn.push({name: d.xn[i].name,code: d.xn[i].val});
                    }
                })
            }
        }

        //年级
        this.getNj = function(){
            if(this.nj.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.nj.length;i++){
                        that.nj.push({name: d.nj[i].name,code: d.nj[i].val});
                    }
                })
            }
        }

        //班级
        this.getBj = function(){
            if(this.bj.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.bj.length;i++){
                        that.bj.push({name: d.bj[i].name,code: d.bj[i].val});
                    }
                })
            }
        }

        //授课编号
        this.getSkbh = function(){
            if(this.skbh.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.skbh.length;i++){
                        that.skbh.push({name: d.skbh[i].name,code: d.skbh[i].val});
                    }
                })
            }
        }

        //获取省
        this.getProvinces = function(){
            if(this.provinces.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.provinces.length;i++){
                        that.provinces.push({name: d.provinces[i].name,code: d.provinces[i].val});
                    }
                })
            }
        }

        //获取城市
        this.getCitys = function(){
            if(this.citys.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.citys.length;i++){
                        that.citys.push({name: d.citys[i].name,code: d.citys[i].val});
                    }
                })
            }
        }

        //获取镇
        this.getDowns = function(){
            if(this.downs.length <= 1){
                $http.get("../NMQ/data.json").success(function(d){
                    for(var i=0;i< d.downs.length;i++){
                        that.downs.push({name: d.downs[i].name,code: d.downs[i].val});
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
        this.getKcxl();
        this.getKczt();
        this.getXn();
        this.getNj();
        this.getBj();
        this.getSkbh();
        this.getProvinces();
        this.getCitys();
        this.getDowns();
    }

    return new enumHelp();
})