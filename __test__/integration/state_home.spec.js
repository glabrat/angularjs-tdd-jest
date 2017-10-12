import "../../src/index";
import "angular-mocks";

import todosHttpResponse from "../../__stubs__/todos_get.json";

describe("integration on 'home' state", () => {
    const treeDOMBody = document.querySelectorAll("body")[0];

    beforeEach(angular.mock.module("App"));

    it("should call TodoService.getTodos method when the 'home' state is called", inject(($state, $httpBackend, TodoService) => {
        const getTodosSpy = jest.spyOn(TodoService, 'getTodos');

        $httpBackend
            .whenGET(/.+\/todos/)
            .respond((method, url, data, headers, params) => {
                return [200, todosHttpResponse]
            })

        $state.go("home");
        $httpBackend.flush();

        expect(getTodosSpy).toHaveBeenCalled();
    }));
    // it("Should be delete a todo when a todo item was clicked on the delete button", () => {
    //     let todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
    //     let targetTodo = todosHTMLNodeList[3]
    //     let todosInitialLength = todosHTMLNodeList.length
    //     let todosListNewLength
    //
    //     targetTodo.querySelectorAll(".btn-delete-todo")[0].click()
    //     todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
    //     todosListNewLength = todosHTMLNodeList.length
    //
    //     expect(todosListNewLength).toEqual(todosInitialLength - 1)
    //
    //     targetTodo = todosHTMLNodeList[0]
    //     targetTodo.querySelectorAll(".btn-delete-todo")[0].click()
    //     todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
    //     todosListNewLength = todosHTMLNodeList.length
    //
    //     expect(todosListNewLength).toEqual(todosInitialLength - 2)
    // })
    // it("Should be toggle a todo item if the checkbox it's pressed", () => {
    //     let todosHTMLNodeList = treeDOMBody.querySelectorAll(".todo-item")
    //     let targetTodo = todosHTMLNodeList[0]
    //     let targetTodoCheckbox = targetTodo.querySelectorAll("input[type='checkbox']")[0]
    //     let todoInitialCheckedState = targetTodoCheckbox.checked
    //     let todoNewCheckedState
    //
    //     targetTodoCheckbox.click()
    //     todoNewCheckedState = targetTodoCheckbox.checked
    //
    //     expect(todoNewCheckedState).toEqual(!todoInitialCheckedState)
    //
    //     todoInitialCheckedState = todoNewCheckedState
    //
    //     targetTodoCheckbox.click()
    //     todoNewCheckedState = targetTodoCheckbox.checked
    //
    //     expect(todoNewCheckedState).toEqual(!todoInitialCheckedState)
    // })

})
