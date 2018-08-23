describe('Todo directive', function () {
    var element, scope, testTodo;

    beforeEach(module("TodoApp"));

    beforeEach(inject(function ($rootScope, $compile,$controller) {
        scope = $rootScope.$new();
        TodoController = $controller("TodoController",{$scope: scope});
    }));
    it('should assign todos to scope',function(){
        testTodo = {title:"scope test",descriprion:"testing scope assignment"};
        scope.todos = [testTodo];
        scope.$apply();
        expect(scope.todos.length).toEqual(1);
        expect(scope.todos[0]).toEqual(testTodo);
    })
})
