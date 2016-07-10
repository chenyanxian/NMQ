/**
 * Created by mac on 16/6/17.
 */

'use strict';

angular.module('app')
    .controller('createProductCtl',function ($http,$scope,enume,$state,$stateParams) {
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

        $scope.file1 = "";
        $scope.file2 = "";

        $scope.showDialog = false;

        jsCoreMethod.fileReader("btn1",function(d,f){
            enume.postData("/cmsapi/image/upload",d,function(data){
                $scope.file1 = "/file"+data.data;
                $scope.r1 = "上传成功";
            })
        },"file");

        jsCoreMethod.fileReader("btn2",function(d,f){
            enume.postData("/cmsapi/image/upload?suffix="+ f.name.substring(f.name.lastIndexOf('.')+1),d,function(data){
                $scope.file2 = "/file"+data.data;
                $scope.r2 = "上传成功";
            })
        },"file");

        if($stateParams.entity.tag == "edit"){
            var spbh = $stateParams.entity.item.spbh;
            enume.getData("/cmsapi/course/detail?code="+spbh,function(d){
                    $scope.proCate=d.proCate,         //商品类别
                    $scope.jfNum=d.jfNum,             //选择的教辅id
                    $scope.syjsbbh=d.syjsbbh,          //适用教室版本号
                    $scope.kcxlsNum=d.kcxlsNum,       //课程系列id
                    $scope.ddbbh=d.ddbbh,             //当前版本号
                    $scope.spbh=d.spbh,               //商品编号
                    $scope.ssmc=d.ssmc,               //商品名称
                    $scope.proStatus=d.proStatus,     //商品状态
                    $scope.spkc=d.spkc,               //商品库存
                    $scope.spjj=d.spjj,               //商品简介
                    $scope.spnr=d.spnr,               //商品内容
                    $scope.proImg=d.file1,            //商品缩略图
                    $scope.keVideo=d.file2,           //课件视频
                    $scope.tmpId1=d.tmpId1,           //教师对课程评价问卷ID
                    $scope.tmpName1=d.tmpName1,       //教师对课程评价问卷Name
                    $scope.tmpId2=d.tmpId2,           //学生对课程评价问卷ID
                    $scope.tmpName2=d.tmpName2,       //学生对课程评价问卷Mame
                    $scope.tmpId3=d.tmpId3,           //其他对课程评价问卷ID
                    $scope.tmpName3=d.tmpName3,       //其他对课程评价问卷Name
                    $scope.tmpId4=d.tmpId4,           //课堂作业问卷ID
                    $scope.tmpName4=d.tmpName4,       //课堂作业问卷Name
                    $scope.tmpId5=d.tmpId5,           //课后作业问卷ID
                    $scope.tmpName5=d.tmpName5        //课后作业问卷Name
            })
        }

        var openTag = 0;
        $scope.getChooseTmps = function(d){
            if(d.length == 0){
                alert("请选择一个模板!");
                return;
            }
            d = d[0];
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

        function getNameById(id,arr){
            var res = "";
            for(var i=0;i<arr.length;i++){
                if(id == arr[i].code){
                    res = arr[i].name;
                    break;
                }
            }
            return res;
        }

        $scope.savePro = function(){
            var tmp = {
                proCate:$scope.proCate,         //商品类别
                jfNum:$scope.jfNum,             //选择的教辅id
                jfmc:getNameById($scope.jfs,$scope.jfNum),  //教辅名称
                syjsbbh:$scope.syjsbbh,          //适用教室版本号
                kcxlsNum:$scope.kcxlsNum,       //课程系列id
                kcxlmc:getNameById($scope.kcxlsNum,$scope.kcxls),   //课程系列名称
                ddbbh:$scope.ddbbh,             //当前版本号
                spbh:$scope.spbh,               //商品编号
                ssmc:$scope.ssmc,               //商品名称
                proStatus:$scope.proStatus,     //商品状态
                spkc:$scope.spkc,               //商品库存
                spjj:$scope.spjj,               //商品简介
                spnr:$scope.spnr,               //商品内容
                proImg:$scope.file1,            //商品缩略图
                keVideo:$scope.file2,           //课件视频
                tmpId1:$scope.tmpId1,           //教师对课程评价问卷ID
                tmpName1:$scope.tmpName1,       //教师对课程评价问卷Name
                tmpId2:$scope.tmpId2,           //学生对课程评价问卷ID
                tmpName2:$scope.tmpName2,       //学生对课程评价问卷Mame
                tmpId3:$scope.tmpId3,           //其他对课程评价问卷ID
                tmpName3:$scope.tmpName3,       //其他对课程评价问卷Name
                tmpId4:$scope.tmpId4,           //课堂作业问卷ID
                tmpName4:$scope.tmpName4,       //课堂作业问卷Name
                tmpId5:$scope.tmpId5,           //课后作业问卷ID
                tmpName5:$scope.tmpName5        //课后作业问卷Name
            };

            var url = "";
            if($stateParams.entity.tag == "edit"){
                url = "/cmsapi/course/update";
                tmp.tanentId = $stateParams.entity.item.tanentId;
            }else{
                url = "/cmsapi/course/add";
            }

            enume.postData(url,tmp,function(d){
                $state.go("roomManage.productList");
            })
        }

        $scope.previewPro = function(){
            $state.go("roomManage.productPreview",{id:1});
        }

        $scope.selectTemplates = function(){
            $scope.$broadcast("getCkTemplates");
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

        $scope.r1 = "";
        $scope.r2 = "";
        $scope.r3 = "";
        $scope.r4 = "";
        $scope.r5 = "";
        $scope.r6 = "";
        $scope.r7 = "";
        $scope.r8 = "";
        $scope.r9 = "";
        $scope.r10 = "";
        $scope.r11 = "";
        $scope.r12 = "";

        for(var i=0;i<12;i++){
            (function(index){
                jsCoreMethod.fileReader("b"+(index+1),function(d,f){
                    enume.postData("/cmsapi/image/upload",d,function(data){
                        //document.querySelector("#sp"+(index+1)).innerHTML = f.name;
                        $scope["sp"+(index+1)] = "/file"+data.data;
                        $scope["r"+(index+1)] = "上传成功";
                        //$scope.$apply();
                    })
                },"file")
            })(i);
        }

        function getInfoByCode(){
            var tanentId = $stateParams.entity.item.tanentid;
            var jsbh = $stateParams.entity.item.jsbh;
            enume.getData("/cmsapi/tclassRegister/detail?tanentId="+tanentId+"&jsbh="+jsbh,function(d){
                $scope.zhh = d.zhh;
                $scope.xxbh = d.xxbh;
                $scope.xxmc = d.xxmc;
                $scope.jsbh = d.jsbh;
                $scope.jsmc = d.jsmc;
                $scope.jsdz = d.jsdz;
                $scope.sqzh = d.sqzh;
                $scope.sqmm = d.sqmm;
                $scope.jsbbh = d.jsbbh;
                $scope.cStatus = d.cstatus;
                $scope.bz = d.bz;
                $scope.sp1 = d.b1Src;
                $scope.sp2 = d.b2Src;
                $scope.sp3 = d.b3Src;
                $scope.sp4 = d.b4Src;
                $scope.sp5 = d.b5Src;
                $scope.sp6 = d.b5Src;
                $scope.sp7 = d.b5Src;
                $scope.sp8 = d.b5Src;
                $scope.sp9 = d.b5Src;
                $scope.sp10 = d.b5Src;
                $scope.sp11 = d.b5Src;
                $scope.sp12 = d.b5Src;
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
                tmp.tanentId = $stateParams.entity.item.oldTanentId;
            }else{
                url = "/cmsapi/tclassRegister/register";
            }

            enume.postData(url,tmp,function(d){
                $state.go("roomManage.roomList");
            })
        }
    })

    .controller('roomListCtl',function ($http,$scope,enume,$state) {})

    .controller('productListCtl',function ($http,$scope,enume,$state) {})

    .controller('warrantCtl',function ($http,$scope,enume,$state) {

        var selPros = null;
        var selClass = null;

        $scope.getSelPros = function(d){
            selPros = d;
        }
        $scope.getSelClass = function(d){
            selClass = d;
        }

        $scope.submitWarrant = function(){

            $scope.$broadcast("getCkPros");
            $scope.$broadcast("getCkClass");

            if(selClass.length != 1 || selClass.length == 0){
                alert("只能选择一个教室，可以选择多个课程!");
                return;
            }
            var res = [];
            for(var i=0;i< selPros.length;i++){
                res.push(selPros[i].tanentid);
            }

            var tmp = {
                classId: selClass[0].code,
                proIds:res.join(','),
                begin:$scope.beginDate,
                end:$scope.endDate
            };

            enume.postData("/cmsapi/tclassRegister/auth",tmp,function(d){
                alert("授权成功!");
            })
        }

    })

    .controller('productPreviewCtl',function ($http,$scope,enume,$state,$stateParams) {
        var id = $stateParams.id;

        $("#code1").qrcode({
            render: "table",
            width: 200, //宽度
            height:200, //高度
            text: "http://www.baidu.com" //任意内容
        });

        $("#code2").qrcode({
            render: "table",
            width: 200, //宽度
            height:200, //高度
            text: "http://www.baidu.com" //任意内容
        });
    })

    .controller('decorationCtl',function ($http,$scope,enume,$state,$stateParams) {
        var id = $stateParams.id;

        $("#code1").qrcode({
            render: "table",
            width: 200, //宽度
            height:200, //高度
            text: "http://www.baidu.com" //任意内容
        });

        $("#code2").qrcode({
            render: "table",
            width: 200, //宽度
            height:200, //高度
            text: "http://www.baidu.com" //任意内容
        });
    })

