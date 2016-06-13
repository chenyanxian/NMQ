'use strict';

angular.module('app')
    .controller('templateListCtrl',function ($http,$scope,enume,cooke,$state) {

        //初始化下拉框数据  模板分类,模板类型
        $scope.templateCates =  enume.templateCate;
        $scope.templateTypes = enume.templateType;
        $scope.selectCate = "";
        $scope.selectType = "";
        $scope.templateName = "";
        $scope.beginDate = "";
        $scope.endDate = "";

        //查询模板
        $scope.templateListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.createTemplate = function(){
            $state.go("template.templateCreate");
        }

        $scope.getUrl = function(){
            return "../../NMQ/data.json?=cate="+$scope.selectCate+"&selectType="+$scope.selectType + "&name="+$scope.templateName+"&begin="+$scope.beginDate + "&end="+$scope.endDate;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.goodsList = valueFromDirective;
        }
    });


angular.module('app')
    .controller('createTemplateCtrl', function ($http,$scope,enume) {

        $scope.templateCates =  enume.templateCate;
        $scope.templateTypes = enume.templateType;
        $scope.selectCate = "";
        $scope.selectType = "";

        //是否显示分数
        $scope.showScores = false;

        if($scope.selectCate == "2"){
            $scope.selectCate = true;
        }else{
            $scope.selectCate = false;
        }

        //映射问题类型
        $scope.getTiXing = function(cate){
            if(cate == "checkbox"){
                return "多选题";
            } else if(cate == "radio"){
                return "单选题";
            }else if(cate == "textbox"){
                return "填空题";
            }else if(cate == "pingfen"){
                return "评分提";
            } else{
                return "未知体型";
            }
        }

        $scope.data = {
            templateCategory: $scope.selectCate,
            templateType: $scope.selectType,
            title: "",
            random: "",
            content: "",
            "data": [
                //{
                //    "title": "第一章节",
                //    "tms": [
                //        {
                //            "cate": "radio",
                //            "bida": false,
                //            "wtjtt": false,
                //            "name": "教室安全关注过吗",
                //            scores:"5",
                //            "sort": 1,
                //            "items": [
                //                {
                //                    "name": "有",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "没有",
                //                    "bz": false,
                //                    "sort": 2,
                //                }
                //            ]
                //        },
                //        {
                //            "cate": "checkbox",
                //            "bida": true,
                //            "wtjtt": false,
                //            scores:"5",
                //            "name": "怕不怕老师尾随",
                //            "sort": 2,
                //            "items": [
                //                {
                //                    "name": "一点都不怕",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "非常害怕",
                //                    "bz": true,
                //                    "sort": 2
                //                },
                //                {
                //                    "name": "我不信你不怕",
                //                    "bz": false,
                //                    "sort": 3
                //                },
                //                {
                //                    "name": "你是不是傻",
                //                    "bz": false,
                //                    "sort": 4
                //                }
                //            ]
                //        },
                //        {
                //            "cate": "textbox",
                //            "bida": true,
                //            "wtjtt": false,
                //            "name": "填空题",
                //            scores:"15",
                //            "sort": 3,
                //            "items": [
                //                {
                //                    "name": "",
                //                    "title": "语文老师帅吗",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "",
                //                    "title": "数学老师帅吗",
                //                    "bz": false,
                //                    "sort": 2
                //                },
                //                {
                //                    "name": "",
                //                    "title": "英语老师呢？",
                //                    "bz": false,
                //                    "sort": 3
                //                }
                //            ]
                //        }
                //    ]
                //},
                //{
                //    "title": "第二章节",
                //    "tms": [
                //        {
                //            "cate": "checkbox",
                //            "bida": false,
                //            "wtjtt": false,
                //            scores:"10",
                //            "name": "小伙子们，你们速度真是杠杠的啊",
                //            "sort": 1,
                //            "items": [
                //                {
                //                    "name": "是",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "不是",
                //                    "bz": false,
                //                    "sort": 2
                //                },
                //                {
                //                    "name": "你猜",
                //                    "bz": false,
                //                    "sort": 3
                //                }
                //            ]
                //        },
                //        {
                //            "cate": "pingfen",
                //            "bida": false,
                //            "wtjtt": false,
                //            scores:"20",
                //            "name": "你对自己的长相打多少分?",
                //            "sort": 2,
                //            "items": [
                //                {
                //                    "name": "小王",
                //                    "number": "10",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "渣渣",
                //                    "number": "20",
                //                    "bz": false,
                //                    "sort": 2
                //                },
                //                {
                //                    "name": "山炮",
                //                    "number": "30",
                //                    "bz": false,
                //                    "sort": 3
                //                }
                //            ]
                //        },
                //        {
                //            "cate": "checkbox",
                //            "bida": false,
                //            "wtjtt": false,
                //            scores:"15",
                //            "name": "我就问你，你是不是傻？",
                //            "sort": 3,
                //            "items": [
                //                {
                //                    "name": "傻",
                //                    "bz": false,
                //                    "sort": 1
                //                },
                //                {
                //                    "name": "不傻",
                //                    "bz": false,
                //                    "sort": 2
                //                },
                //                {
                //                    "name": "傻你麻痹",
                //                    "bz": false,
                //                    "sort": 3
                //                }
                //            ]
                //        }
                //    ]
                //}
            ]
        };

        //当前选中的章节
        var currentZj = null;

        //添加题目的开关
        var addFlag = false;

        $scope.cls = "";
        $scope.showGY = false;

        if($scope.data.title){
            $scope.showGY = true;
        }

        $scope.addTmByZj = function(item){
            $scope.cls = "red";
            addFlag = true;
            currentZj = item;
        }

        $scope.deleteItem = function(item,data){
            data.remove(item);
        }

        $scope.addGy = function(){
            $scope.showGY = true;
            $scope.data.title = "设置概要标题调查问卷";
            $scope.data.content = "设置概要内容";
        }

        $scope.hideGy = function(){
            $scope.showGY = false;
            $scope.data.title = "";
            $scope.data.content = "";
        }

        $scope.addZj = function(){
            var tmp = {title:"设置章节标题",tms:[]};
            $scope.data.data.push(tmp);
        }

        $scope.changeCate = function(x){
            if(window.confirm("切换模板类型会导致已填写的数据丢失,你是否确定切换?")){
                $scope.data = {
                    templateCategory: x,
                    templateType: $scope.selectType,
                    title: "设置概要标题调查问卷",
                    random: "",
                    content: "设置概要内容",
                    "data":[]};
            }
            if(x == "2"){
                $scope.showScores = true;
            }else{
                $scope.showScores = false;
            }
        }

        $scope.changeType = function(x){
            $scope.data.templateType = x;
        }

        $scope.xzTm = function(){

        }


        function getPrevNextItem(item,data){
            var index = -1;
            for(var i=0;i<data.length;i++){
                if(item.equals(data[i])){
                    index = i;
                    break;
                }
            }
            return {prev:data[index-1],next:data[index+1]};
        }
        //章节的上下移动
        function getZjItems(){
            return jsCoreMethod.arraySortByField($scope.data.data,"sort",true,true);
        }

        $scope.moveUp = function(item,data){
            if(item.sort == getZjItems()[0].sort){
                alert("已经是第一个章节了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort -= 1;
            getPrevNextItem(item,data).prev.sort = tmp2;
            $scope.data.data = jsCoreMethod.arraySortByField($scope.data.data,"sort",true);
        }

        $scope.moveDown = function(item,data){
            var tmpRes = getZjItems();
            if(item.sort == tmpRes[tmpRes.length-1].sort){
                alert("已经是最后一个章节了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort += 1;
            getPrevNextItem(item,data).next.sort = tmp2;

            $scope.data.data = jsCoreMethod.arraySortByField($scope.data.data,"sort",true);
        }

        //题目的上下移动
        function getTmItems(items){
            return jsCoreMethod.arraySortByField(items,"sort",true);
        }

        $scope.moveUpTm = function(item,data,p1){

            if(item.sort == getTmItems(data)[0].sort){
                alert("已经是第一个题目了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort -= 1;
            getPrevNextItem(item,data).prev.sort = tmp2;
            //这里必须重新赋值, 否则不起作用
            p1.tms = jsCoreMethod.arraySortByField(data,"sort",true);
        }

        $scope.moveDownTm = function(item,data,p1){
            var tmpArr = getTmItems(data);
            if(item.sort == tmpArr[tmpArr.length-1].sort){
                alert("已经是最后 一个题目了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort += 1;
            getPrevNextItem(item,data).next.sort = tmp2;
            //这里必须重新赋值, 否则不起作用
            p1.tms = jsCoreMethod.arraySortByField(data,"sort",true,true);
        }

        $scope.upTop = function(item,data,p1){

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            var tmp3 = data[0].sort;
            var tmp4 = tmp3;

            item.sort = tmp4;
            data[0].sort = tmp2;

            p1.tms = jsCoreMethod.arraySortByField(data,"sort",true,true);
        }

        $scope.upLast = function(item,data,p1){
            var tmp1 = item.sort;
            var tmp2 = tmp1;
            var tmp3 = data[data.length-1].sort;
            var tmp4 = tmp3;

            item.sort = tmp4;
            data[data.length-1].sort = tmp2;

            p1.tms = jsCoreMethod.arraySortByField(data,"sort",true,true);
        }

        $scope.addDA = function(item,items,cate){

            var tmp = jsCoreMethod.arraySortByField(items,"sort",true);

            var count = tmp[tmp.length-1].sort + 1;
            if(cate == "textbox"){
                items.push({name:"请输入答案标题",title:"",bz:false,sort:count});
            }
            else if(cate == "pingfen"){
                items.push({name:"请输入答案标题",number:0,bz:false,sort:count});
            }else{
                items.push({name:"请输入答案标题",bz:false,sort:count});
            }

        }

        function getDaAnArray(items){
            return jsCoreMethod.arraySortByField(items,"sort",true);
        }

        $scope.upTopDA = function(item,items,p2){
            var currentSort = item.sort;
            if(currentSort == getDaAnArray(items)[0].sort){
                alert("已经是第一个答案了!");
                return;
            }
            var prevSort = currentSort - 1;

            getPrevNextItem(item,items).prev.sort = currentSort;
            item.sort = prevSort;

            var items = jsCoreMethod.arraySortByField(items,"sort",true,true);
            //重新赋值到数据源里面去
            p2.items = items;

        }

        $scope.upLastDA = function(item,items,p2){
            var currentSort = item.sort;
            var tmp = getDaAnArray(items);
            if(currentSort == tmp[tmp.length-1].sort){
                alert("已经是最后一个答案了!");
                return;
            }
            var nextSort = currentSort + 1;

            getPrevNextItem(item,items).next.sort = currentSort;
            item.sort = nextSort;

            var items = jsCoreMethod.arraySortByField(items,"sort",true,true);
            //重新赋值到数据源里面去
            p2.items = items;
        }

        function addTiMu(cate){
            if(addFlag == false){
                alert("您还没有选择章节!");
                return;
            }
            //还没有添加题目
            var tmp = null;
            if(!currentZj.tms ||currentZj.tms.length == 0){
                if(cate == "textbox"){
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:1,items:[
                        {name:"请输入问题内容",title:"请输入题目标题",bz:false,sort:1}
                    ]};

                } else if(cate == "pingfen"){
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:1,items:[
                        {name:"请输入问题内容",number:0,bz:false,sort:1}
                    ]};
                }else{
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:1,items:[
                        {name:"请输入问题标题",bz:false,sort:1}
                    ]};
                }
            }else{
                var res = jsCoreMethod.arraySortByField(currentZj.tms,"sort",true);
                var lastCount = res[res.length-1].sort + 1;

                if(cate == "textbox"){
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:lastCount,items:[
                        {name:"请输入问题内容",title:"请输入题目标题",bz:false,sort:1}
                    ]};
                }
                else if(cate == "pingfen"){
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:lastCount,items:[
                        {name:"请输入问题内容",number:0,bz:false,sort:1}
                    ]};
                }else{
                    tmp = {cate:cate,bida:false,wtjtt:false,scores:0,name:"请输入题目标题",sort:lastCount,items:[
                        {name:"请输入问题标题",bz:false,sort:1}
                    ]};
                }
            }
            currentZj.tms.push(tmp);
            addFlag = false;

            $scope.cls = "black";
        }

        $scope.addDanx = function(){
            addTiMu("radio");
        }

        $scope.addDuox = function(){
            addTiMu("checkbox");
        }

        $scope.addPf = function(){
            addTiMu("pingfen");
        }

        $scope.addTk = function(){
            addTiMu("textbox");
        }

        $scope.preview = function(){

        }

        $scope.doSubmit = function(){
            console.log($scope.data);
             $http.post("/cmsapi/template/add",{data:$scope.data}).success(function(d){
                 debugger
             })
        }

        $scope.doHoldSubmit = function(){

        }
    });

