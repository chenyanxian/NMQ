angular.module('app')
    .controller('userManagementCtrl', function ($http,$scope,$state,enume) {

        $scope.userTypes =  [];
        $scope.userTypeNum = "";
        $scope.uName = "";

        $scope.teachers = [];
        $scope.teacherNum = "";

        $scope.beginDate = "";
        $scope.endDate = "";

        $scope.userList = [];

        $scope.userListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.goAdd = function(){
            $state.go("safeRoom.createUser",{entity:{tag:"add"}});
        }

        $scope.getUrl = function(){
            return "/cmsapi/user/query?studentId=&name="+$scope.uName+"&begin="+$scope.beginDate + "&end="+$scope.endDate;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.userList = valueFromDirective;
        }

        $scope.editUser = function(item){
            $state.go("safeRoom.createUser",{entity:{tag:"edit",studentId:item.studentId}});
        }

        $scope.deleteUser = function(item){
            $http.get("/cmsapi/user/delete/"+item.id).success(function(d){
                if(d.status.code == "1"){
                    $scope.userList = $scope.userList.deleteByKey("id",item.id);
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.goDetail = function(item){
            $state.go("safeRoom.createUser",{entity:{tag:"detail",studentId:item.studentId}});
        }

    })
    .controller('classManagementCtrl',function($http,$scope,$state,enume){

        $scope.bjList = [];

        $scope.xxmc = "";
        $scope.xnmc = "";
        $scope.njmc = "";
        $scope.bjmc = "";
        $scope.errorXsl = false;

        $scope.getUrl = function(){
            return "/cmsapi/tclass/query?xxmc="+$scope.xxmc+"&xnmc="+$scope.xnmc+"&njmc="+$scope.njmc+"&bjmc="+$scope.bjmc;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.bjList = valueFromDirective;
        }

        var fileContent = "";
        jsCoreMethod.fileReader("fileLoad",function(d){
            fileContent = d;
        },"file")

        $scope.uploadFile = function(){
            if(!fileContent){
                alert("请选择excel文件上传!");
                return;
            }
            $http({
                method:"POST",
                url:"/cmsapi/tclass/upload",
                data:{data:fileContent}
            }).success(function(d){
                if(d.status.code == "1"){
                    $scope.$broadcast("searchByFilter");
                    $scope.errorXsl = false;
                }else if(d.status.code == "3"){
                    $scope.errorXsl = true;
                    $scope.errorUrl = d.data;
                    alert("excel文件里有错误，请下载查看详情!");
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.seachBj = function(){
            $scope.$broadcast("searchByFilter");
        }
    })
    .controller('createUserCtrl',function($http,$scope,$state,enume,$stateParams){

        $scope.useSex = enume.userSex;
        $scope.sex = "";
        $scope.nationalityNum = "";
        $scope.placeNum = "";
        $scope.idType = enume.idType;
        $scope.idTypeNum = "";
        $scope.maritalStatus = enume.maritalStatus;
        $scope.maritalStatusNum = "";
        $scope.macao = enume.macao;
        $scope.macaoNum = "";
        $scope.nationNum = "";
        $scope.provinces = enume.provinces;
        $scope.provincesNum = "";
        $scope.citys = [];
        $scope.citysNum = "";
        $scope.downs = [];
        $scope.downsNum = "";

        $scope.uRylxs = enume.uRylxs;
        $scope.uRylxNum = "";
        $scope.uGws = enume.uGws;
        $scope.uGwNum = "";

        $scope.utitle = "";
        $scope.showImg = false;

        $scope.showButton = true;

        function getUserByStuId(){

            enume.getData("/cmsapi/user/queryById?studentId="+$stateParams.entity.studentId,function(tmp){
                $scope.sex = tmp.sex;
                $scope.nationalityNum = tmp.nationalityNum;
                $scope.placeNum = tmp.placeNum;
                $scope.idTypeNum = tmp.idTypeNum;
                $scope.maritalStatusNum = tmp.maritalStatusNum;
                $scope.macaoNum = tmp.macaoNum;
                $scope.nationNum = tmp.nationNum;
                $scope.provincesNum = tmp.provincesNum;
                $scope.citysNum = tmp.citysNum;
                $scope.downsNum = tmp.downsNum;
                $scope.gh = tmp.gh;
                $scope.cym = tmp.cym;
                $scope.xm = tmp.xm;
                $scope.ywxm = tmp.ywxm;
                $scope.xmpy = tmp.xmpy;
                $scope.zjhm = tmp.zjhm;
                $scope.csrq = new Date(tmp.csrq);
                $scope.uRylxNum = tmp.uRylxNum;
                $scope.uGwNum = tmp.uGwNum;

                document.querySelector("#img1").setAttribute("src",tmp.zp);
            })
        }

        if($stateParams.entity.tag == "edit"){
            getUserByStuId();
            $scope.showImg = true;
            $scope.utitle = "人员修改";
            $scope.showButton = true;
        }
        else if($stateParams.entity.tag == "detail"){
            getUserByStuId();
            $scope.showImg = true;
            $scope.utitle = "人员详情";
            $scope.showButton = false;
        }
        else{
            $scope.showImg = false;
            $scope.utitle = "人员录入";
            $scope.showButton = true;
        }

        $scope.selectProvinces = function(){
            enume.getData("/cmsapi/user/queryCitys?province="+$scope.provincesNum,function(tmp){
                $scope.citys = tmp;
            })
        }

        $scope.selectCitys = function(){
            enume.getData("/cmsapi/user/queryAreas?city="+$scope.citysNum,function(tmp){
                $scope.downs = tmp;
            })
        }

        var fileContent = "";
        jsCoreMethod.fileReader("fileLoad",function(d){
            fileContent = d;
            document.querySelector("#img1").setAttribute("src",d);
            $scope.showImg = true;
            $scope.$apply();
        })

        $scope.createUser = function(){
            var tmp = {
                gh:$scope.gh,       //工号
                cym:$scope.cym,     //曾用名
                xm:$scope.xm,       //姓名
                ywxm:$scope.ywxm,   //英文姓名
                xmpy:$scope.xmpy,   //姓名拼音
                sex:$scope.sex,     //性别
                csrq:new Date($scope.csrq).format(),   //出生日期
                placeNum:$scope.placeNum,  //籍贯
                nationalityNum:$scope.nationalityNum,   //国籍
                nationNum:$scope.nationNum,             //民族
                provincesNum:$scope.provincesNum,       //省
                citysNum:$scope.citysNum,               //市
                downsNum:$scope.downsNum,               //区
                idTypeNum:$scope.idTypeNum,             //证件类型
                zjhm:$scope.zjhm,                       //证件号码
                maritalStatusNum:$scope.maritalStatusNum,//婚姻状况
                macaoNum:$scope.macaoNum,                //港澳台外
                uGwNum:$scope.uGwNum,                   //岗位
                uRylxNum:$scope.uRylxNum                //人员类型
            };

            var url = "";
            if($stateParams.entity.tag == "edit"){
                url = "/cmsapi/user/update";
                tmp.studentId = $stateParams.entity.studentId;
                tmp.zp = document.querySelector("#img1").getAttribute("src");
            }else{
                url = "/cmsapi/user/add";
                tmp.zp = fileContent;
            }

            enume.postData(url,tmp,function(d){
                alert("保存成功");
                $state.go("safeRoom.userManagement");
            })

            //$http({
            //    method:"POST",
            //    url:url,
            //    data:tmp
            //}).success(function(d){
            //    if(d.status.code == "1"){
            //
            //    }else{
            //        alert(d.status.message);
            //    }
            //})

        }

        $scope.cancelUser = function(){
            $state.go("safeRoom.userManagement");
        }

    })
    .controller('stuManagementCtrl',function($http,$scope,$state,enume){
        $scope.uList = [];

        $scope.xxmc = "";
        $scope.xnmc = "";
        $scope.njmc = "";
        $scope.bjmc = "";
        $scope.errorXsl = false;

        $scope.getUrl = function(){
            return "/cmsapi/tclass/queryStudent?xxmc="+$scope.xxmc+"&xnmc="+$scope.xnmc+"&njmc="+$scope.njmc+"&bjmc="+$scope.bjmc;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.uList = valueFromDirective;
        }

        var fileContent = "";

        jsCoreMethod.fileReader("fileLoad",function(d){
            fileContent = d;
        },"file")

        $scope.uploadFile = function(){
            if(!fileContent){
                alert("请选择excel文件上传!");
                return;
            }
            $http({
                method:"POST",
                url:"/cmsapi/tclass/uploadStudent",
                data:{data:fileContent}
            }).success(function(d){
                if(d.status.code == "1"){
                    $scope.$broadcast("searchByFilter");
                    $scope.errorXsl = false;
                    alert("excel文件里有错误，请下载查看详情!");
                }else if(d.status.code == "3"){
                    $scope.errorXsl = true;
                    $scope.errorUrl = d.data;
                }else{
                    alert(d.status.message);
                }
            })
        }

        $scope.seachXs = function(){
            $scope.$broadcast("searchByFilter");
        }
    });
