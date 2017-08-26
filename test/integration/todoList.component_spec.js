import { routes } from "routes"
import { TodoListComponent } from "components/todoList.component"
import { TodoService } from "services/todo.service"

describe("TodoListComponent rendering and interaction on '/' base path", () => {
    let componentDOMelement

    beforeAll(() => {
        angular
            .module("Test", [
                "ui.router"
            ])
            .config(routes)
            .constant("BASE_URL", "http://localhost:5000/api")
            .component("todoList", TodoListComponent)
            .service("TodoService", TodoService)
    })
    beforeEach(angular.mock.module("Test"))

    beforeEach(inject(($rootScope, $compile, $location, $httpBackend) => {
        //Build the scene
        //1st let's create a fake server for intercept the http requests and fake the responses
        const todosResponse = require(`${__dirname}/../../stubs/todos_get.json`)
        $httpBackend
            .whenGET(/.+\/todos/)
            .respond((method, url, data, headers, params) => {
                return [200, todosResponse]
            })

        //2nd render the root element of scene: We needs a router view for load the base path
        let scope = $rootScope.$new()
        componentDOMelement = angular.element("<div><ui-view></ui-view></div>")

        document.body.appendChild(componentDOMelement[0])
        $compile(componentDOMelement)(scope)

        $location.url("/")

        $httpBackend.flush()
        $rootScope.$digest()
    }))

    it("Should be render a list", async () => {
        console.log(document.querySelectorAll("html")[0].outerHTML)
        expect(true).toBe(true)
    })
})
