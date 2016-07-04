angular.module('app')
    .controller('surveyAnalysisListCtrl', function ($http,$scope,enume,$state) {

        //初始化下拉框数据
        $scope.kcxl = enume.kcxl;
        $scope.kcxlNum = "";

        $scope.kczt = enume.kczt;
        $scope.kcztNum = "";

        $scope.xn = enume.xn;
        $scope.xnNum = "";

        $scope.nj=enume.nj;
        $scope.njNum ="";

        $scope.bj = enume.bj;
        $scope.bjNum = "";

        $scope.skbh = enume.skbh;
        $scope.skbhNum = "";

        $scope.templateList = [];

        $scope.getRemark = function(item){
            return jsCoreMethod.cutString(item.remark,5);
        }

        //查询模板
        $scope.templateListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.getUrl = function(){
            return "/cmsapi/template/query?category=&type=&name=&begin=&end=";
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.templateList = valueFromDirective;
        }

        $scope.goDetail = function(item){
            $state.go("safeRoom.surveyAnalysisDetail",{id:item.code});
        }
    })
    .controller('surveyAnalysisDetailCtrl',function($http,$scope,enume,$state,$stateParams){

        $scope.id = $stateParams.id;
        if(!$stateParams.id){
            $state.go("safeRoom.surveyAnalysisList");
            return;
        }

        $scope.data = null;
        enume.getData("/cmsapi/template/statistics?code="+$scope.id,function(d){
            if(d.templateType == "kaoti"){
                $scope.scoresShow = true;
            }else{
                $scope.scoresShow = false;
            }
            $scope.data = d;
            $scope.items = dealData();
        })

        //$scope.data = {
        //    templateCategory: "1",
        //    templateType: "2",
        //    title: "安全问卷调查哟",
        //    random: "",
        //    content: "一起来参与，赢大奖!",
        //    "data": [
        //        {
        //            "title": "第一章节",
        //            "code":"1",
        //            "tms": [
        //                {
        //                    "cate": "checkbox",
        //                    code:"1-2",
        //                    "bida": true,
        //                    "wtjtt": false,
        //                    "name": "怕不怕老师尾随",
        //                    "sort": 2,
        //                    bz:"A,B",
        //                    scores:10,
        //                    "items": [
        //                        {
        //                            code:"1-2_1",
        //                            "name": "一点都不怕",
        //                            "bz": false,
        //                            pCount:10,
        //                            "sort": 1,
        //                            "percent":"30%"
        //                        },
        //                        {
        //                            code:"1-2_2",
        //                            pCount:30,
        //                            "name": "非常害怕",
        //                            "bz": false,
        //                            "percent":"50%",
        //                            "sort": 2
        //                        },
        //                        {
        //                            code:"1-2_3",
        //                            "name": "我不信你不怕",
        //                            "bz": false,
        //                            pCount:10,
        //                            "percent":"30%",
        //                            "sort": 3
        //                        },
        //                        {
        //                            code:"1-2_4",
        //                            "name": "你是不是傻",
        //                            "percent":"20%",
        //                            "bz": false,
        //                            pCount:40,
        //                            "sort": 4
        //                        }
        //                    ]
        //                },
        //                {
        //                    "cate": "radio",
        //                    "bida": false,
        //                    "wtjtt": false,
        //                    bz:"A,C",
        //                    scores:101,
        //                    code:"1-1",
        //                    "name": "教室安全关注过吗",
        //                    "sort": 1,
        //                    "items": [
        //                        {
        //                            code:"1_1_1",
        //                            "name": "有",
        //                            "bz": false,
        //                            pCount:10,
        //                            "sort": 1,
        //                            "percent":"30%"
        //                        },
        //                        {
        //                            code:"1_1_2",
        //                            "name": "没有",
        //                            pCount:20,
        //                            "bz": false,
        //                            "sort": 2,
        //                            "percent":"70%"
        //                        }
        //                    ]
        //                },
        //                {
        //                    code:"1-3",
        //                    "cate": "textbox",
        //                    "bida": true,
        //                    scores:0,
        //                    bz:"",
        //                    "wtjtt": false,
        //                    "name": "基本信息",
        //                    "sort": 3,
        //                    "items": [
        //                        {
        //                            code:"1-3_1",
        //                            "name": "语文老师帅吗",
        //                            "title": "语文老师帅吗",
        //                            pCount:1,
        //                            "bz": false,
        //                            "percent":"30%",
        //                            "sort": 1
        //                        },
        //                        {
        //                            code:"1-3_2",
        //                            "name": "数学老师帅吗",
        //                            "title": "数学老师帅吗",
        //                            "percent":"30%",
        //                            "bz": false,
        //                            pCount:101,
        //                            "sort": 2
        //                        },
        //                        {
        //                            code:"1-3_3",
        //                            "name": "英语老师呢",
        //                            "title": "英语老师呢？",
        //                            "percent":"40%",
        //                            pCount:1011,
        //                            "bz": false,
        //                            "sort": 3
        //                        }
        //                    ]
        //                }
        //            ]
        //        },
        //        {
        //            "title": "第二章节",
        //            code:"2",
        //            "tms": [
        //                {
        //                    code:"2_2",
        //                    "cate": "pingfen",
        //                    "bida": false,
        //                    "wtjtt": false,
        //                    scores:10,
        //                    bz:"A,b",
        //                    "name": "你对自己的长相打多少分?",
        //                    "sort": 2,
        //                    "items": [
        //                        {
        //                            code:"2_2_1",
        //                            "name": "小王",
        //                            "number": "10",
        //                            "percent":"50%",
        //                            "bz": false,
        //                            pCount:10,
        //                            "sort": 1
        //                        },
        //                        {
        //                            code:"2_2_2",
        //                            "name": "渣渣",
        //                            "number": "20",
        //                            pCount:10,
        //                            "percent":"20%",
        //                            "bz": false,
        //                            "sort": 2
        //                        },
        //                        {
        //                            code:"2_2_3",
        //                            "name": "山炮",
        //                            pCount:12,
        //                            "number": "30",
        //                            "percent":"30%",
        //                            "bz": false,
        //                            "sort": 3
        //                        }
        //                    ]
        //                },
        //                {
        //                    code:"2_1",
        //                    "cate": "checkbox",
        //                    "bida": false,
        //                    scores:30,
        //                    bz:"A,C",
        //                    "wtjtt": false,
        //                    "name": "小伙子们，你们速度真是杠杠的啊",
        //                    "sort": 1,
        //                    "items": [
        //                        {
        //                            code:"2_1_1",
        //                            "name": "是",
        //                            pCount:130,
        //                            "percent":"10%",
        //                            "bz": false,
        //                            "sort": 1
        //                        },
        //                        {
        //                            code:"2_1_2",
        //                            "name": "不是",
        //                            "bz": false,
        //                            pCount:140,
        //                            "percent":"10%",
        //                            "sort": 2
        //                        },
        //                        {
        //                            code:"2_1_3",
        //                            "name": "你猜",
        //                            "percent":"80%",
        //                            "bz": false,
        //                            pCount:12,
        //                            "sort": 3
        //                        }
        //                    ]
        //                },
        //                {
        //                    "cate": "checkbox",
        //                    code:"2_3",
        //                    "bida": false,
        //                    "wtjtt": false,
        //                    scores:50,
        //                    bz:"C",
        //                    "name": "我就问你，你是不是傻？",
        //                    "sort": 3,
        //                    "items": [
        //                        {
        //                            code:"2_3_1",
        //                            "name": "傻",
        //                            "bz": false,
        //                            pCount:101,
        //                            "percent":"10%",
        //                            "sort": 1
        //                        },
        //                        {
        //                            code:"2_3_2",
        //                            pCount:102,
        //                            "name": "不傻",
        //                            "percent":"80%",
        //                            "bz": false,
        //                            "sort": 2
        //                        },
        //                        {
        //
        //                            code:"2_3_3",
        //                            "percent":"10%",
        //                            "name": "傻你",
        //                            "bz": false,
        //                            pCount:130,
        //                            "sort": 3
        //                        }
        //                    ]
        //                }
        //            ]
        //        }
        //    ]
        //};

        function getTotal(items){
            var t = 0;
            for(var i=0;i<items.length;i++){
                t += items[i].pcount;
            }
            return t;
        }

        $scope.getBz =function(bz){
            if(bz){
                return "(标准答案)";
            }else{
                return "";
            }
        }

        function dealData(){
            var res = [];
            var d = $scope.data.data;
            for(var i=0;i< d.length;i++){
                var tmp = d[i].tms;
                for(var k=0;k<tmp.length;k++){
                    res.push({scores:tmp[k].scores,name:tmp[k].name,sort:tmp[k].sort,children:tmp[k].items,total:getTotal(tmp[k].items)});
                }
            }
            return res;
        }
    })
    .controller('surveyInfoListCtrl',function($http,$scope,enume,$state){

        //初始化下拉框数据
        $scope.kcxl = enume.kcxl;
        $scope.kcxlNum = "";

        $scope.kczt = enume.kczt;
        $scope.kcztNum = "";

        $scope.xn = enume.xn;
        $scope.xnNum = "";

        $scope.nj=enume.nj;
        $scope.njNum ="";

        $scope.bj = enume.bj;
        $scope.bjNum = "";

        $scope.skbh = enume.skbh;
        $scope.skbhNum = "";

        $scope.templateList = [];

        //查询模板
        $scope.templateListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.getRemark = function(item){
            return jsCoreMethod.cutString(item.remark,5);
        }

        $scope.getUrl = function(){
            return "/cmsapi/template/query?category=&type=&name=&begin=&end=";
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.templateList = valueFromDirective;
        }

        $scope.goDetail = function(item){
            $state.go("safeRoom.surveyInfoDetail",{id:item.code});
        }

    })
    .controller('surveyInfoDetailCtrl',function($http,$scope,$state,enume,$stateParams){

        $scope.id = $stateParams.id;
        if(!$stateParams.id){
            $state.go("safeRoom.surveyInfoList");
            return;
        }

        $scope.data = null;
        //$scope.data = {
        //        templateCategory: "1",
        //        templateType: "2",
        //        title: "安全问卷调查哟",
        //        random: "",
        //        content: "一起来参与，赢大奖!",
        //        "data": [
        //            {
        //                "title": "第二章节",
        //                code:"2",
        //                "tms": [
        //                    {
        //                        code:"2_1",
        //                        "cate": "radio",
        //                        value:"A-B-C-D-A,B-C",
        //                        "name": "小伙子们，你们速度真是杠杠的啊",
        //                        "sort": 1,
        //                        "bz":"C",
        //                        "scores":10
        //                    },
        //                    {
        //                        code:"2_2",
        //                        "cate": "pingfen",
        //                        "name": "你对自己的长相打多少分?",
        //                        "sort": 2,
        //                        value:"40-20-10-20-10-10",
        //                        "bz":"C",
        //                        "scores":10
        //                    },
        //                    {
        //                        "cate": "checkbox",
        //                        code:"2_3",
        //                        "name": "我就问你，你是不是傻？",
        //                        "sort": 3,
        //                        value:"A,B-C-C-C-A-D",
        //                        "bz":"C",
        //                        "scores":10
        //                    }
        //                ]
        //            },
        //            {
        //                "title": "第一章节",
        //                "code":"1",
        //                "tms": [
        //                    {
        //                        code:"1-3",
        //                        "cate": "textbox",
        //                        "bida": true,
        //                        "wtjtt": false,
        //                        "name": "个人基本信息",
        //                        "sort": 3,
        //                        "items": [
        //                            {
        //                                code:"1-3_1",
        //                                "value": "张三-李四-王五-张三-李四-王五",
        //                                "name": "姓名",
        //                                "sort": 1,
        //                                "bz":"C",
        //                                "scores":10
        //                            },
        //                            {
        //                                code:"1-3_2",
        //                                "value": "20-40-20-10-20-10",
        //                                "name": "年龄",
        //                                "sort": 2,
        //                                "bz":"C",
        //                                "scores":10
        //                            },
        //                            {
        //                                code:"1-3_3",
        //                                "value": "18611701867-18611701867-18611701867-18611701867-18611701867-18611701867",
        //                                "name": "手机号码",
        //                                "sort": 3,
        //                                "bz":"C",
        //                                "scores":10
        //                            }
        //                        ]
        //                    },
        //                    {
        //                        code:"1_2",
        //                        "cate": "radio",
        //                        "name": "性别",
        //                        value:"男-女-男-女-男-女",
        //                        "sort": 2,
        //                        "bz":"C",
        //                        "scores":10
        //                    },
        //                ]
        //            }
        //        ]
        //    };

        function getHeadInfo(data){
            var d = data.data;

            var colSpans = [];
            var wtTitles = [];
            for(var i=0;i< d.length;i++){

                var tmp = {name:d[i].title,colspan:0};

                var count = 0;

                var tms = d[i].tms;
                for(var k=0;k<tms.length;k++){
                    if(tms[k].cate == "textbox"){
                        var items = tms[k].items;
                        for(var u=0;u<items.length;u++){
                            count++;
                            tmp.colspan++;
                            wtTitles.push({sort:count,name:items[u].name});
                        }
                    }else{
                        count++;
                        wtTitles.push({sort:count,name:tms[k].name});
                        tmp.colspan++;
                    }
                }
                colSpans.push(tmp);
            }
            return {cols:colSpans,wtTitles:wtTitles};
        }


        $scope.scoresShow = false;
        $scope.details = [];
        $scope.wentis = []

        function getAllWentis(data){

            var tmpRes = {wentis:[],res:[]};

            for(var i=0;i< data.length;i++){
                var tms = data[i].tms;
                for(var k=0;k<tms.length;k++){
                    if(tms[k].cate == "textbox"){
                        var items = tms[k].items;
                        for(var u=0;u<items.length;u++){
                            tmpRes.wentis.push(items[u]);
                        }
                    }else{
                        tmpRes.wentis.push(tms[k]);
                    }
                }
            }

            var len = tmpRes.wentis[0].value.split('-').length;
            //scores
            for(var i=0;i<len;i++){
                var tmp = {children:[]};
                for(var k=0;k<tmpRes.wentis.length;k++){
                    tmp.children.push({name:tmpRes.wentis[k].value.split('-')[i]});
                }
                tmpRes.res.push(tmp);
            }

            return tmpRes;
        }

        enume.getData("/cmsapi/template/resultInfo?code="+$scope.id,function(d){
            if(d.templateType == "kaoti"){
                $scope.scoresShow = true;
            }else{
                $scope.scoresShow = false;
            }

            $scope.data = d;
            var tmp = getHeadInfo($scope.data);
            $scope.colSpan = tmp.cols;
            $scope.wtTitles = tmp.wtTitles;
            var res = getAllWentis(d);
            $scope.details = res.res;
            $scope.wentis = res.wentis;
        })
        //
        //var res = getAllWentis($scope.data.data);
        //$scope.details = res.res;
        //$scope.wentis = res.wentis;
    })
    .controller('lessonsListCtrl', function ($http,$scope,enume,$state) {

        $scope.kcxl = enume.kcxl;
        $scope.kcxlNum = "";

        $scope.kczt = enume.kczt;
        $scope.kcztNum = "";

        $scope.xn = enume.xn;
        $scope.xnNum = "";

        $scope.nj=enume.nj;
        $scope.njNum ="";

        $scope.bj = enume.bj;
        $scope.bjNum = "";

        $scope.skbh = enume.skbh;
        $scope.skbhNum = "";

        $scope.bDate ="";
        $scope.eDate = "";

        //查询模板
        $scope.templateListSearch = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.getUrl = function(){
            return "/cmsapi/teaching/log/query?kcxlmc=&kcztmc=&xn=&njmc=&bjmc=&=skbh=&begin="+$scope.bDate+"&end="+$scope.eDate;
        }

        $scope.directiveCallBack = function(valueFromDirective){
            $scope.lessonsList = valueFromDirective;
        }

        $scope.search = function(){
            $scope.$broadcast("searchByFilter");
        }

        $scope.goJsPingjia = function(code){
            $state.go("safeRoom.surveyInfoDetail",{id:code});
        }

        $scope.goXsPingjia = function(code){
            $state.go("safeRoom.surveyInfoDetail",{id:code});
        }
    })