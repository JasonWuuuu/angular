var app = angular.module('demo');
app.provider('projectService', function () {
    var services = {};
    services.$get=function(){
          return  {
                saveNewProject:function (project) {
                    var data = angular.fromJson(localStorage['project']);
                    console.log(project);
                    data.push(project);
                    window.localStorage['project'] = angular.toJson(data, true);
                }
            }
    }
    return services;
});
