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

        var dragEl = document.querySelector("#dragEl");
        function drop(e){
            e.stopPropagation();
            e.preventDefault();

            var fileList = e.dataTransfer.files;
            var oImg = document.createElement("img");
            var render = new FileReader();

            render.onerror = function(){
                alert("读取文件失败!");
            }

            render.onload = function(a){
                oImg.src = this.result;
                oImg.style.width = dragEl.style.width;
                oImg.style.height = dragEl.style.height;
                dragEl.innerHTML = "";
                document.querySelector("#dragEl").appendChild(oImg);
                console.log("ajax",111);
            }

            render.readAsDataURL(fileList[0]);
        }

        dragEl.addEventListener("dragstart",function(){},false);
        dragEl.addEventListener("drop",function(e){
            drop(e);
        },false);
        dragEl.addEventListener("dragover",function(e){
            e.stopPropagation();
            e.preventDefault();
        },false);

    })
    .controller('stuManagementCtrl',function($http,$scope,$state){

    });
