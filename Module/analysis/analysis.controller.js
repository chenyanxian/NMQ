angular.module('app')
    .controller('surveyAnalysisCtrl', function ($http,$rootScope,$scope,enume,$state) {
        $scope.templateCates =  enume.templateCate;
        $scope.templateTypes = enume.templateType;
        $scope.selectCate = "";
        $scope.selectType = "";
        $scope.templateName = "";

        $scope.data = {
            templateCategory: "1",
            templateType: "2",
            title: "安全问卷调查哟",
            random: "",
            content: "一起来参与，赢大奖!",
            "data": [
                {
                    "title": "第一章节",
                    "code":"1",
                    "tms": [
                        {
                            "cate": "radio",
                            "bida": false,
                            "wtjtt": false,
                            code:"1-1",
                            "name": "教室安全关注过吗",
                            "sort": 1,
                            "items": [
                                {
                                    code:"1_1_1",
                                    "name": "有",
                                    "bz": false,
                                    pCount:10,
                                    "sort": 1,
                                    "percent":"30%"
                                },
                                {
                                    code:"1_1_2",
                                    "name": "没有",
                                    pCount:20,
                                    "bz": false,
                                    "sort": 2,
                                    "percent":"70%"
                                }
                            ]
                        },
                        {
                            "cate": "checkbox",
                            code:"1-2",
                            "bida": true,
                            "wtjtt": false,
                            "name": "怕不怕老师尾随",
                            "sort": 2,
                            "items": [
                                {
                                    code:"1-2_1",
                                    "name": "一点都不怕",
                                    "bz": false,
                                    pCount:10,
                                    "sort": 1,
                                    "percent":"30%"
                                },
                                {
                                    code:"1-2_2",
                                    pCount:30,
                                    "name": "非常害怕",
                                    "bz": false,
                                    "percent":"50%",
                                    "sort": 2
                                },
                                {
                                    code:"1-2_3",
                                    "name": "我不信你不怕",
                                    "bz": false,
                                    pCount:10,
                                    "percent":"30%",
                                    "sort": 3
                                },
                                {
                                    code:"1-2_4",
                                    "name": "你是不是傻",
                                    "percent":"20%",
                                    "bz": false,
                                    pCount:40,
                                    "sort": 4
                                }
                            ]
                        },
                        {
                            code:"1-3",
                            "cate": "textbox",
                            "bida": true,
                            "wtjtt": false,
                            "name": "基本信息",
                            "sort": 3,
                            "items": [
                                {
                                    code:"1-3_1",
                                    "name": "语文老师帅吗",
                                    "title": "语文老师帅吗",
                                    pCount:1,
                                    "bz": false,
                                    "percent":"30%",
                                    "sort": 1
                                },
                                {
                                    code:"1-3_2",
                                    "name": "数学老师帅吗",
                                    "title": "数学老师帅吗",
                                    "percent":"30%",
                                    "bz": false,
                                    pCount:101,
                                    "sort": 2
                                },
                                {
                                    code:"1-3_3",
                                    "name": "英语老师呢",
                                    "title": "英语老师呢？",
                                    "percent":"40%",
                                    pCount:1011,
                                    "bz": false,
                                    "sort": 3
                                }
                            ]
                        }
                    ]
                },
                {
                    "title": "第二章节",
                    code:"2",
                    "tms": [
                        {
                            code:"2_1",
                            "cate": "checkbox",
                            "bida": false,
                            "wtjtt": false,
                            "name": "小伙子们，你们速度真是杠杠的啊",
                            "sort": 1,
                            "items": [
                                {
                                    code:"2_1_1",
                                    "name": "是",
                                    pCount:130,
                                    "percent":"10%",
                                    "bz": false,
                                    "sort": 1
                                },
                                {
                                    code:"2_1_2",
                                    "name": "不是",
                                    "bz": false,
                                    pCount:140,
                                    "percent":"10%",
                                    "sort": 2
                                },
                                {
                                    code:"2_1_3",
                                    "name": "你猜",
                                    "percent":"80%",
                                    "bz": false,
                                    pCount:12,
                                    "sort": 3
                                }
                            ]
                        },
                        {
                            code:"2_2",
                            "cate": "pingfen",
                            "bida": false,
                            "wtjtt": false,
                            "name": "你对自己的长相打多少分?",
                            "sort": 2,
                            "items": [
                                {
                                    code:"2_2_1",
                                    "name": "小王",
                                    "number": "10",
                                    "percent":"50%",
                                    "bz": false,
                                    pCount:10,
                                    "sort": 1
                                },
                                {
                                    code:"2_2_2",
                                    "name": "渣渣",
                                    "number": "20",
                                    pCount:10,
                                    "percent":"20%",
                                    "bz": false,
                                    "sort": 2
                                },
                                {
                                    code:"2_2_3",
                                    "name": "山炮",
                                    pCount:12,
                                    "number": "30",
                                    "percent":"30%",
                                    "bz": false,
                                    "sort": 3
                                }
                            ]
                        },
                        {
                            "cate": "checkbox",
                            code:"2_3",
                            "bida": false,
                            "wtjtt": false,
                            "name": "我就问你，你是不是傻？",
                            "sort": 3,
                            "items": [
                                {
                                    code:"2_3_1",
                                    "name": "傻",
                                    "bz": false,
                                    pCount:101,
                                    "percent":"10%",
                                    "sort": 1
                                },
                                {
                                    code:"2_3_2",
                                    pCount:102,
                                    "name": "不傻",
                                    "percent":"80%",
                                    "bz": false,
                                    "sort": 2
                                },
                                {

                                    code:"2_3_3",
                                    "percent":"10%",
                                    "name": "傻你",
                                    "bz": false,
                                    pCount:130,
                                    "sort": 3
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        function getTotal(items){
            var t = 0;
            for(var i=0;i<items.length;i++){
                t += items[i].pCount;
            }
            return t;
        }

        function dealData(){
            var res = [];
            var d = $scope.data.data;
            for(var i=0;i< d.length;i++){
                var tmp = d[i].tms;
                for(var k=0;k<tmp.length;k++){
                    res.push({name:tmp[k].name,sort:tmp[k].sort,children:tmp[k].items,total:getTotal(tmp[k].items)});
                }
            }
            return res;
        }

        $scope.items = dealData();

    })
    .controller('surveyDetailCtrl',function($http,$rootScope,$scope,enume,$state){
        $scope.data = [
            {
                templateCategory: "1",
                templateType: "2",
                title: "安全问卷调查哟",
                random: "",
                content: "一起来参与，赢大奖!",
                "data": [
                    {
                        "title": "第一章节",
                        "code":"1",
                        "tms": [
                            {
                                code:"1-3",
                                "cate": "textbox",
                                "bida": true,
                                "wtjtt": false,
                                "name": "个人基本信息",
                                "sort": 3,
                                "items": [
                                    {
                                        code:"1-3_1",
                                        "value": "张三",
                                        "name": "姓名",
                                        "sort": 1
                                    },
                                    {
                                        code:"1-3_2",
                                        "value": "20",
                                        "name": "年龄",
                                        "sort": 2
                                    },
                                    {
                                        code:"1-3_3",
                                        "value": "18611701867",
                                        "name": "手机号码",
                                        "sort": 3
                                    }
                                ]
                            },
                            {
                                code:"1_2",
                                "cate": "radio",
                                "name": "性别",
                                value:"男",
                                "sort": 2
                            },
                        ]
                    },
                    {
                        "title": "第二章节",
                        code:"2",
                        "tms": [
                            {
                                code:"2_1",
                                "cate": "radio",
                                value:"A",
                                "name": "小伙子们，你们速度真是杠杠的啊",
                                "sort": 1,
                            },
                            {
                                code:"2_2",
                                "cate": "pingfen",
                                "name": "你对自己的长相打多少分?",
                                "sort": 2,
                                value:"40"
                            },
                            {
                                "cate": "checkbox",
                                code:"2_3",
                                "name": "我就问你，你是不是傻？",
                                "sort": 3,
                                value:"A,B"
                            }
                        ]
                    }
                ]
            },{
                templateCategory: "1",
                templateType: "2",
                title: "安全问卷调查哟",
                random: "",
                content: "一起来参与，赢大奖!",
                "data": [
                    {
                        "title": "第一章节",
                        "code":"1",
                        "tms": [
                            {
                                code:"1-3",
                                "cate": "textbox",
                                "bida": true,
                                "wtjtt": false,
                                "name": "个人基本信息",
                                "sort": 3,
                                "items": [
                                    {
                                        code:"1-3_1",
                                        "value": "张三1",
                                        "name": "姓名",
                                        "sort": 1
                                    },
                                    {
                                        code:"1-3_2",
                                        "value": "220",
                                        "name": "年龄",
                                        "sort": 2
                                    },
                                    {
                                        code:"1-3_3",
                                        "value": "182222611701867",
                                        "name": "手机号码",
                                        "sort": 3
                                    }
                                ]
                            },
                            {
                                code:"1_2",
                                "cate": "radio",
                                "name": "性别",
                                value:"男",
                                "sort": 2
                            },
                        ]
                    },
                    {
                        "title": "第二章节",
                        code:"2",
                        "tms": [
                            {
                                code:"2_1",
                                "cate": "radio",
                                value:"A",
                                "name": "小伙子们，你们速度真是杠杠的啊",
                                "sort": 1,
                            },
                            {
                                code:"2_2",
                                "cate": "pingfen",
                                "name": "你对自己的长相打多少分?",
                                "sort": 2,
                                value:"40"
                            },
                            {
                                "cate": "checkbox",
                                code:"2_3",
                                "name": "我就问你，你是不是傻？",
                                "sort": 3,
                                value:"A,B"
                            }
                        ]
                    }
                ]
            },{
                templateCategory: "1",
                templateType: "2",
                title: "安全问卷调查哟",
                random: "",
                content: "一起来参与，赢大奖!",
                "data": [
                    {
                        "title": "第一章节",
                        "code":"1",
                        "tms": [
                            {
                                code:"1-3",
                                "cate": "textbox",
                                "bida": true,
                                "wtjtt": false,
                                "name": "个人基本信息",
                                "sort": 3,
                                "items": [
                                    {
                                        code:"1-3_1",
                                        "value": "张三2",
                                        "name": "姓名",
                                        "sort": 1
                                    },
                                    {
                                        code:"1-3_2",
                                        "value": "2330",
                                        "name": "年龄",
                                        "sort": 2
                                    },
                                    {
                                        code:"1-3_3",
                                        "value": "1863333311701867",
                                        "name": "手机号码",
                                        "sort": 3
                                    }
                                ]
                            },
                            {
                                code:"1_2",
                                "cate": "radio",
                                "name": "性别",
                                value:"女",
                                "sort": 2
                            },
                        ]
                    },
                    {
                        "title": "第二章节",
                        code:"2",
                        "tms": [
                            {
                                code:"2_1",
                                "cate": "radio",
                                value:"A,B",
                                "name": "小伙子们，你们速度真是杠杠的啊",
                                "sort": 1,
                            },
                            {
                                code:"2_2",
                                "cate": "pingfen",
                                "name": "你对自己的长相打多少分?",
                                "sort": 2,
                                value:"409"
                            },
                            {
                                "cate": "checkbox",
                                code:"2_3",
                                "name": "我就问你，你是不是傻？",
                                "sort": 3,
                                value:"A,B,D"
                            }
                        ]
                    }
                ]
            }
        ];

        function getHeadInfo(data){
            var d = data.data;

            var colSpans = [];
            var wtTitles = [];
            for(var i=0;i< d.length;i++){

                var tmp = {name:d[i].title,colspan:0};

                var tms = d[i].tms;
                for(var k=0;k<tms.length;k++){
                    if(tms[k].cate == "textbox"){
                        var items = tms[k].items;
                        for(var u=0;u<items.length;u++){
                            tmp.colspan++;
                            wtTitles.push(items[u].name);
                        }
                    }else{
                        wtTitles.push(tms[k].name);
                        tmp.colspan++;
                    }
                }
                colSpans.push(tmp);
            }
            return {cols:colSpans,wtTitles:wtTitles};
        }
        var tmp = getHeadInfo($scope.data[0]);
        $scope.colSpan = tmp.cols;
        $scope.wtTitles = tmp.wtTitles;


        function getAllWentis(data){
            var wentis = [];

            for(var i=0;i< data.length;i++){

                var _d = data[i].data;
                var tmp = {children:[]};


                for(var j =0;j<_d.length;j++){
                    var tms = _d[j].tms;

                    for(var k=0;k<tms.length;k++){
                        if(tms[k].cate == "textbox"){
                            var items = tms[k].items;
                            for(var u=0;u<items.length;u++){
                                tmp.children.push(items[u].value);
                            }
                        }else{
                            tmp.children.push(tms[k].value);
                        }
                    }
                }



                wentis.push(tmp);
            }
            return wentis;
        }

        $scope.wentis = getAllWentis($scope.data);
    });
