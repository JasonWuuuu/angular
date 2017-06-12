var app = angular.module('demo');
app.controller('loginCtrl', function ($scope, $state) {
        $scope.login = {};
        $scope.login.loginname = "wuzixin";
        $scope.login.password = "123456";
        /* $scope.login.loginData={
         loginname:$scope.login.loginname,
         password:  $scope.login.password
         }*/
        $scope.login.loging = false;
        $scope.login.access = function () {
            if ($scope.login.password.replace(/\s/g, '') == "") {
                $scope.login.errorInfo = "密码不能为空";
                $scope.logining = false;
            } else if ($scope.login.password != '123456') {
                $scope.login.errorInfo = "密码错误";
                $scope.login.logining = false;
            } else {
                $state.go('project', {}, {reload: true});
            }
        }

    }
);//注册在provider中的服务，需要用到的时候直接写在函数参数列表中就可以注入