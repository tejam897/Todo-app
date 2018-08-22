const app = angular.module("TodoApp");
app.controller("TodoController",function($scope){
    $scope.name = "Todoapp"
    $scope.todos = [{title:"firstTodo",description:"create todos directive"},
                    {title:"secondTodo",description:"Use ng-repeat with todo directive"},
                    ]
})