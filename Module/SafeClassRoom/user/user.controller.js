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
            $http.get("/cmsapi/user/delete/"+item.studentId).success(function(d){
                if(d.status.code == "1"){
                    $scope.userList = $scope.userList.deleteByKey("studentId",item.studentId);
                }else{
                    alert(d.status.message);
                }
            })
        }

    })
    .controller('classManagementCtrl',function($http,$scope,$state,enume){

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

        $scope.zp = "";

        $scope.utitle = "";

        $scope.showImg = false;


        if($stateParams.entity.tag == "edit"){
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
                $scope.zp = tmp.zp;
            })
            $scope.showImg = true;
            $scope.utitle = "人员修改";
        }else{
            $scope.showImg = false;
            $scope.utitle = "人员录入";
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
        var dragEl = document.querySelector("#fileLoad");
        dragEl.addEventListener("change",function(e){
            if(e.target.files.length == 0){
                alert("请选择图片上传!");
                return;
            }
            var file = e.target.files[0];
            var filereader = new FileReader();
            filereader.onload = function () {
                fileContent = this.result;
            }
            filereader.readAsDataURL(file);
        },false);

        $scope.createUser = function(){
            var tmp = {
                gh:$scope.gh,       //工号
                cym:$scope.cym,     //曾用名
                xm:$scope.xm,       //姓名
                ywxm:$scope.ywxm,   //英文姓名
                xmpy:$scope.xmpy,   //姓名拼音
                sex:$scope.sex,     //性别
                csrq:$scope.csrq,   //出生日期
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
                zp:fileContent                          //照片
            };

            var url = "";
            if($stateParams.entity.tag == "edit"){
                url = "/cmsapi/user/edit";
                tmp.studentId = $stateParams.entity.studentId;
            }else{
                url = "/cmsapi/user/add";
            }

            $http({
                method:"POST",
                url:url,
                data:tmp
            }).success(function(d){
                if(d.status.code == "1"){
                    alert("保存成功");
                    $state.go("safeRoom.userManagement");
                }else{
                    alert(d.status.message);
                }
            })

        }

        $scope.cancelUser = function(){
            $state.go("safeRoom.userManagement");
        }

    })
    .controller('stuManagementCtrl',function($http,$scope,$state){

    });
