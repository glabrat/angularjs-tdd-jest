import { TodoListComponent } from "components/todoList.component"

describe("TodoListComponent", () => {
    let controller

    beforeAll(() => {
        angular
            .module("Test", [])
            .component("todoList", TodoListComponent)
    })

    beforeEach(angular.mock.module("Test"))

    beforeEach(inject(($componentController) => {
        controller = $componentController("todoList")
    }))

    it("Should have a defined controller", () => {
        expect(controller).toBeDefined()
    })
})
