'use strict';

angular.module('app')
    .controller('templateListCtrl',function ($http,$scope,enume,cooke) {


        $scope.name = cooke.getUser();

        $scope.templateCate = [
            {"name":"问卷调查","val":"1"},
            {"name":"知识评测","val":"2"},
            {"name":"安全调查","val":"3"}];

        console.log(enume.templateCate);

        $scope.doSearch = function(){
            $scope.selectAll = false;
        }

        $scope.getUrl = function(){
            return "/newGoods/pageQuery?nameLike="
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.goodsList = valueFromDirective;
        }
    });


angular.module('app')
    .controller('createTemplateCtrl', function ($http,$scope) {

        //映射问题
        $scope.getTiXing = function(cate){
            if(cate == "checkbox"){
                return "多选题";
            } else if(cate == "radio"){
                return "单选题";
            } else{
                return "未知体型";
            }
        }

        //tag = 1 --->概要说明
        //tag = 2 --->章节题目
        $scope.data = [
            {tag:1,sort:1,title:"安全教育调查问卷",content:"各位同学，您好我是第一章节的描述信息"},
            {tag:2,sort:1,title:"第一章节",tms:[
                {cate:"checkbox",bida:true,wtjtt:false,name:"第一题哦",sort:1,items:[
                    {name:"选项aa",bz:true,sort:1},
                    {name:"选项bb",bz:true,sort:2},
                    {name:"选项cc",bz:false,sort:3}
                ]},
                {cate:"radio",bida:true,wtjtt:false,name:"第二题哦",sort:2,items:[
                    {name:"选项aa123123",bz:true,sort:1},
                    {name:"选项bbdddd",bz:true,sort:2},
                    {name:"选项ccasdad",bz:false,sort:3}
                ]},
                {cate:"checkbox",bida:true,wtjtt:false,name:"第三题哦",sort:3,items:[
                    {name:"选项azxczca",bz:true,sort:1},
                    {name:"zxc",bz:true,sort:2},
                    {name:"zxczxc",bz:false,sort:3}
                ]}
            ]},
            {tag:2,sort:5,title:"第二章节",tms:[
                {cate:"checkbox",bida:true,wtjtt:false,name:"第一题哦!!!!",sort:1,items:[
                    {name:"qqq",bz:false,sort:1},
                    {name:"www",bz:true,sort:2},
                    {name:"aaa",bz:false,sort:3}
                ]},
                {cate:"radio",bida:true,wtjtt:false,name:"第二题哦!!!",sort:2,items:[
                    {name:"傻",bz:true,sort:1},
                    {name:"不傻",bz:true,sort:2},
                    {name:"必须傻",bz:false,sort:3}
                ]},
                {cate:"checkbox",bida:true,wtjtt:false,name:"第三题哦!!!",sort:3,items:[
                    {name:"选项azxczca",bz:false,sort:1},
                    {name:"zxc",bz:true,sort:2},
                    {name:"zxczxc",bz:true,sort:3}
                ]}
            ]},
            {tag:2,sort:8,title:"第三章节",tms:[
                {cate:"checkbox",bida:true,wtjtt:false,name:"第一题哦!!!!",sort:1,items:[
                    {name:"qqq",bz:false,sort:1},
                    {name:"www",bz:true,sort:2},
                    {name:"aaa",bz:false,sort:3}
                ]},
                {cate:"radio",bida:true,wtjtt:false,name:"第二题哦!!!",sort:2,items:[
                    {name:"傻",bz:true,sort:1},
                    {name:"不傻",bz:true,sort:2},
                    {name:"必须傻",bz:false,sort:3}
                ]},
                {cate:"checkbox",bida:true,wtjtt:false,name:"第三题哦!!!",sort:3,items:[
                    {name:"选项azxczca",bz:false,sort:1},
                    {name:"zxc",bz:true,sort:2},
                    {name:"zxczxc",bz:true,sort:3}
                ]}
            ]}
        ];

        //radio checkbox textbox
        var currentZj = null;

        //添加题目的开关
        var addFlag = false;

        $scope.cls = "";


        $scope.addTmByZj = function(item){
            $scope.cls = "red";
            addFlag = true;
            currentZj = item;
        }

        $scope.deleteItem = function(item,data){
            data.remove(item);
        }

        $scope.addGy = function(){
            var tmp = {tag:1,title:"设置概要标题调查问卷",content:"设置概要内容",sort:1};
            $scope.data.push(tmp);
        }

        $scope.addZj = function(){
            var tmp = {tag:2,title:"设置章节标题",tms:[]};
            $scope.data.push(tmp);
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
        function getTag2Items(){
            var res = [];
            for(var i=0;i<$scope.data.length;i++){
                if($scope.data[i].tag == 2){
                    res.push($scope.data[i]);
                }
            }
            return jsCoreMethod.arraySortByField(res,"sort",true,true);
        }

        $scope.moveUp = function(item,data){
            if(item.sort == getTag2Items()[0].sort){
                alert("已经是第一个章节了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort -= 1;
            getPrevNextItem(item,data).prev.sort = tmp2;
            $scope.data = jsCoreMethod.arraySortByField($scope.data,"sort",true);
        }

        $scope.moveDown = function(item,data){
            var tmpRes = getTag2Items();
            if(item.sort == tmpRes[tmpRes.length-1].sort){
                alert("已经是最后一个章节了!");
                return;
            }

            var tmp1 = item.sort;
            var tmp2 = tmp1;
            item.sort += 1;
            getPrevNextItem(item,data).next.sort = tmp2;

            $scope.data = jsCoreMethod.arraySortByField($scope.data,"sort",true);
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

        $scope.addDA = function(item,items){

            var tmp = jsCoreMethod.arraySortByField(items,"sort",true);

            var count = tmp[tmp.length-1].sort + 1;

            items.push({name:"请输入答案标题",bz:false,sort:count});
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
                tmp = {cate:cate,bida:false,wtjtt:false,name:"请输入题目标题",sort:1,items:[
                    {name:"请输入问题标题",bz:false,sort:1}
                ]};

            }else{
                var res = jsCoreMethod.arraySortByField(currentZj.tms,"sort",true);
                var lastCount = res[res.length-1].sort + 1;
                tmp = {cate:cate,bida:false,wtjtt:false,name:"请输入题目标题",sort:lastCount,items:[
                    {name:"请输入问题标题",bz:false,sort:1}
                ]};
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
            addTiMu("radio");
        }

        $scope.addTk = function(){
            addTiMu("textbox");
        }
    });

