angular.module('app')
    .controller('userManagementCtrl', function ($http,$scope,$state) {

    })
    .controller('classManagementCtrl',function($http,$scope,$state,enume){

    })
    .controller('createUserCtrl',function($http,$scope,$state,enume){

        $scope.useSex = enume.userSex;
        $scope.sex = "1";

        $scope.nationality = enume.nationality;
        $scope.nationalityNum = "1";

        $scope.place = enume.place;
        $scope.placeNum = "1";

        $scope.idType = enume.idType;
        $scope.idTypeNum = "1";

        $scope.maritalStatus = enume.maritalStatus;
        $scope.maritalStatusNum = "1";

        $scope.macao = enume.macao;
        $scope.macaoNum = "1";

        $scope.nation = enume.nation;
        $scope.nationNum = "1";

        $scope.provinces = enume.provinces;
        $scope.provincesNum = "";

        $scope.citys = [];
        $scope.citysNum = "";

        $scope.downs = [];
        $scope.downsNum = "";

        $scope.selectProvinces = function(){
            console.log($scope.provincesNum);
            $scope.citys = enume.citys;
        }

        $scope.selectCitys = function(){
            console.log($scope.citysNum);
            $scope.downs = enume.downs;
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

            $http({
                method:"POST",
                url:"data.json",
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
