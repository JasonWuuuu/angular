var app = angular.module('demo');


app.controller('projectController', ['$scope', '$mdSidenav', 'projectService',
    function ($scope, $mdSidenav, projectService) {
        $scope.headers = [{
            name: "项目名称"
        },
            {
                name: "项目启动时间"
            },
            {
                name: "已进行时间(天)"
            }];
        if (localStorage['project'] === undefined) {
            localStorage['project'] = "[]";//初始化存放数据的对象,必须有条件地初始化，否则每次刷新后数据消失
        }
        $scope.project = {};//project中存放新项目的所有数据，待被push到data中
        $scope.choices = {};
        var date = new Date();
        $scope.project.startTime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        $scope.project.sinceStart = "0";
        $scope.choices.programTypes = [{value: '0', name: "饮食"},
            {value: '1', name: "服装"},
            {value: '2', name: "销售"},
            {value: '3', name: "市场"},
            {value: '4', name: "生产"},
            {value: '5', name: "购物"},
            {value: '6', name: "读书"},
            {value: '7', name: "娱乐"}];
        $scope.allProject = angular.fromJson(window.localStorage['project']);
        $scope.pageindex = 0;
        $scope.pageSize = 5;
        $scope.pageNum = Math.ceil($scope.allProject.length / $scope.pageSize);

        /*localStorage的用法：向属性中存放数据  json字符串  ，而不是js对象*/
        var storage = angular.fromJson(localStorage['project']);
        $scope.showNavList = function () {
            $mdSidenav('project-nav').toggle();
        };
        $scope.saveNewProject = function () {
            $mdSidenav('project-nav').toggle();
            projectService.saveNewProject($scope.project);
            $scope.allProject = angular.fromJson(window.localStorage['project']);
            $scope.pageNum = Math.ceil($scope.allProject.length / $scope.pageSize);

        };
        $scope.pageSwitch = function (direcion) {
            var index = $scope.pageindex;
            var length = $scope.allProject.length / $scope.pageSize;
            if (index <= 0 && (!direcion)) {
                alert("已经是第一页");
                return;
            }
            else if (index >= length - 1 && direcion) {
                alert("已经是最后一页");
                return;
            }
            else {
                if (direcion) {
                    $scope.pageindex++;
                }
                else {
                    $scope.pageindex--;
                }
            }
        };
        $scope.sizeSwitch = function (size) {
            $scope.pageindex = 0;
            $scope.pageSize = size;
            $scope.pageNum = Math.ceil($scope.allProject.length / $scope.pageSize);
        }

    }]);