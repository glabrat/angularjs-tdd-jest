import "../../src/index";
import "angular-mocks";
import { uirouterScenario } from "angularjs-uirouter-integration-scenarios";

describe("New Todo rendering and interaction on '/newtodo' path", () => {
    const treeDOMBody = document.querySelectorAll("body")[0];
    const stateOptions = { stateName: "newtodo" };

    beforeEach(angular.mock.module("App"));
    beforeEach(uirouterScenario.build());
    beforeEach(uirouterScenario.loadState(stateOptions));

    afterEach(uirouterScenario.clean());

    it("should disable by default the submit button", () => {
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        expect(submitButton.disabled).toBe(true);
    });

    it("should enable the submit button only if the required fields was filled", () => {
        const formElement = uirouterScenario.getFormFromState("newtodoForm");
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        const requiredElements = treeDOMBody.querySelectorAll("[required]");

        Array.from(requiredElements).forEach((field) => {
            formElement[field.name].$setViewValue("somevalue");
        });

        expect(submitButton.disabled).toBe(false);
    });

    it("should show a error message if the todoName input isn't filled", () => {
        const inputElement = treeDOMBody.querySelector("input#todo-name");
        const errormessageElement = treeDOMBody.querySelector("#todo-name-error");
        const expectedErrorMessage = "El campo nombre es obligatorio";

        expect(errormessageElement.classList.contains("ng-hide")).toBe(true);

        inputElement.focus();
        inputElement.blur();

        expect(errormessageElement.classList.contains("ng-hide")).toBe(false);
        expect(errormessageElement.textContent.trim()).toEqual(expectedErrorMessage);
    });
});
