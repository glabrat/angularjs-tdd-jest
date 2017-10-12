import "../../src/index";
import "angular-mocks";
import { jsdomUIRouterScenario } from "./jsdom-ui-router-scenario";

describe("New Todo rendering and interaction on '/newtodo' path", () => {
    const treeDOMBody = document.querySelectorAll("body")[0];

    beforeEach(angular.mock.module("App"));
    beforeEach(jsdomUIRouterScenario.build);
    beforeEach(inject(($state, $rootScope) => {
        $state.go("newtodo");
        $rootScope.$digest();
    }));
    afterEach(jsdomUIRouterScenario.clean);

    it("should disable by default the submit button", () => {
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        expect(submitButton.disabled).toBe(true);
    })
    it("should enable the submit button only if the required fields was filled", () => {
        const formElement = angular.element(treeDOMBody.querySelector("form")).controller("todoForm").newtodoForm;
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        const requiredElements = treeDOMBody.querySelectorAll("[required]");

        Array.from(requiredElements).forEach((field) => {
            formElement[field.name].$setViewValue("somevalue");
        });

        expect(submitButton.disabled).toBe(false);
    })
})
