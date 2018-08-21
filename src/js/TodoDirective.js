TodoApp.directive('todo',function(){
    return {
        restrict: 'E',
        template: "<h4>title: {{ todo.title }}</h4>" +
                   "<h4>description: {{ todo.description }}</h4>",
        scope: {
            todo: "="
        }
    }
})