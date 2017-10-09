import "index.js"
import "angular-mocks"

describe("New Todo rendering and interaction on '/newtodo' path", () => {
    const treeDOMBody = document.querySelectorAll("body")[0]

    beforeEach(angular.mock.module("App"))
    beforeEach(inject(($rootScope, $compile, $location, $httpBackend) => {
        const componentDOMelement = angular.element("<div ui-view></div>")
        document.body.appendChild(componentDOMelement[0])
        $compile(componentDOMelement)($rootScope.$new())

        $location.url("/newtodo");
        $rootScope.$digest();
    }))

    afterEach(() => {
        treeDOMBody.querySelectorAll("div[ui-view]")[0].remove()
    })

    it("should disable by default the submit button", () => {
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        expect(submitButton.disabled).toBe(true);
    })
    it("should enable the submit button only if the required fields was filled", inject(($rootScope) => {
        const submitButton = treeDOMBody.querySelector("#todo-submit");
        const requiredElements = treeDOMBody.querySelectorAll("[required]");

        Array.from(requiredElements).forEach((field) => {
            field.value = "some value";
        });
        submitButton.disabled = false;
        console.log(treeDOMBody.outerHTML);
        expect(submitButton.disabled).toBe(false);
    }))
})
