import { TodoListComponent } from "components/todoList.component"
import { TodoService } from "services/todo.service"

describe("TodoListComponent rendering and interaction", () => {
    let componentDOMelement

    beforeAll(() => {
        angular
            .module("Test", [])
            .component("todoList", TodoListComponent)
            .service("TodoService", TodoService)
    })

    beforeEach(angular.mock.module("Test"))

    beforeEach(inject(($rootScope, $compile) => {
        componentDOMelement = angular.element("<todo-list></todo-list>")
        $compile(componentDOMelement)({})
        $rootScope.$digest()
    }))

    it("Should be render a list", () => {
        console.log(componentDOMelement[0]);
    })
})
