import { routes } from "routes"
import { TodoListComponent } from "components/todoList.component"
import { TodoService } from "services/todo.service"

describe("TodoListComponent rendering and interaction on '/' base path", () => {
    let componentDOMelement
    let stateService

    beforeAll(() => {
        angular
            .module("Test", [
                "ui.router"
            ])
            .config(routes)
            .component("todoList", TodoListComponent)
            .service("TodoService", TodoService)
    })
    beforeEach(angular.mock.module("Test"))

    beforeEach(inject(($rootScope, $compile, $state) => {
        let scope = $rootScope.$new()
        componentDOMelement = angular.element("<div ng-view></div>")

        $compile(componentDOMelement)(scope)

        $state.go("home")

        $rootScope.$digest()
    }))

    it("Should be render a list", () => {
        console.log(componentDOMelement[0].outerHTML)
    })
})
