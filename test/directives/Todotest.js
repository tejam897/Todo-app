describe('Todo directive', function () {
    var element, scope;

    beforeEach(module("TodoApp"));

    beforeEach(inject(function ($rootScope, $compile,$controller) {
        scope = $rootScope.$new();
        TodoController = $controller("TodoController",{$scope: scope});
        element = angular.element(
            "<todo todo=todo>"
        );
        scope.todo = {title:"testDirectives",description:"learn directive testing"};
        $compile(element)(scope);
        scope.$digest();
    }));
    it('should contain title and discription',function(){
        var items = element.find("h4");
        expect(items.length).toEqual(2);
    })
    it('should contain title and discription content',function(){
        var items = element.find("h4");
        expect(items[0].innerHTML).toContain('testDirectives');
        expect(items[1].innerHTML).toContain('learn directive testing');
    })
})