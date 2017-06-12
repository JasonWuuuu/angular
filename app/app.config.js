var app = angular.module('demo', ['ngMaterial', 'ngMessages', 'ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/login");
    $stateProvider//配置不同哈希值切换的部分页面
        .state('main', {
            templateUrl: "src/views/main.html"// "src/views/main.html",

        })
        .state("login", {
            url: "/login",//这里设置的url是为了让上面urlRouterProcvider中设置的url能够访问到这个页面
            templateUrl: "src/views/login.html",//他的路由在模板中定义

        })
        .state('project', {
            url: "/project",
            templateUrl: "src/views/experiencer/project_manage.html"//这一页是新建项目的页面
        });

}]);
app.filter('pageDisplay', function () {
    return function (input, pageIndex, pageSize) {
        return input.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
    }
})
