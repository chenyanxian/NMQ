/**
 * Created by mac on 16/6/6.
 */

angular.module('app').factory("enume",function($http){

    var enumHelp = function(){

        console.log("初始化枚举服务!");

        var that = this;

        this.templateType = [{name:"全部",code:""}];          //模板分类
        this.templateCate = [{name:"全部",code:""}];          //模板类型

        this.templateTypeForAdd = [];          //模板分类
        this.templateCateForAdd = [];          //模板类型

        this.userSex = [{name:"请选择",code:""}];                                  //性别
        this.idType = [{name:"请选择",code:""}];                                   //证件类型
        this.maritalStatus = [{name:"请选择",code:""}];                            //婚姻状态
        this.macao = [{name:"请选择",code:""}];                                    //港澳台外

        this.kcxl = [{name:"全部",code:""}];                  //课程系列
        this.kczt = [{name:"全部",code:""}];                  //课程主题
        this.xn = [{name:"全部",code:""}];                    //学年
        this.nj = [{name:"全部",code:""}];                    //年级
        this.bj = [{name:"全部",code:""}];                    //班级

        this.provinces = [{name:"请选择",code:""}];            //省

        this.uRylxs = [{name:"全部",code:""}];                //人员类型
        this.uGws = [{name:"全部",code:""}];                  //岗位

        this.getData = function(url,cb){
            $http.get(url).success(function(d){
                if(d.status.code == "1"){
                    cb(d.data);
                }else{
                    alert(d.status.message);
                }
            })
        }

        this.postData = function(url,data,cb){
            $http({
                method:"POST",
                url:url,
                data:data
            }).success(function(d){
                if(d.status.code == "1"){
                    cb(d);
                }else{
                    alert(d.status.message);
                }
            })
        }

        //模板分类
        this.getTemplateType = function(){
            if(this.templateType.length <=1 ){
                console.log("发送templateType请求!");
                this.getData("/cmsapi/template/queryModelTypes",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.templateType.push({name: tmp[i].name,code: tmp[i].code});
                        that.templateTypeForAdd.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }else{
                console.log("调用方法但是没有发送templateCate请求!");
            }
        }

        //模板类型
        this.getTemplateCate = function(){
            if(this.templateCate.length <= 1){
                this.getData("/cmsapi/template/queryModelCategorys",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.templateCate.push({name: tmp[i].name,code: tmp[i].code});
                        that.templateCateForAdd.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //性别
        this.getUserSex = function(){
            if(this.userSex.length <= 1){
                this.getData("/cmsapi/user/querySex",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.userSex.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //证件类型
        this.getIdType = function(){
            if(this.idType.length <= 1){
                this.getData("/cmsapi/user/queryIdTypes",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.idType.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //婚姻状态
        this.getMaritalStatus = function(){
            if(this.maritalStatus.length <= 1){
                this.getData("/cmsapi/user/queryMarry",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.maritalStatus.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //港澳台外
        this.getMacao = function(){
            if(this.macao.length <= 1){
                this.getData("/cmsapi/user/queryMacao",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.macao.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //课程系列
        this.getKcxl  = function(){
            if(this.kcxl.length <= 1){
                this.getData("/cmsapi/course/xilie",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.kcxl.push({name: tmp[i].kcxlmc,code: tmp[i].kcxlbh});
                    }
                })
            }
        }

        //课程主题
        this.getKczt  = function(){
            if(this.kczt.length <= 1){
                this.getData("/cmsapi/user/kczt",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.kczt.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //学年
        this.getXn  = function(){
            if(this.xn.length <= 1){
                this.getData("/cmsapi/user/xn",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.xn.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //年级
        this.getNj = function(){
            if(this.nj.length <= 1){
                this.getData("/cmsapi/user/nj",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.nj.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //班级
        this.getBj = function(){
            if(this.bj.length <= 1){
                this.getData("/cmsapi/user/bj",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.bj.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //获取省
        this.getProvinces = function(){
            if(this.provinces.length <= 1){
                this.getData("/cmsapi/user/queryProvinces",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.provinces.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //获取人员类型
        this.getuRylxs = function(){
            if(this.uRylxs.length <= 1){
                this.getData("/cmsapi/dictionary/queryByParentCode?parentCode=user_type",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.uRylxs.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        //获取岗位
        this.getuGws = function(){
            if(this.uGws.length <= 1){
                this.getData("/cmsapi/dictionary/queryByParentCode?parentCode=position",function(tmp){
                    for(var i=0;i<tmp.length;i++){
                        that.uGws.push({name: tmp[i].name,code: tmp[i].code});
                    }
                })
            }
        }

        this.getTemplateCate();
        this.getTemplateType();
        this.getUserSex();
        this.getIdType();
        this.getMaritalStatus();
        this.getMacao();
        this.getKcxl();
        //this.getKczt();
        //this.getXn();
        //this.getNj();
        //this.getBj();
        //this.getProvinces();
        this.getuRylxs();
        this.getuGws();
    }

    return new enumHelp();
})