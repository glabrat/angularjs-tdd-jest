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

});
