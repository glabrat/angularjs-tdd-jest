import 'angular'
import '@uirouter/angularjs'
import 'angular-mocks'
import "index.js"

describe("TodoListComponent rendering and interaction on '/' base path", () => {
    const todosHttpResponse = require(`${__dirname}/../../stubs/todos_get.json`)
    const treeDOMBody = document.querySelectorAll("body")[0]

    //Inject the "App" module. (@TODO: Research why this module injection it's necessary en each test)
    beforeEach(angular.mock.module("App"))
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
    it("Should be delete a todo when a todo item was clicked on the delete button", () => {
        let todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        let targetTodo = todosHTMLNodeList[3]
        let todosInitialLength = todosHTMLNodeList.length
        let todosListNewLength

        targetTodo.querySelectorAll(".btn-delete-todo")[0].click()
        todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        todosListNewLength = todosHTMLNodeList.length

        expect(todosListNewLength).toEqual(todosInitialLength - 1)

        targetTodo = todosHTMLNodeList[0]
        targetTodo.querySelectorAll(".btn-delete-todo")[0].click()
        todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        todosListNewLength = todosHTMLNodeList.length

        expect(todosListNewLength).toEqual(todosInitialLength - 2)
    })
    it("Should be toggle a todo item if the checkbox it's pressed", () => {
        let todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
        let targetTodo = todosHTMLNodeList[0]
        let targetTodoCheckbox = targetTodo.querySelectorAll("input[type='checkbox']")[0]
        let todoInitialCheckedState = targetTodoCheckbox.checked
        let todoNewCheckedState

        targetTodoCheckbox.click()
        todoNewCheckedState = targetTodoCheckbox.checked

        expect(todoNewCheckedState).toEqual(!todoInitialCheckedState)

        todoInitialCheckedState = todoNewCheckedState

        targetTodoCheckbox.click()
        todoNewCheckedState = targetTodoCheckbox.checked

        expect(todoNewCheckedState).toEqual(!todoInitialCheckedState)
    })

})
