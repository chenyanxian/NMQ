/**
 * Created by mac on 16/6/17.
 */

'use strict';

angular.module('app')
    .controller('createProductCtl',function ($http,$scope,enume,$state) {
        $scope.proCate = "jf";
        $scope.jfs = [];
        $scope.jfNum = "";

        $scope.syjsbbh = "";
        $scope.kcxls = [];
        $scope.kcxlsNum = "";

        $scope.ddbbh = "";
        $scope.spbh = "";
        $scope.ssmc = "";

        $scope.proStatus = "up";
        $scope.spkc = "0";

        $scope.spjj = "";
        $scope.spnr = "";

        var proImg = "";
        var keVideo = "";

        $scope.tmpId1 = "";
        $scope.tmpName1 = "";
        $scope.tmpId2 = "";
        $scope.tmpName2 = "";
        $scope.tmpId3 = "";
        $scope.tmpName3 = "";
        $scope.tmpId4 = "";
        $scope.tmpName4 = "";
        $scope.tmpId5 = "";
        $scope.tmpName5 = "";

        $scope.showDialog = false;


        jsCoreMethod.fileReader("btn1",function(d,f){
            proImg = d;
            document.querySelector("#file1").innerHTML = f.name;
        })

        jsCoreMethod.fileReader("btn2",function(d,f){
            keVideo = d;
            document.querySelector("#file2").innerHTML = f.name;
        },"file")

        var openTag = 0;
        $scope.getChooseTmps = function(d){
            if(openTag == 1){
                $scope.tmpId1 = d.code;
                $scope.tmpName1 = d.name;
            }
            if(openTag == 2){
                $scope.tmpId2 = d.code;
                $scope.tmpName2 = d.name;
            }
            if(openTag == 3){
                $scope.tmpId3 = d.code;
                $scope.tmpName3 = d.name;
            }
            if(openTag == 4){
                $scope.tmpId4 = d.code;
                $scope.tmpName4 = d.name;
            }
            if(openTag == 5){
                $scope.tmpId5 = d.code;
                $scope.tmpName5 = d.name;
            }
            $scope.showDialog = false;
        }

        $scope.showTmpDialog = function(num){
            $scope.showDialog = true;
            openTag = num;
        }
        $scope.closeDialog = function(){
            $scope.showDialog = false;
        }

        $scope.cancelPro = function(){
            $state.go("roomManage.productList");
        }

        $scope.savePro = function(){
            var tmp = {
                proCate:$scope.proCate,
                jfNum:$scope.jfNum,
                syjsbbh:$scope.syjsbbh,
                kcxlsNum:$scope.kcxlsNum,
                ddbbh:$scope.ddbbh,
                spbh:$scope.spbh,
                ssmc:$scope.ssmc,
                proStatus:$scope.proStatus,
                spkc:$scope.spkc,
                spjj:$scope.spjj,
                spnr:$scope.spnr,
                proImg:proImg,
                keVideo:keVideo,
                tmpId1:$scope.tmpId1,
                tmpName1:$scope.tmpName1,
                tmpId2:$scope.tmpId2,
                tmpName2:$scope.tmpName2,
                tmpId3:$scope.tmpId3,
                tmpName3:$scope.tmpName3,
                tmpId4:$scope.tmpId4,
                tmpName4:$scope.tmpName4,
                tmpId5:$scope.tmpId5,
                tmpName5:$scope.tmpName5,
            };
            enume.postData("",tmp,function(d){

            })
        }

        $scope.previewPro = function(){

        }
    })

    .controller('registerRoomCtl',function ($http,$scope,enume,$state,$stateParams) {
        $scope.zhh = "";
        $scope.xxbh = "";
        $scope.xxmc = "";
        $scope.jsbh = "";
        $scope.jsmc = "";
        $scope.jsdz = "";
        $scope.sqzh = "";
        $scope.sqmm = "";
        $scope.jsbbh = "";
        $scope.cStatus = "y";
        $scope.bz = "";
        $scope.sp1 ="";
        $scope.sp2 ="";
        $scope.sp3 ="";
        $scope.sp4 ="";
        $scope.sp5 ="";
        $scope.sp6 ="";
        $scope.sp7 ="";
        $scope.sp8 ="";
        $scope.sp9 ="";
        $scope.sp10 ="";
        $scope.sp11 ="";
        $scope.sp12 ="";

        for(var i=0;i<12;i++){
            (function(index){
                jsCoreMethod.fileReader("b"+(index+1),function(d,f){
                    enume.postData("/cmsapi/image/upload",d,function(data){
                        //document.querySelector("#sp"+(index+1)).innerHTML = f.name;
                        $scope["sp"+(index+1)] = "/file"+data.data;
                        $scope.$apply();
                    })
                },"file")
            })(i);
        }

        function getInfoByCode(){
            enume.getData("",function(d){
                $scope.zhh = "";
                $scope.xxbh = "";
                $scope.xxmc = "";
                $scope.jsbh = "";
                $scope.jsmc = "";
                $scope.jsdz = "";
                $scope.sqzh = "";
                $scope.sqmm = "";
                $scope.jsbbh = "";
                $scope.cStatus = "y";
                $scope.bz = "";
                $scope.sp1 = "/file"+data.data;
                $scope.sp2 = "/file"+data.data;
                $scope.sp3 = "/file"+data.data;
                $scope.sp4 = "/file"+data.data;
                $scope.sp5 = "/file"+data.data;
                $scope.sp6 = "/file"+data.data;
                $scope.sp7 = "/file"+data.data;
                $scope.sp8 = "/file"+data.data;
                $scope.sp9 = "/file"+data.data;
                $scope.sp10 = "/file"+data.data;
                $scope.sp11 = "/file"+data.data;
                $scope.sp12 = "/file"+data.data;
            })
        }

        $scope.showButton = true;
        if($stateParams.entity.tag == "edit"){
            $scope.t_title = "修改教室";
            getInfoByCode();
            $scope.showButton = true;
        }
        else if($stateParams.entity.tag == "detail"){
            $scope.t_title = "教室详情";
            getInfoByCode();
            $scope.showButton = false;
        }
        else{
            $scope.t_title = "教室注册";
            $scope.showButton = true;
        }

        $scope.createClass = function(){

            var tmp = {
                zhh:$scope.zhh,         //租户号
                xxbh:$scope.xxbh,       //学校编号
                xxmc:$scope.xxmc,       //学校名称
                jsbh:$scope.jsbh,       //教室编号
                jsmc:$scope.jsmc,       //教室名称
                jsdz:$scope.jsdz,       //教室地址
                sqzh:$scope.sqzh,        //授权账号
                sqmm:$scope.sqmm,       //授权密码
                jsbbh:$scope.jsbbh,      //教室版本号
                cstatus:$scope.cStatus, //有效状态
                bz:$scope.bz,           //备注说明
                b1Src:$scope.sp1,        //欢迎登陆安全教育平台图片
                b2Src:$scope.sp2,        //登陆页背景图
                b3Src:$scope.sp3,        //课前准备按钮图
                b4Src:$scope.sp4,        //选择课程按钮图
                b5Src:$scope.sp5,        //选课页背景图
                b6Src:$scope.sp6,        //安全教育平台logo
                b7Src:$scope.sp7,        //年级班级选择按钮图
                b8Src:$scope.sp8,        //返回首页按钮图
                b9Src:$scope.sp9,        //学生选择按钮图
                b10Src:$scope.sp10,      //重新选择班级按钮图
                b11Src:$scope.sp11,       //返回上一级
                b12Src:$scope.sp12       //完成点名继续选课按钮图
            };

            var url = "";
            if($stateParams.entity.tag == "edit"){
                url = "/cmsapi/tclassRegister/update";
                tmp.lineid = $stateParams.entity.lineid;
            }else{
                url = "/cmsapi/tclassRegister/register";
            }

            enume.postData(url,tmp,function(d){
                $state.go("roomManage.roomList");
            })
        }
    })

    .controller('roomListCtl',function ($http,$scope,enume,$state) {

        $scope.schoolName = "";
        $scope.beginDate = "";
        $scope.endDate = "";

        $scope.roomList = [];

        $scope.searchRoom = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.createRoom = function(){
            $state.go("roomManage.register",{entity:{tag:"add"}});
        }

        $scope.getUrl = function(){
            return "/cmsapi/tclassRegister/query?name="+$scope.schoolName+"&begin="+$scope.beginDate + "&end="+$scope.endDate;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.roomList = valueFromDirective;
        }

        $scope.editRoom = function(item){
            $state.go("roomManage.register",{entity:{tag:"edit",lineid:item.lineid}});
        }

        $scope.deleteRoom = function(item){
            enume.getData("xxxxx",function(d){
                $scope.roomList = $scope.roomList.deleteByKey("id",item.lineid);
            })
        }

        $scope.goDetail = function(item){
            $state.go("roomManage.register",{entity:{tag:"detail",lineid:item.lineid}});
        }

        $scope.getRemark = function(item){
            return jsCoreMethod.cutString(item.remark,5);
        }
    })

