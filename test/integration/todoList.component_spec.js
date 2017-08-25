import { routes } from "routes"
import { TodoListComponent } from "components/todoList.component"
import { TodoService } from "services/todo.service"

const { FakeServer } = require(`${__dirname}/fakeserver`)

describe("TodoListComponent rendering and interaction on '/' base path", () => {
    let componentDOMelement
    let stateService
    let fakeServer

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

    beforeEach(inject(($rootScope, $compile, $state, $httpBackend) => {
        //Build the scene

        //1st let's create a fake server for intercept the http requests and fake the responses
        fakeServer = new FakeServer($httpBackend)
        fakeServer.register({
            get  : [ "todos" ]
        })

        //2nd render the root element of scene: We needs a router view for load the base path
        let scope = $rootScope.$new()
        componentDOMelement = angular.element("<div ui-view></div>")

        $compile(componentDOMelement)(scope)
        scope.$digest()

        document.body.appendChild(componentDOMelement[0])

        //3rd Let's generate the basic scenario: Go at home state ("/" path)
        $state.go("home")
        $rootScope.$digest()
        $httpBackend.flush()
    }))

    it("Should be render a list", () => {
        console.log("HTML rendered")
        console.log(document.querySelectorAll("html")[0].outerHTML)
    })
})
