import "../../src/index.js"
import "angular-mocks"
import { jsdomUIRouterScenario } from "./jsdom-ui-router-scenario";
import todosHttpResponse from "../../__stubs__/todos_get.json";

describe("integration on 'home' state", () => {

    beforeEach(angular.mock.module("App"));
    beforeEach(jsdomUIRouterScenario.build);
    afterEach(jsdomUIRouterScenario.clean);

    it("should call TodoService.getTodos method when the 'home' state is called", inject(($rootScope, $state, TodoService) => {
        const getTodosSpy = jest.spyOn(TodoService, 'getTodos');

        $state.go("home");
        $rootScope.$digest();

        expect(getTodosSpy).toHaveBeenCalled();
    }));

    it("Should be render a todo list based on the httpResponse", inject(($state, $httpBackend) => {
        const todosHttpResponseLength = todosHttpResponse.todos.length;

        $httpBackend
            .whenGET(/.+\/todos/)
            .respond((method, url, data, headers, params) => {
                return [200, todosHttpResponse]
            })

        $state.go("home");
        $httpBackend.flush();

        expect(document.querySelectorAll(".todo-item").length).toBe(todosHttpResponseLength);
    }));
});
