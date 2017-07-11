import { TodoListComponent } from 'components/TodoListComponent'

describe("TodoListComponent", () => {

    let TodoListComponent
    let controller

    before(() => {
        angular
            .module("Test")
            .component(TodoListComponent);
    })

    beforeEach(inject(($componentController) => {
        controller = $componentController('todoList')
    }))

    it("Should have a defined controller", () => {
        expect(controller).toDefined()
    })
})
