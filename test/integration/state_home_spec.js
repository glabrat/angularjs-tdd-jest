import { routes } from "routes"
import { TodoListComponent } from "components/todoList.component"
import { TodoService } from "services/todo.service"

describe("TodoListComponent rendering and interaction on '/' base path", () => {
    const todosHttpResponse = require(`${__dirname}/../../stubs/todos_get.json`)
    const treeDOMBody = document.querySelectorAll("body")[0]

    //Register once time all the ones involved in the scene on the angular module system
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
    //Inject the "Test" module. (@TODO: Research why this module injection it's necessary en each test)
    beforeEach(angular.mock.module("Test"))
    //Configure the basic setup for each test
    beforeEach(inject(($rootScope, $compile, $location, $httpBackend) => {
        //@TODO: It's possible inject the $httpBackend once instead in each test?
        //1st Building the scene: register the http interceptor
        $httpBackend
            .whenGET(/.+\/todos/)
            .respond((method, url, data, headers, params) => {
                return [200, todosHttpResponse]
            })
        //2nd Building the scene: render the root element of scene. In this case
        //it is the ui-router view
        const componentDOMelement = angular.element("<div ui-view></div>")
        //@TODO: It's possible avoid this js-dom hack?
        document.body.appendChild(componentDOMelement[0])
        //compile to the tell angular that render the generated element
        //in the js-DOM
        $compile(componentDOMelement)($rootScope.$new())

        //3rd Building the scene: go to the root location.
        $location.url("/")
        //Because in the root location exists a http resolution involved
        //(the resolve configuration for the "home" state)
        $httpBackend.flush()
    }))

    //After each test clean the ui-view
    afterEach(() => {
        treeDOMBody.querySelectorAll("div[ui-view]")[0].remove()
    })

    it("Should be render a todo list based on the httpResponse", () => {
        const todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        const todosHttpResponseLength = todosHttpResponse.todos.length
        expect(todosHTMLNodeList.length).toBe(todosHttpResponseLength)
    })
    it("Should be delete a todo when a todo item was clicked", () => {
        const todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        const targetTodo = todosHTMLNodeList[3]
        const todosListPreviousLength = todosHTMLNodeList.length

        targetTodo.querySelectorAll(".btn-delete-todo")[0].click()

        const todosListNewLength = treeDOMBody.querySelectorAll(".todo-item").length
        expect(todosListNewLength).toEqual(todosListPreviousLength - 1)
    })
})
