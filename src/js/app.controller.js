const app = angular.module("TodoApp");
app.controller("TodoController",function($scope){
    $scope.name = "Todoapp"
    $scope.todo = {title:"firstTodo",description:"create todos directive"}
})